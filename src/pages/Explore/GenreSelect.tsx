import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Genre } from "../../types/MovieDetail/MediaDetail";
import { colourStyles } from "../../styles/SelectOptionStyle";

const animatedComponents = makeAnimated();

interface GenreSelectProps {
  genres: Genre[];
  onChange: (selectedGenreIds: number[]) => void;
}

export default function GenreSelect({ genres, onChange }: GenreSelectProps) {
  const handleChange = (
    selectedItems: MultiValue<Genre> | SingleValue<Genre>,
    action: ActionMeta<Genre>
  ) => {
    if (!selectedItems || action.action === "clear") {
      onChange([]);
      return;
    }

    // Ensure `selectedItems` is treated as an array before mapping
    const selectedArray = Array.isArray(selectedItems)
      ? selectedItems
      : [selectedItems];

    onChange(selectedArray.map((genre) => genre.id));
  };

  return (
    <Select
      isMulti
      name="genres"
      closeMenuOnSelect={false}
      options={genres}
      getOptionValue={(option) => option.id.toString()}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      components={animatedComponents}
      isClearable
      styles={colourStyles}
      placeholder="Select genres"
    />
  );
}
