import { Card, Text } from "@mantine/core";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png";
import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { MediaItem } from "../../types/Movietype/MediaList";

interface MovieCardProps {
  mediatype?: string;
  explore: MediaItem;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieCard: FC<MovieCardProps> = ({ explore, mediatype }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const posterUrl = explore.poster_path
    ? `${IMAGE_BASE_URL}${explore.poster_path}`
    : PosterFallback;

  return (
    <Card
      h={300}
      w="100%"
      p={0}
      style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
    >
      <img
        width="100%"
        height="100%"
        src={posterUrl}
        alt={explore.title || explore.name || "Movie Poster"}
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      <Text
        fw={700}
        size={isMobile ? 12 : 16}
        color="white"
        mt="md"
        align="center"
      >
        {explore.title?.substring(0, 20) || explore.name?.substring(0, 20)}...
      </Text>
      <Text size={isMobile ? 12 : 16} color="white" align="center">
        {explore.release_date
          ? dayjs(explore.release_date).format("YYYY")
          : "N/A"}
      </Text>
    </Card>
  );
};

export default MovieCard;
