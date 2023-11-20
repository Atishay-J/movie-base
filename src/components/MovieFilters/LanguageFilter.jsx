import React from "react";
import { useMovieContext } from "../../contexts/movieContext";
import DropdownCheckbox from "../DropDownCheckbox";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";

export default function LanguageFilter() {
  const { languageList } = useMovieContext();
  const { dispatch, selectedLanguages } = useFilteredMovies();

  const handleDropdownChange = (selectedOptions) => {
    dispatch({ type: "SET_SELECTED_LANGUAGES", payload: selectedOptions });
  };

  return (
    <DropdownCheckbox
      label="Languages"
      options={languageList}
      selectedValues={selectedLanguages}
      onChange={handleDropdownChange}
    />
  );
}
