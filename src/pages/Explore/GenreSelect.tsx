import { MultiSelect } from "@mantine/core";
import { Genre } from "../../types/MovieDetail/MediaDetail";

interface GenreSelectProps {
  genres: Genre[];
  onChange: (selectedGenreIds: number[]) => void;
}

export default function GenreSelect({ genres, onChange }: GenreSelectProps) {
  const handleChange = (selectedValues: string[]) => {
    const selectedIds = selectedValues.map((id) => Number(id));
    onChange(selectedIds);
  };

  return (
    <MultiSelect
      data={genres.map((genre) => ({
        value: genre.id.toString(),
        label: genre.name,
      }))}
      placeholder="Select genres"
      clearable
      searchable
      nothingFound="No genres available"
      onChange={handleChange}
    />
  );
}
