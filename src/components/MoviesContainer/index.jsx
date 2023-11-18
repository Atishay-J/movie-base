import React from "react";
import MovieThumbnail from "../MovieThumbnail";
import "./movieContainer.css";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";

export default function MoviesContainer() {
  const { filteredMovies } = useFilteredMovies();
  const areMovieAvailable = filteredMovies.length > 0;

  return (
    <section className="moviesContainer">
      {areMovieAvailable ? (
        filteredMovies.map((movie) => (
          <MovieThumbnail
            key={movie.EventCode}
            movieReleaseDate={movie.DispReleaseDate}
            movieName={movie.EventTitle}
            moviePosterImage={movie.EventImageUrl}
            movieTrailerUrl={movie.TrailerURL}
            movieUpVotePercentage={movie.wtsPerc}
            movieVotes={movie.wtsCount}
          />
        ))
      ) : (
        <h3 className="moviesContainer__noResults"> No Movies available</h3>
      )}
    </section>
  );
}
