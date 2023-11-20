import React from "react";

export default function MovieGenre({ movieDetails }) {
  const genres = movieDetails?.EventGenre.split("|");

  return (
    <div className="movieTrailerDetails__info__genre__container">
      {genres?.map((genre, index) => (
        <span key={movieDetails?.name + genre + index}>{genre}</span>
      ))}
    </div>
  );
}
