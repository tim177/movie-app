import { Flex, Group, Loader, SimpleGrid, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Genre,
  MediaDetail,
  SortOption,
} from "../../types/MovieDetail/MediaDetail";
import fetchDataFromApi from "../../api";
import GenreSelect from "./GenreSelect";
import SortSelect from "./SortSelect";
import MovieCard from "./MovieCard";
import PaginationControls from "./PaginationControls";

interface ExploreResponse {
  results: MediaDetail[];
  total_pages: number;
}

export default function Explore() {
  const [genre, setGenre] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const { name } = useParams();

  // Fetch genres
  const { data: genreData } = useQuery<{ genres: Genre[] }>({
    queryKey: ["genre-data", name],
    queryFn: () => fetchDataFromApi(`/genre/${name}/list`),
  });

  // Fetch movies based on filters
  const { data: exploreData, isLoading: isExploreLoading } =
    useQuery<ExploreResponse>({
      queryKey: ["explore-data", name, page, genre, sortBy?.value],
      queryFn: () =>
        fetchDataFromApi(
          `/discover/${name}?page=${page}&with_genres=${genre.join(",")}${
            sortBy ? `&sort_by=${sortBy.value}` : ""
          }`
        ),
    });

  console.log("Explore.tsx🤷🏻🤷🏻", exploreData);
  return (
    <>
      <Flex justify={"space-between"} style={{ flexFlow: "row wrap" }} my={20}>
        <Title size={20} my={20} align="center">
          {name === "tv" ? "Explore TV Shows" : "Explore Movies"}
        </Title>
        <Group>
          <GenreSelect genres={genreData?.genres || []} onChange={setGenre} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </Group>
      </Flex>

      {isExploreLoading ? (
        <Loader />
      ) : (
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: "lg", cols: 4 },
            { maxWidth: "md", cols: 3 },
            { maxWidth: "sm", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
          verticalSpacing={30}
          spacing={30}
        >
          {exploreData?.results?.map((explore: MediaDetail) => (
            <MovieCard
              key={explore.id}
              data={explore}
              mediaType={name || "movie"}
            />
          ))}
        </SimpleGrid>
      )}

      <PaginationControls
        total={exploreData?.total_pages || 0}
        page={page}
        onChange={setPage}
      />
    </>
  );
}
