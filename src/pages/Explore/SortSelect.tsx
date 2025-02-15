import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import { SortOption } from "../../types/MovieDetail/MediaDetail";
import { colourStyles2 } from "../../styles/SelectOptionStyle";

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
  const handleChange = (
    newValue: SingleValue<SortOption> | MultiValue<SortOption>,
    action: ActionMeta<SortOption>
  ) => {
    if (!newValue || action.action === "clear") {
      onChange(null);
      return;
    }

    // ✅ Type assertion to tell TypeScript that newValue is not an array
    onChange(newValue as SortOption);
  };

  return (
    <Select
      name="sort-by-data"
      options={sortOptions}
      onChange={handleChange}
      isClearable
      isMulti={false} // ✅ Important fix
      styles={colourStyles2}
      placeholder="Sort By"
      value={value}
    />
  );
}
