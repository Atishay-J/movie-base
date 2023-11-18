import React from "react";
import { useMovieContext } from "../../contexts/movieContext";
import DropdownCheckbox from "../DropDownCheckbox";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";

export default function LanguageFilter() {
  const { languageList } = useMovieContext();
  const { dispatch } = useFilteredMovies();

  const handleDropdownChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
    dispatch({ type: "SET_SELECTED_LANGUAGES", payload: selectedOptions });
  };
  return (
    <DropdownCheckbox options={languageList} onChange={handleDropdownChange} />
  );
}
