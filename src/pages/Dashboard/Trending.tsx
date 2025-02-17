import { Box, Container, Flex, SegmentedControl, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchDataFromApi from "../../api";
import { MediaList } from "../../types/MediaList";
import { useMediaQuery } from "@mantine/hooks";
import { useSegements } from "../../styles/SegmentStyle";
import CarouselComponent from "../../components/shared/CarouselComponent";

const TRENDING_TYPES = { DAY: "day", WEEK: "week" } as const;

const Trending = () => {
  const [timeframe, setTimeframe] = useState<"day" | "week">(
    TRENDING_TYPES.DAY
  );
  const { classes } = useSegements();
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");

  const fetchTrendingData = async (
    period: "day" | "week"
  ): Promise<MediaList> => fetchDataFromApi(`/trending/all/${period}`);

  const { data, isLoading, isFetching } = useQuery<MediaList, Error>({
    queryKey: ["trending", timeframe],
    queryFn: () => fetchTrendingData(timeframe),
    refetchOnWindowFocus: false,
  });

  const handleTabChange = (value: string) => {
    setTimeframe(
      TRENDING_TYPES[value.toUpperCase() as keyof typeof TRENDING_TYPES]
    );
  };

  return (
    <Box h="100%" style={{ position: "relative" }}>
      <Container mt={50} size="lg">
        <Flex justify="space-between" align="center">
          <Title fw={500} size={isSmallerThanTable ? 16 : 20} color="white">
            Trending
          </Title>
          <SegmentedControl
            radius="sm"
            size="sm"
            data={Object.keys(TRENDING_TYPES)}
            classNames={classes}
            onChange={handleTabChange}
          />
        </Flex>
        <CarouselComponent
          data={data?.results ?? []}
          loading={isFetching || isLoading}
        />
      </Container>
    </Box>
  );
};

export default Trending;
