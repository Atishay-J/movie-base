import React, { useState } from "react";
import MovieThumbnail from "../MovieThumbnail";
import "./movieContainer.css";
import { useFilteredMovies } from "../../contexts/filteredMovieContext";
import { useMovieContext } from "../../contexts/movieContext";
import MovieTrailer from "../MovieTrailer";

export default function MoviesContainer() {
  const { filteredMovies } = useFilteredMovies();
  const { isLoading } = useMovieContext();
  const areMoviesAvailable = filteredMovies.length > 0;
  const [showTrailerForMovie, setShowTrailerForMovie] = useState(null);
  const [showTrailerAtRow, setShowTrailerAtRow] = useState(null);

  const getTrailerRow = (index) => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      return Math.floor(index / 5);
    } else if (screenWidth >= 600 && screenWidth < 900) {
      return Math.floor(index / 2);
    } else if (screenWidth >= 900 && screenWidth < 1200) {
      return Math.floor(index / 3);
    } else {
      // Small screens require additional information
      return index;
    }
  };

  const playTrailer = (movie, index) => {
    setShowTrailerForMovie(movie);
    const trailerRow = getTrailerRow(index);
    setShowTrailerAtRow(trailerRow);
  };

  return !isLoading ? (
    <section className="moviesContainer">
      {showTrailerForMovie?.EventCode && (
        <MovieTrailer
          trailerRow={showTrailerAtRow}
          movieDetails={showTrailerForMovie}
        />
      )}
      {areMoviesAvailable ? (
        filteredMovies.map((movie, index) => (
          <div key={movie.EventCode}>
            <MovieThumbnail
              movieReleaseDate={movie.DispReleaseDate}
              movieName={movie.EventTitle}
              moviePosterImage={movie.EventImageUrl}
              movieTrailerUrl={movie.TrailerURL}
              movieUpVotePercentage={movie.wtsPerc}
              movieVotes={movie.wtsCount}
              playTrailer={() => playTrailer(movie, index)}
            />
          </div>
        ))
      ) : (
        <h3 className="moviesContainer__noResults"> No Movies available</h3>
      )}
    </section>
  ) : (
    <section className="moviesContainer">
      <h3 className="moviesContainer__loading"> Loading...</h3>
    </section>
  );
}
