import React, { useMemo } from "react";
import { Carousel } from "@mantine/carousel";
import { Skeleton, Title, Text } from "@mantine/core";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useStyle } from "../../styles/useStyle";
import MovieCard from "./MovieCard";
import { MediaItem } from "../../types/Movietype/MediaList";
import { useMediaQuery } from "@mantine/hooks";

/** Custom Hook for Media Queries */
const useMediaQueries = () => {
  return {
    isTabletOrSmaller: useMediaQuery("(max-width: 768px)"),
    isMobile: useMediaQuery("(max-width: 420px)"),
  };
};

interface CarouselProps {
  title?: string;
  data?: MediaItem[];
  loading: boolean;
  endpoint?: string | string[];
}

/** Carousel Component */
const CarouselComponent: React.FC<CarouselProps> = ({
  title,
  data = [],
  loading,
  endpoint,
}) => {
  const { isTabletOrSmaller, isMobile } = useMediaQueries();
  const { classes } = useStyle();

  /** Extracts the first endpoint if it's an array */
  const mediaType = useMemo(
    () => (Array.isArray(endpoint) ? endpoint[0] : endpoint),
    [endpoint]
  );

  /** Renders a loading skeleton */
  const renderLoadingSkeleton = () => (
    <>
      {title && (
        <Title fw={500} size={isTabletOrSmaller ? 18 : 20}>
          {title}
        </Title>
      )}
      <Carousel my={20} slideSize="20%" slideGap="lg" loop align="start">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Slide key={index}>
            <Skeleton height={300} width="100%" className={classes.skeleton} />
            <Skeleton
              mt={20}
              height={20}
              width="90%"
              className={classes.skeleton}
            />
            <Skeleton
              mt={20}
              height={20}
              width="50%"
              className={classes.skeleton}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );

  /** Renders empty state */
  const renderEmptyState = () => <Text>No data available</Text>;

  if (loading) return renderLoadingSkeleton();
  if (!data.length) return renderEmptyState();

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
