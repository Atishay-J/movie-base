import React from "react";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";
import ActiveFilterPill from "./ActiveFilterPill";

export default function ActiveFiltersList() {
  const { state, dispatch } = useFilteredMovies();
  const appliedFilters = Object.entries(state);

  const removeSelectedFilter = (event) => {
    const filterName = event.target.getAttribute("data-filterName");
    const filterTitle = event.target.getAttribute("data-filterTitle");
    if (filterName && filterTitle) {
      dispatch({
        type: "REMOVE_SELECTED_FILTER",
        payload: {
          filterName,
          filterTitle,
        },
      });
    }
  };

  return (
    <div className="activeFilterList__container" onClick={removeSelectedFilter}>
      <div>Applied Filters:</div>
      {appliedFilters.map(([filterName, filterList]) =>
        filterList.map((filter) => (
          <ActiveFilterPill filterName={filterName} filterTitle={filter} />
        )),
      )}
    </div>
  );
}
