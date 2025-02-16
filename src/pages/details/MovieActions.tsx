import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Flex, ThemeIcon } from "@mantine/core";
import { IconArrowLeft, IconHeart, IconHeartFilled } from "@tabler/icons-react";

import useFavoritesStore from "../../store/useFavouriteStore";

interface MovieActionsProps {
  movieId: number;
  movieName: string;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId, movieName }) => {
  const { add, remove, favorites } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === movieId);
  const Icon = isFavorite ? <IconHeartFilled /> : <IconHeart />;

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    isFavorite ? remove(movieId) : add(movieId, movieName);
  };

  return (
    <Flex justify="space-between">
      <NavLink to="/app/movie">
        <ThemeIcon
          radius="xl"
          size="xl"
          color="red"
          variant="outline"
          style={{
            zIndex: 100,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <IconArrowLeft />
        </ThemeIcon>
      </NavLink>
      <ThemeIcon
        radius="xl"
        size="xl"
        color="red"
        variant="outline"
        onClick={toggleFavorite}
        style={{ cursor: "pointer", zIndex: 100, position: "relative" }}
      >
        {Icon}
      </ThemeIcon>
    </Flex>
  );
};

export default MovieActions;
