import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Overlay,
  ActionIcon,
  Title,
  Flex,
  Box,
} from "@mantine/core";
import { MediaDetail } from "../types/MediaDetail";
import {
  IconHeart,
  IconShare,
  IconPlayerPlay,
  IconStar,
  IconClock,
  IconInfoCircle,
} from "@tabler/icons-react";
import { genresProps } from "../store/movieslice";
import { getYearFromReleaseDate, toHour } from "../util/time";
import useFavoritesStore from "../store/useFavouriteStore";

interface HeroMovieProps {
  data: MediaDetail;
  onWatchTrailer?: () => void; // Optional handler for trailer
  onWatchMovie?: () => void; // Optional handler for watching the movie
}

export default function HeroMovie({
  data,
  onWatchTrailer,
  onWatchMovie,
}: HeroMovieProps) {
  const { add, remove, favorites } = useFavoritesStore();

  const isFavorite = favorites.some((fav) => fav.id === data.id);
  // console.log(isFavorite);
  const toggleFavorite = (e: React.MouseEvent) => {
    isFavorite ? remove(data.id) : add(data.id, data?.title ? "movie" : "tv");
  };

  return (
    <>
      <Card
        padding="lg"
        radius="md"
        withBorder
        sx={(theme) => ({
          backgroundColor: theme.fn.linearGradient(
            45,
            theme.colors.cyan[9],
            theme.colors.blue[9]
          ),
          maxWidth: 900,
          width: "100%",
          margin: "auto",
        })}
      >
        <Flex direction={{ base: "column", sm: "row" }} gap="md">
          <Box pos="relative" w={{ base: "100%", sm: "40%" }}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
              height={300}
              alt="Moana 2 Movie Poster"
              fit="cover"
              sx={{
                transition: "transform 500ms",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Overlay
              gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 90%)"
              opacity={0.85}
              zIndex={1}
            />
            <Flex
              justify="center"
              align="center"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                transition: "opacity 300ms",
                "&:hover": {
                  opacity: 1,
                },
                zIndex: 2,
              }}
            >
              <ActionIcon variant="filled" color="cyan" size="xl" radius="xl">
                <IconPlayerPlay size={28} />
              </ActionIcon>
            </Flex>
          </Box>

          <Stack spacing="md" style={{ flex: 1 }}>
            <Flex justify="space-between" align="flex-start">
              <Stack spacing={4}>
                <Title order={2}>{data.title || data.name}</Title>

                <Group spacing="xs" color="dimmed">
                  <Text size="sm">
                    {getYearFromReleaseDate(data.release_date)}
                  </Text>
                  <Group spacing={4}>
                    {data?.runtime && (
                      <>
                        <IconClock size={14} />
                        <Text size="sm">
                          <Text>{toHour(data.runtime)}</Text>
                        </Text>
                      </>
                    )}
                  </Group>
                </Group>
              </Stack>
              <Badge
                leftSection={<IconStar size={14} style={{}} />}
                color="red"
                variant="filled"
                size="lg"
              >
                {Number(data?.vote_average).toFixed(1)}
              </Badge>
            </Flex>

            <Group mt={20}>
              {data?.genres.map(({ id, name }: genresProps) => (
                <Badge key={id} color="red" variant="dot" size="lg">
                  {name}
                </Badge>
              ))}
            </Group>

            <Text size="sm" color="gray.4">
              {data.overview}
            </Text>

            <Group spacing="xs" mt="md">
              <Button
                leftIcon={<IconPlayerPlay size={18} />}
                color="cyan"
                sx={{ flex: 1 }}
              >
                Watch Trailer
              </Button>
              <ActionIcon
                variant="light"
                color={isFavorite ? "red" : "gray"}
                onClick={toggleFavorite}
              >
                <IconHeart
                  size={18}
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </ActionIcon>
              <ActionIcon variant="light" color="gray">
                <IconShare size={18} />
              </ActionIcon>
              <ActionIcon variant="light" color="gray">
                <IconInfoCircle size={18} />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>
      </Card>
    </>
  );
}
