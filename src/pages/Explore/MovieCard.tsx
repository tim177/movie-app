import { Flex, Image, Text, Group } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { MediaDetail } from "../../types/MovieDetail/MediaDetail";

interface MovieCardProps {
  data: MediaDetail;
  mediaType: string;
}

export default function MovieCard({ data, mediaType }: MovieCardProps) {
  return (
    <Link
      to={`/app/${mediaType}/${data.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Flex direction="column">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          height={300}
          alt={data.title}
          radius="lg"
        />
        <Text fw={500} size="sm" ta="center" mt={5}>
          {data.title}
        </Text>
        <Group spacing="xs" position="center">
          <IconStar size={16} />
          <Text size="sm">{data.vote_average}</Text>
        </Group>
      </Flex>
    </Link>
  );
}
