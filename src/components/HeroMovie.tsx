import {
  Title,
  Text,
  Group,
  Box,
  Card,
  ThemeIcon,
  Flex,
  Badge,
} from "@mantine/core";
import { MediaDetail } from "../types/MovieDetail/MediaDetail";
import {
  IconChalkboard,
  IconHeart,
  IconRating16Plus,
  IconShare,
} from "@tabler/icons-react";
import styles from "./HeroMovie.module.css";
import { genresProps } from "../store/movieslice";

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
    <>
      <Card className={styles.movie_card} id="ave">
        <div className={styles.info_section}>
          <div className={styles.movie_header}>
            <img
              className={styles.locandina}
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                  : "/fallback.jpg"
              }
            />
            <Title order={2} pt={"xl"} color="white">
              {data.title || data.name}
            </Title>
            <Title order={5} color="white">
              2018, Ryan Coogler
            </Title>

            <Group>
              <Title order={5} color="dimmed">
                Time:
              </Title>
              {data?.runtime && (
                <Text color="white">
                  {/* {toHourandMinute(movieDetail.runtime)} */}
                  1hr
                </Text>
              )}
            </Group>
            <Flex gap={5}>
              {data?.genres.map(({ id, name }: genresProps) => (
                <Badge key={id} color="red" radius="xs" variant="outline">
                  {name}
                </Badge>
              ))}
            </Flex>
          </div>
          <Box className={styles.movie_desc}>
            <Text pl={"sm"} color="white">
              {data.overview}
            </Text>
          </Box>
          <Group p={"lg"}>
            <IconShare color="white" />
            <IconHeart color="white" />
            <IconChalkboard color="white" />
          </Group>
        </div>
        <Box
          className={styles.blur_back}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${
              data.poster_path
                ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                : "/fallback.jpg"
            })`,
          }}
        />
      </Card>
    </>
  );
}
