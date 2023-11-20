import React from "react";
import { GoCalendar } from "react-icons/go";

export default function MovieReleaseDate({ movieDetails }) {
  const date = movieDetails?.ShowDate.split(",")[0];
  const year = movieDetails?.ShowDate.split(",")[1];
  return (
    <div className="movieTrailerDetails__info__likeAndVotes__Container">
      <GoCalendar color="#7d807d" fontSize="1.5rem" />
      <div>
        <p className="movieTrailerDetails__info__likeAndVotes__likes">{date}</p>
        <p className="movieTrailerDetails__info__likeAndVotes__votes">
          {year}{" "}
        </p>
      </div>
    </div>
  );
}
