import { FC } from "react";
import { Card, Container, Skeleton, Title, Text, Stack } from "@mantine/core";
import Avator from "../../assets/no-poster.png";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { CastType } from "../../types/MovieDetail/Credit";
import { useStyle } from "../../styles/useStyle";
import useHomeStore from "../../store/movieslice";

interface CastProps {
  cast?: CastType[];
  loading: boolean;
}

const Cast: FC<CastProps> = ({ cast, loading }) => {
  const { classes } = useStyle();
  const url = useHomeStore((state) => state.url);
  const navigate = useNavigate();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");
  const isSmallestTable = useMediaQuery("(max-width:420px)");
  return (
    <Container
      mx={0}
      size={"lg"}
      style={{
        position: "relative",
        zIndex: 9,
      }}
      my={20}
    >
      {cast && cast?.length > 0 && (
        <Title my={10} size={isSmallerThanTable ? 16 : 20} color="white">
          Top Cast
        </Title>
      )}
      <Carousel
        slidesToScroll={3}
        slideSize={
          isSmallestTable ? "50%" : isSmallerThanTable ? "33.33%" : "20%"
        }
        slideGap="lg"
        withControls={true}
        controlSize={40}
        controlsOffset="md"
        loop
        align="start"
      >
        {cast?.map((actor, index) => {
          const actorUrl = actor.profile_path
            ? `https://image.tmdb.org/t/p/original/${actor?.profile_path}`
            : Avator;

          return (
            <Carousel.Slide key={index}>
              <Card
                h={300}
                p={0}
                style={{ cursor: "pointer", position: "relative" }}
                onClick={() => navigate(`/cast/${actor.id}`)}
              >
                {loading ? (
                  <Skeleton height={300} className={classes.skeleton} />
                ) : (
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={actorUrl}
                    alt="cast-image"
                  />
                )}
              </Card>

              <Text mt={4} size={14} align="center" fw={700} color="dimmed">
                {actor.name}
              </Text>
              <Text
                align="center"
                fw={500}
                opacity={0.7}
                size={isSmallerThanTable ? 12 : 14}
                color="white"
              >
                {actor.character}
              </Text>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Cast;
