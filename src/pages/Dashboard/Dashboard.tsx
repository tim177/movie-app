import { Container, Divider, Center, Text, Button, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import fetchDataFromApi from "../../api";
import Trending from "./Trending";
import Popular from "./Popular";
import Toprated from "./TopRated";
import HeroMovie from "../../components/HeroMovie";
import useFavoritesStore from "../../store/useFavouriteStore";
import { MediaDetail } from "../../types/MovieDetail/MediaDetail";
import { useState } from "react";

export default function Dashboard() {
  const { favorites } = useFavoritesStore();
  const [showAnimation, setShowAnimation] = useState(false);

  // Separate favorites into movies and TV shows
  const favoriteMovies = favorites.filter((fav) => fav.name === "movie");
  const favoriteTVShows = favorites.filter((fav) => fav.name === "tv");

  // Fetch full details for favorite movies
  const { data: movieDetails } = useQuery<MediaDetail[] | undefined>({
    queryKey: ["favorite-movie-details", favoriteMovies],
    queryFn: async () => {
      if (favoriteMovies.length === 0) return undefined;
      const results = await Promise.all(
        favoriteMovies.map((fav) =>
          fetchDataFromApi<MediaDetail>(`/movie/${fav.id}`)
        )
      );
      return results.filter(Boolean);
    },
    enabled: favoriteMovies.length > 0,
    refetchOnWindowFocus: false,
  });

  // Fetch full details for favorite TV shows
  const { data: tvDetails } = useQuery<MediaDetail[] | undefined>({
    queryKey: ["favorite-tv-details", favoriteTVShows],
    queryFn: async () => {
      if (favoriteTVShows.length === 0) return undefined;
      const results = await Promise.all(
        favoriteTVShows.map((fav) =>
          fetchDataFromApi<MediaDetail>(`/tv/${fav.id}`)
        )
      );
      return results.filter(Boolean);
    },
    enabled: favoriteTVShows.length > 0,
    refetchOnWindowFocus: false,
  });

  // Merge both movies and TV shows into one list
  const combinedFavorites = [...(movieDetails ?? []), ...(tvDetails ?? [])];

  return (
    <Container size="lg" py="xl">
      {combinedFavorites.length > 0 ? (
        <HeroMovie data={combinedFavorites[0]} />
      ) : (
        <Center h={300}>
          <Stack align="center">
            <Text size="xl" weight={600} color="gray.7">
              🚀 No favorites added yet!
            </Text>
            <Text color="dimmed" size="md">
              Start exploring and add your favorite movies or TV shows!
            </Text>
            <Button
              variant="light"
              size="md"
              radius="md"
              onClick={() => setShowAnimation(true)}
            >
              Discover Movies 🎬
            </Button>
            {showAnimation && (
              <Text size="lg" color="blue.6" weight={500}>
                🎉 Woohoo! Let's find some awesome movies!
              </Text>
            )}
          </Stack>
        </Center>
      )}
      <Divider my="lg" />
      <Trending />
      <Popular />
      <Toprated />
    </Container>
  );
}
