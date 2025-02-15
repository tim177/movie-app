import { Container } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import fetchDataFromApi from "../../api";
import Trending from "./Trending";
import Popular from "./Popular";
import Toprated from "./TopRated";
import HeroMovie from "../../components/HeroMovie";
import { MediaDetail } from "../../types/MovieDetail/MediaDetail";

export default function Dashboard() {
  const { data, isLoading } = useQuery<MediaDetail>({
    queryKey: ["movie"],
    queryFn: async () => {
      return fetchDataFromApi<MediaDetail>(`movie/1241982`);
    },
  });

  if (isLoading || !data) return <>Loading...</>;

  return (
    <Container size="lg" py="xl">
      <HeroMovie data={data} />
      <Trending />
      <Popular />
      <Toprated />
    </Container>
  );
}
