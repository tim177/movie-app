import useFavoriteDetails from "../../hooks/useFavoriteDetails";
import { Container, Divider, Center, Text, Button, Stack } from "@mantine/core";
import HeroMovie from "../../components/HeroMovie";
import Trending from "./Trending";
import Popular from "./Popular";
import Toprated from "./TopRated";
import useFavoritesStore from "../../store/useFavouriteStore";
import AnimationMessage from "../../components/AnimationMessage";
import { Carousel } from "@mantine/carousel";

export default function Dashboard() {
  const { favorites } = useFavoritesStore();

  // Separate favorites into movies and TV shows
  const favoriteMovies = favorites.filter((fav) => fav.name === "movie");
  const favoriteTVShows = favorites.filter((fav) => fav.name === "tv");

  // Convert id to string for the API request
  const movieFavorites = favoriteMovies.map((fav) => ({
    id: String(fav.id), // Convert to string here
    name: fav.name,
  }));
  const tvFavorites = favoriteTVShows.map((fav) => ({
    id: String(fav.id), // Convert to string here
    name: fav.name,
  }));

  // Fetch full details for favorite movies and TV shows
  const { data: movieDetails } = useFavoriteDetails(movieFavorites, "movie");
  const { data: tvDetails } = useFavoriteDetails(tvFavorites, "tv");

  // Merge both movies and TV shows into one list
  const combinedFavorites = [...(movieDetails ?? []), ...(tvDetails ?? [])];

  console.log("combinedFavoutesr", combinedFavorites);
  return (
    <Container size="lg" py="xl">
      {combinedFavorites.length > 0 ? (
        <Carousel>
          {combinedFavorites.map((movie, index) => (
            <Carousel.Slide key={index}>
              <HeroMovie data={movie} />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <Center h={300}>
          <Stack align="center">
            <AnimationMessage />
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
