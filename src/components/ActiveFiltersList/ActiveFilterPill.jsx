import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "./activeFilterList.css";

export default function ActiveFilterPill({ filterName, filterTitle }) {
  return (
    <div
      className="activeFilterPill"
      data-filterName={filterName}
      data-filterTitle={filterTitle}
    >
      {filterTitle}
      <MdOutlineClose cursor="pointer" style={{ pointerEvents: "none" }} />
    </div>
  );
}
