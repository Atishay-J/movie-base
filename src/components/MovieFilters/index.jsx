import React from "react";
import LanguageFilter from "./LanguageFilter";
import "./movieFilters.css";

export default function MovieFilters() {
  return (
    <div className="movieFilter__container">
      <LanguageFilter />
    </div>
  );
}
