import React from "react";
import DropdownCheckbox from "../DropDownCheckbox";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";
import { genreList } from "./genreList";

export default function GenreFilter() {
  const { dispatch, selectedGenre } = useFilteredMovies();

  const handleDropdownChange = (selectedOptions) => {
    dispatch({ type: "SET_SELECTED_GENRE", payload: selectedOptions });
  };

  return (
    <DropdownCheckbox
      label="Genres"
      options={genreList}
      selectedValues={selectedGenre}
      onChange={handleDropdownChange}
    />
  );
}
