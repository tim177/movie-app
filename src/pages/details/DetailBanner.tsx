import { Container, Flex, Box } from "@mantine/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchDataFromApi from "../../api";
import { useStyle } from "../../styles/useStyle";
import { CrewType, videoresult } from "../../types/Credit";
import { MediaDetail } from "../../types/MediaDetail";
import SkeletonComponent from "../../components/ui/SkeletonComponent";

import MovieActions from "./MovieActions";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";

interface DetailBannerProps {
  crew?: CrewType[];
  video?: videoresult;
}

const DetailBanner: FC<DetailBannerProps> = ({ crew }) => {
  const { classes } = useStyle();
  const { name, id } = useParams();
  const isSmallestTable = useMediaQuery("(max-width:420px)");

  const { data: movieDetail, isFetching } = useQuery<MediaDetail>({
    queryKey: ["movie-detail", { name, id }],
    queryFn: () => fetchDataFromApi(`${name}/${id}`),
    refetchOnWindowFocus: false,
  });

  if (isFetching) return <SkeletonComponent style />;

  return (
    <Container size="lg" pb={60}>
      <MovieActions movieId={Number(id)} movieName={name!} />
      <div />
      <LazyLoadImage
        className={classes.lazyImage}
        src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
      />
      <Flex
        gap={20}
        w="100%"
        style={{
          position: "relative",
          flexFlow: "row wrap",
          zIndex: 10,
        }}
      >
        <Box w={isSmallestTable ? "100%" : "30%"} mx="auto">
          <MoviePoster posterPath={movieDetail?.poster_path} />
        </Box>
        <Box w={isSmallestTable ? "100%" : "65%"} mt={20}>
          <MovieInfo movieDetail={movieDetail} crew={crew} />
        </Box>
      </Flex>
    </Container>
  );
};

export default DetailBanner;
