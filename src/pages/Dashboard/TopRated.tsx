import { Box, Container, Flex, SegmentedControl, Title } from "@mantine/core";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useSegements } from "../../styles/SegmentStyle";
import CarouselComponent from "../../components/ui/CarouselComponent";
import { fetchTopRatedMedia } from "../../api/media";
import { MediaList } from "../../types/Movietype/MediaList";

// Media types constant (kept outside to avoid re-creation)
const MEDIA_TYPES = { TV: "tv", MOVIE: "movie" } as const;

const TopRated = () => {
  const [endpoint, setEndpoint] = useState<"tv" | "movie">(MEDIA_TYPES.TV);
  const { classes } = useSegements();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");

  const { data, isLoading, isFetching } = useQuery<MediaList, Error>({
    queryKey: ["top-rated", endpoint],
    queryFn: async () => {
      const response = await fetchTopRatedMedia(endpoint);
      return response as MediaList;
    },
    refetchOnWindowFocus: false,
  });

  const handleTabChange = (value: keyof typeof MEDIA_TYPES) => {
    setEndpoint(MEDIA_TYPES[value]);
  };

  return (
    <Box h="100%" style={{ position: "relative" }}>
      <Container mt={50} size="lg">
        <Flex justify="space-between" align="center">
          <Title fw={500} size={isSmallerThanTable ? 18 : 20}>
            Top-Rated
          </Title>
          <SegmentedControl
            radius="xl"
            size="sm"
            data={Object.keys(MEDIA_TYPES)}
            classNames={classes}
            onChange={(value) =>
              handleTabChange(value as keyof typeof MEDIA_TYPES)
            }
          />
        </Flex>
        <CarouselComponent
          data={data?.results ?? []}
          loading={isFetching || isLoading}
          endpoint={endpoint}
        />
      </Container>
    </Box>
  );
};

export default TopRated;
