import { Select } from "@mantine/core";
import { SortOption } from "../../types/MovieDetail/MediaDetail";

const sortOptions: SortOption[] = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "primary_release_date.desc", label: "Release Date Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

interface SortSelectProps {
  value: SortOption | null;
  onChange: (value: SortOption | null) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select
      data={sortOptions}
      placeholder="Sort By"
      clearable
      searchable
      value={value?.value || null}
      onChange={(selectedValue) => {
        const selectedOption =
          sortOptions.find((option) => option.value === selectedValue) || null;
        onChange(selectedOption);
      }}
    />
  );
}
