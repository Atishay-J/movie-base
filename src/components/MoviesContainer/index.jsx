import React from "react";
import { useMovieContext } from "../../contexts/movieContext";
import MovieThumbnail from "../MovieThumbnail";
import "./movieContainer.css";

export default function MoviesContainer() {
  const { movieData } = useMovieContext();
  const movieEntries = Object.values(movieData);
  console.log(movieEntries);
  return (
    <section className="moviesContainer">
      {movieEntries.map((movie) => (
        <MovieThumbnail
          key={movie.EventCode}
          movieReleaseDate={movie.DispReleaseDate}
          movieName={movie.EventTitle}
          moviePosterImage={movie.EventImageUrl}
          movieTrailerUrl={movie.TrailerURL}
          movieUpVotePercentage={movie.wtsPerc}
          movieVotes={movie.wtsCount}
        />
      ))}
    </section>
  );
}
