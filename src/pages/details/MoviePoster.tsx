import { FC } from "react";
import { Card, ThemeIcon } from "@mantine/core";
import { IconBrandYoutube } from "@tabler/icons-react";

interface MoviePosterProps {
  posterPath?: string;
}

const MoviePoster: FC<MoviePosterProps> = ({ posterPath }) => (
  <>
    <Card p={0} m="xl">
      <img
        width="100%"
        height="100%"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="Movie Poster"
      />
    </Card>
    <ThemeIcon
      radius="xl"
      size="xl"
      mb={20}
      color="red"
      variant="light"
      style={{ position: "relative", overflow: "hidden", zIndex: 100 }}
    >
      <IconBrandYoutube />
    </ThemeIcon>
  </>
);

export default MoviePoster;
