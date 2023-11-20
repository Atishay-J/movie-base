import React from "react";
import { HiThumbUp } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import "./movieThumbnail.css";
import { getMovieDateToShow } from "./getMovieDateToShow";

export default function MovieThumbnail({
  movieName,
  movieReleaseDate,
  movieVotes,
  movieUpVotePercentage,
  moviePosterImage,
  movieTrailerUrl,
  playTrailer,
}) {
  const movieDateToShow = getMovieDateToShow(movieReleaseDate);

  const addImageFallback = (event) => {
    event.currentTarget.src =
      "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg";
  };

  return (
    <div className="movieThumbnail__container">
      <div className="movieThumbnail__image__wrapper">
        <img
          className="movieThumbnail__image"
          src={moviePosterImage}
          alt={movieName}
          onError={addImageFallback}
        />
        <div className="movieThumbnail__date">
          <span className="movieThumbnail__date__title">
            {movieDateToShow.title}
          </span>
          <span className="movieThumbnail__date__subTitle">
            {movieDateToShow.subTitle}
          </span>
        </div>
        <div className="movieThumbnail__playIcon" onClick={playTrailer}>
          <GoPlay />
        </div>
        <div className="movieThumbnail__details">
          <div className="movieThumbnail__details__percentage">
            <HiThumbUp color="#49ba8e" fontSize="1.5rem" />
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {movieUpVotePercentage} %
            </span>
          </div>
          <span style={{ fontSize: "0.75rem" }}>{movieVotes} votes</span>
        </div>
      </div>
      <span className="movieThumbnail__movieName">{movieName}</span>
    </div>
  );
}
