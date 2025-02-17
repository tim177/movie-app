import React, { useMemo } from "react";
import { Carousel } from "@mantine/carousel";
import { Title, Text } from "@mantine/core";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useStyle } from "../../styles/useStyle";
import { MediaItem } from "../../types/MediaList";
import CarouselSkeleton from "./CarouselSkeleton";
import { useMediaQueries } from "./useMediaQueries";
import MovieCard from "../ui/MovieCard";

interface CarouselProps {
  title?: string;
  data?: MediaItem[];
  loading: boolean;
  endpoint?: string | string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({
  title,
  data = [],
  loading,
  endpoint,
}) => {
  const { isTabletOrSmaller, isMobile } = useMediaQueries();
  const { classes } = useStyle();
  const mediaType = useMemo(
    () => (Array.isArray(endpoint) ? endpoint[0] : endpoint),
    [endpoint]
  );

  if (loading) return <CarouselSkeleton title={title} />;
  if (!data.length) return <Text>No data available</Text>;

  return (
    <>
      {title && (
        <Title fw={500} size={isTabletOrSmaller ? 18 : 20}>
          {title}
        </Title>
      )}
      <Carousel
        my={20}
        slideSize={isMobile ? "50%" : isTabletOrSmaller ? "33.33%" : "20%"}
        slideGap={isTabletOrSmaller ? "md" : "lg"}
        loop
        align="start"
        withControls={data.length > 5 && !isTabletOrSmaller}
        slidesToScroll={2}
        classNames={classes}
        nextControlIcon={<BsFillArrowRightCircleFill size={30} color="#000" />}
        previousControlIcon={
          <BsFillArrowLeftCircleFill size={30} color="#000" />
        }
      >
        {data.map((mediaItem) => (
          <Carousel.Slide key={mediaItem.id}>
            <MovieCard explore={mediaItem} mediatype={mediaType} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
