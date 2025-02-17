import { FC } from "react";
import { Card, Image, ThemeIcon } from "@mantine/core";
import { IconBrandYoutube } from "@tabler/icons-react";
import classes from "./MoviePoster.module.css";

interface MoviePosterProps {
  posterPath?: string;
}

const MoviePoster: FC<MoviePosterProps> = ({ posterPath }) => (
  <>
    <Card p={0} m="xl">
      <Image
        className={classes.posterImage} // Add className to the image
        width="100%"
        height="100%"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="Movie Poster"
      />
    </Card>
    <ThemeIcon
      radius="xl"
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
