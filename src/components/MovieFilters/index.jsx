import React from "react";
import LanguageFilter from "./LanguageFilter";
import "./movieFilters.css";
import GenreFilter from "./GenreFilter";

export default function MovieFilters() {
  return (
    <div className="movieFilter__container">
      <LanguageFilter />
      <GenreFilter />
    </div>
  );
}
