import { useQuery } from "@tanstack/react-query";
import { MediaDetail } from "../types/MediaDetail";
import fetchDataFromApi from "../api";

// Custom hook to fetch details for favorite media (movies or TV shows)
const useFavoriteDetails = (
  favorites: { id: string; name: string }[],
  type: "movie" | "tv"
) => {
  return useQuery<MediaDetail[] | undefined>({
    queryKey: [`favorite-${type}-details`, favorites],
    queryFn: async () => {
      if (favorites.length === 0) return undefined;
      const results = await Promise.all(
        favorites.map((fav) =>
          fetchDataFromApi<MediaDetail>(`/${type}/${fav.id}`)
        )
      );
      return results.filter(Boolean);
    },
    enabled: favorites.length > 0,
    refetchOnWindowFocus: false,
  });
};

export default useFavoriteDetails;
