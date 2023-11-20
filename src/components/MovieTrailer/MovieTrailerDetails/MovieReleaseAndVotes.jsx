import React from "react";
import MovieLikesAndVotes from "./MovieLikesAndVotes";
import MovieReleaseDate from "./MovieReleaseDate";

export default function MovieReleaseAndVotes({ movieDetails }) {
  return (
    <div className="movieTrailerDetails__info__relaseAndVotes">
      <MovieLikesAndVotes movieDetails={movieDetails} />
      <MovieReleaseDate movieDetails={movieDetails} />
    </div>
  );
}
