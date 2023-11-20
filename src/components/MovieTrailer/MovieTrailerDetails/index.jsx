import React from "react";
import MovieGenre from "./MovieGenre";
import MovieReleaseAndVotes from "./MovieReleaseAndVotes";
import MovieTrailerButtons from "./MovieTrailerButtons";
import "./movieTrailerDetails.css";

export default function MovieTrailerDetails({ movieDetails }) {
  return (
    <div className="movieTrailerDetails__container">
      <div className="movieTrailerDetails__info">
        <h2 className="movieTrailerDetails__info__title">
          {movieDetails?.EventTitle}
        </h2>
        <p className="movieTrailerDetails__info__language">
          {movieDetails?.EventLanguage.toUpperCase()}{" "}
        </p>

        <MovieGenre movieDetails={movieDetails} />
        <MovieReleaseAndVotes movieDetails={movieDetails} />
      </div>
      <MovieTrailerButtons movieDetails={movieDetails} />
    </div>
  );
}
