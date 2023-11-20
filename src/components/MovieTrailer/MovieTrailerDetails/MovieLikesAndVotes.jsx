import React from "react";
import { HiThumbUp } from "react-icons/hi";

export default function MovieLikesAndVotes({ movieDetails }) {
  return (
    <div className="movieTrailerDetails__info__likeAndVotes__Container">
      <HiThumbUp color="#49ba8e" fontSize="1.5rem" />
      <div>
        <p className="movieTrailerDetails__info__likeAndVotes__likes">
          {movieDetails?.wtsPerc} %
        </p>
        <p className="movieTrailerDetails__info__likeAndVotes__votes">
          {movieDetails?.wtsCount} votes
        </p>
      </div>
    </div>
  );
}
