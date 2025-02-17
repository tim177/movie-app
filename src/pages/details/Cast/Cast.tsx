import { FC } from "react";
import { Container, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import CastCard from "./CastCard";
import { CastProps } from "../../../types/Credit";
import { useBreakpoints } from "../../../util/mediaQueries";

const Cast: FC<CastProps> = ({ cast, loading }) => {
  const { isSmallerThanTable, isSmallestTable } = useBreakpoints();

  return (
    <Container
      mx={0}
      size={"100%"}
      style={{ position: "relative", zIndex: 9 }}
      my={20}
    >
      {cast && cast.length > 0 && (
        <Title my={10} size={isSmallerThanTable ? 16 : 20}>
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
        {cast?.map((actor, index) => (
          <Carousel.Slide key={index}>
            <CastCard actor={actor} loading={loading} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Cast;
