import React from "react";
import "./movieTrailer.css";
import MovieTrailerVideo from "./MovieTrailerVideo";
import MovieTrailerDetails from "./MovieTrailerDetails";

export default function MovieTrailer({ trailerRow, movieDetails }) {
  return (
    <div
      className="movieTrailer__container"
      style={{
        gridRowStart: trailerRow + 1,
      }}
    >
      <MovieTrailerVideo
        trailerUrl={movieDetails?.TrailerURL}
        trailerName={movieDetails.EventName}
      />
      <MovieTrailerDetails movieDetails={movieDetails} />
    </div>
  );
}
