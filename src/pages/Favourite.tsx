import {
  Box,
  Container,
  Flex,
  SegmentedControl,
  Title,
  Text,
  Center,
} from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import fetchDataFromApi from "../api";
import { useSegements } from "../styles/SegmentStyle";
import useFavoritesStore from "../store/useFavouriteStore";
import { MediaItem } from "../types/MediaList";
import CarouselComponent from "../components/shared/CarouselComponent";

const Favourites = () => {
  const [endpoint, setEndpoint] = useState<"tv" | "movie">("tv");
  const { favorites } = useFavoritesStore();

  const filteredFavorites = favorites.filter((fav) => fav.name === endpoint);

  const {
    data: favoriteMovies,
    isLoading,
    isFetching,
  } = useQuery<MediaItem[] | undefined>({
    queryKey: ["favorite-movies", endpoint, filteredFavorites],
    queryFn: async () => {
      if (filteredFavorites.length === 0) return undefined;
      const results = await Promise.all(
        filteredFavorites.map((fav) =>
          fetchDataFromApi<MediaItem>(`/${fav.name}/${fav.id}`)
        )
      );
      return results.filter(Boolean);
    },
    enabled: filteredFavorites.length > 0,
    refetchOnWindowFocus: false,
  });

  const onTabChange = (data: string) => {
    setEndpoint(data === "TV" ? "tv" : "movie");
  };

  const { classes } = useSegements();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");

  return (
    <Box h={"100%"} style={{ position: "relative" }}>
      <Container mt={50} size={"lg"}>
        <Flex justify={"space-between"} align={"center"}>
          <Title fw={500} size={isSmallerThanTable ? 18 : 20}>
            Favorite {endpoint === "tv" ? "TV Shows" : "Movies"}
          </Title>
          <SegmentedControl
            radius="xl"
            size={"sm"}
            data={["TV", "MOVIE"]}
            classNames={classes}
            onChange={onTabChange}
          />
        </Flex>

        {filteredFavorites.length === 0 ? (
          <Center mt={50}>
            <Text size="lg" color="dimmed">
              No {endpoint === "tv" ? "TV shows" : "movies"} in favorites yet.
            </Text>
          </Center>
        ) : (
          <CarouselComponent
            data={favoriteMovies ?? []}
            loading={isFetching || isLoading}
            endpoint={endpoint}
          />
        )}
      </Container>
    </Box>
  );
};

export default Favourites;
