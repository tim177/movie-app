import {
  Container,
  Flex,
  Card,
  Box,
  Title,
  Text,
  Badge,
  Stack,
  Group,
  ThemeIcon,
  Button,
} from "@mantine/core";
import { NavLink, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import useHomeStore, { genresProps } from "../../store/movieslice";
import SkeletonComponent from "../../components/ui/SkeletonComponent";
import fetchDataFromApi from "../../api";

import { useStyle } from "../../styles/useStyle";
import { CrewType, videoresult } from "../../types/MovieDetail/Credit";
import { useQuery } from "@tanstack/react-query";
import {
  IconArrowLeft,
  IconBrandYoutube,
  IconHeart,
  IconHeartFilled,
  IconStar,
} from "@tabler/icons-react";
import useFavoritesStore from "../../store/useFavouriteStore";
import { MediaDetail } from "../../types/MovieDetail/MediaDetail";

interface StatusType {
  // id: number;
  crew?: CrewType[];
  video?: videoresult;
}

const DetailBanner: FC<StatusType> = ({ crew, video }) => {
  const { add, remove, favorites } = useFavoritesStore();
  const { classes } = useStyle();

  const { name, id } = useParams();

  const isFavorite = favorites.find((fav) => fav.id === Number(id));
  const Icon = isFavorite ? <IconHeartFilled /> : <IconHeart />;

  const isSmallerThanTable = useMediaQuery("(max-width:768px)");
  const isSmallestTable = useMediaQuery("(max-width:420px)");
  const director = crew?.filter((f) => f.job === "Director");

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      remove(Number(id));
    } else {
      add(Number(id), name!);
    }
  };

  const { data: movieDetail, isFetching } = useQuery<MediaDetail>({
    queryKey: ["movie-detail", { name, id }],
    queryFn: () => fetchDataFromApi(`${name}/${id}`),
    refetchOnWindowFocus: false,
  });

  const toHourandMinute = (totalMinute: number) => {
    const hours = Math.floor(totalMinute / 60);
    const minutes = totalMinute % 60;
    return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
  };

  return (
    <Container size={"lg"} pb={60}>
      {!isFetching ? (
        <>
          <Flex justify="space-between">
            <NavLink to="/app/movie">
              <ThemeIcon
                radius="xl"
                mb={20}
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
              onClick={clickHandler}
              style={{
                zIndex: 100,
                position: "relative",
                cursor: "pointer",
              }}
            >
              {Icon}
            </ThemeIcon>
          </Flex>
          <LazyLoadImage
            className={classes.lazyImage}
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
          />

          <Flex
            gap={20}
            w={"100%"}
            style={{
              position: "relative",
              flexFlow: "row wrap",
              zIndex: 10,
            }}
          >
            <Box w={isSmallestTable ? "100%" : "30%"} mx={"auto"}>
              <Card h={480} p={0}>
                <img
                  width={"100%"}
                  height={"100%"}
                  src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
                  alt={"title"}
                />
              </Card>

              <ThemeIcon
                radius="xl"
                mb={20}
                size="xl"
                color="red"
                variant="light"
                mt={20}
                style={{
                  zIndex: 100,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <IconBrandYoutube />
              </ThemeIcon>
            </Box>
            <Box w={isSmallestTable ? "100%" : "65%"} mt={20}>
              <Flex direction={"column"} gap={10} pos={"relative"}>
                <Title color="white" size={isSmallerThanTable ? 20 : 25}>
                  {movieDetail?.title || movieDetail?.name}
                </Title>
                <Text
                  fw={700}
                  mt={10}
                  size={isSmallerThanTable ? 18 : 20}
                  color="white"
                >
                  {movieDetail?.tagline}
                </Text>
                <Flex gap={5}>
                  {movieDetail?.genres.map(({ id, name }: genresProps) => (
                    <Badge key={id} color="red" radius="xs" variant="outline">
                      {name}
                    </Badge>
                  ))}
                </Flex>
                <Stack spacing={0} mt={60}>
                  <Group spacing="xs">
                    <IconStar color="yellow" />
                    <Text color="white">{movieDetail?.vote_average}</Text>
                  </Group>

                  <Group>
                    <Title order={5} color="dimmed">
                      Year:
                    </Title>
                    <Text color="white">{movieDetail?.release_date}</Text>
                  </Group>
                  <Group>
                    <Title order={5} color="dimmed">
                      Time:
                    </Title>
                    {movieDetail?.runtime && (
                      <Text color="white">
                        {toHourandMinute(movieDetail.runtime)}
                      </Text>
                    )}
                  </Group>
                  <Group>
                    <Title order={5} color="dimmed">
                      Language:
                    </Title>
                    <Text color="white">{movieDetail?.original_language}</Text>
                  </Group>
                  <Group>
                    <Title order={5} color="dimmed">
                      Director:
                    </Title>
                    {director && (
                      <Text color="white">{director.map((d) => d.name)}</Text>
                    )}
                  </Group>
                  <div>
                    <Text color="white">
                      <span style={{ fontWeight: "bold", color: "gray" }}>
                        Summary:
                      </span>{" "}
                      {movieDetail?.overview}
                    </Text>
                  </div>
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </>
      ) : (
        <SkeletonComponent style={true} />
      )}
    </Container>
  );
};

export default DetailBanner;
