import {
  Title,
  Text,
  Button,
  Badge,
  Group,
  Image,
  Flex,
  BackgroundImage,
  Grid,
  Box,
  Stack,
} from "@mantine/core";
import { MediaDetail } from "../types/MovieDetail/MediaDetail";

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
  return (
    <Grid>
      <Grid.Col>
        <BackgroundImage
          src={
            data.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
              : "/fallback.jpg"
          }
          radius="sm"
          sx={{
            padding: "30px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Flex gap="xl">
            {/* Movie Poster */}
            <Box sx={{ zIndex: 10 }}>
              <Image
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    : "/fallback.jpg"
                }
                height={300}
                width={200}
                fit="cover"
                alt={data.title || data.name}
                radius="md"
              />
            </Box>

            {/* Movie Details */}
            <Stack spacing="xs" sx={{ zIndex: 10 }}>
              <Title color="white">{data.title || data.name}</Title>

              <Group>
                <Text color="white">
                  {data.release_date || "N/A"} |{" "}
                  {data.runtime ? `${data.runtime} min` : "Unknown duration"}
                </Text>
              </Group>

              <Group>
                {data.genres.map((genre) => (
                  <Badge
                    key={genre.id}
                    color="red"
                    radius="xs"
                    variant="outline"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </Group>

              <Group mt="auto">
                <Button
                  variant="light"
                  size="lg"
                  onClick={onWatchTrailer}
                  aria-label="Watch Trailer"
                >
                  Trailer
                </Button>
                <Button
                  size="lg"
                  onClick={onWatchMovie}
                  aria-label="Watch Movie"
                >
                  Watch Movie
                </Button>
              </Group>
            </Stack>
          </Flex>
        </BackgroundImage>
      </Grid.Col>
    </Grid>
  );
}
