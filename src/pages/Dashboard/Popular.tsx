import { Box, Container, Flex, SegmentedControl, Title } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useSegements } from "../../styles/SegmentStyle";
import { useFetchPopularMedia } from "../../hooks/useFetchPopularMedia";
import CarouselComponent from "../../components/shared/CarouselComponent";

const MEDIA_TYPES = { TV: "tv", MOVIE: "movie" } as const;

const Popular = () => {
  const [mediaType, setMediaType] = useState<"tv" | "movie">(MEDIA_TYPES.TV);
  const { classes } = useSegements();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");

  const { data, isLoading, isFetching } = useFetchPopularMedia(mediaType);

  const handleTabChange = (value: string) => {
    setMediaType(MEDIA_TYPES[value as keyof typeof MEDIA_TYPES]);
  };

  return (
    <Box h="100%" style={{ position: "relative" }}>
      <Container mt={50} size="lg">
        <Flex justify="space-between" align="center">
          <Title fw={500} size={isSmallerThanTable ? 18 : 20}>
            Popular
          </Title>
          <SegmentedControl
            radius="sm"
            size="sm"
            data={Object.keys(MEDIA_TYPES)}
            classNames={classes}
            onChange={handleTabChange}
          />
        </Flex>
        <CarouselComponent
          data={data?.results ?? []}
          loading={isFetching || isLoading}
          endpoint={mediaType}
        />
      </Container>
    </Box>
  );
};

export default Popular;
