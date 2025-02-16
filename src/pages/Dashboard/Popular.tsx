import { Box, Container, Flex, SegmentedControl, Title } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useSegements } from "../../styles/SegmentStyle";
import CarouselComponent from "../../components/ui/CarouselComponent";
import { MediaList } from "../../types/Movietype/MediaList";
import fetchDataFromApi from "../../api";

const MEDIA_TYPES = { TV: "tv", MOVIE: "movie" } as const;

const Popular = () => {
  const [mediaType, setMediaType] = useState<"tv" | "movie">(MEDIA_TYPES.TV);
  const { classes } = useSegements();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");

  // Fetch function that accepts media type as an argument
  const fetchPopularMedia = async (type: "tv" | "movie"): Promise<MediaList> =>
    fetchDataFromApi(`/${type}/popular`);

  // Query for fetching popular movies or TV shows
  const { data, isLoading, isFetching } = useQuery<MediaList, Error>({
    queryKey: ["popular", mediaType],
    queryFn: () => fetchPopularMedia(mediaType),
    refetchOnWindowFocus: false,
  });

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
