import { FC } from "react";
import {
  Title,
  Text,
  Badge,
  Stack,
  Group,
  Flex,
  Divider,
  Rating,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

import { MediaDetail } from "../../types/MovieDetail/MediaDetail";
import { CrewType } from "../../types/MovieDetail/Credit";
import { genresProps } from "../../store/movieslice";
import { toHourAndMinute } from "../../util/time";

interface MovieInfoProps {
  movieDetail?: MediaDetail;
  crew?: CrewType[];
}

const MovieInfo: FC<MovieInfoProps> = ({ movieDetail, crew }) => {
  const director = crew?.find((person) => person.job === "Director")?.name;

  return (
    <Flex direction={"column"} gap={10} pos={"relative"}>
      <Title color="white">{movieDetail?.title || movieDetail?.name}</Title>
      <Title color="dimmed" order={4}>
        {movieDetail?.tagline}
      </Title>
      <Rating
        defaultValue={movieDetail?.vote_average}
        mt={20}
        count={10}
        size="md"
        fractions={2}
      />
      <Group>
        <Text color="white">{movieDetail?.release_date}</Text>
        <Divider size="sm" orientation="vertical" />
        {movieDetail?.runtime && (
          <Text color="white">{toHourAndMinute(movieDetail.runtime)}</Text>
        )}
      </Group>
      <Group mt={20}>
        {movieDetail?.genres.map(({ id, name }: genresProps) => (
          <Badge key={id} color="red" variant="dot" size="lg">
            {name}
          </Badge>
        ))}
      </Group>
      {director && (
        <Stack spacing={0} mt={20}>
          <Text color="dimmed">Director:</Text>
          <Text color="white">{director}</Text>
        </Stack>
      )}
      <Stack>
        <Text color="white">
          <Text style={{ fontWeight: "bold", color: "gray", paddingRight: 10 }}>
            Summary:
          </Text>
          {movieDetail?.overview}
        </Text>
      </Stack>
    </Flex>
  );
};

export default MovieInfo;
