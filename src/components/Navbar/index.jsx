import React from "react";
import MovieFilters from "../MovieFilters";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">Movie Trailers</h1>
      <MovieFilters />
    </div>
  );
}
