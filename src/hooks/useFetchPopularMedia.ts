import { useQuery } from "@tanstack/react-query";
import { MediaList } from "../types/MediaList";
import fetchDataFromApi from "../api";

const fetchPopularMedia = async (type: "tv" | "movie"): Promise<MediaList> => {
  return fetchDataFromApi(`/${type}/popular`);
};

export const useFetchPopularMedia = (mediaType: "tv" | "movie") => {
  return useQuery<MediaList, Error>({
    queryKey: ["popular", mediaType],
    queryFn: () => fetchPopularMedia(mediaType),
    refetchOnWindowFocus: false,
  });
};
