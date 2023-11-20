import React from "react";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { RiQuestionMark } from "react-icons/ri";

export default function MovieTrailerButtons({ movieDetails }) {
  const trailerButtons = [
    {
      Icon: HiThumbUp,
      title: "Will Watch",
      subTitle: movieDetails?.wtsCount,
      color: "#3fa458",
    },
    {
      Icon: RiQuestionMark,
      title: "Maybe",
      subTitle: movieDetails?.ratings.maybe,
      color: "#ffa602",
    },
    {
      Icon: HiThumbDown,
      title: "WON'T WATCH",
      subTitle: movieDetails?.ratings?.dwtsCount,
      color: "#b24142",
    },
  ];

  return (
    <div className="movieTrailerDetails__trailerBtns__container">
      {trailerButtons.map(({ Icon, title, subTitle, color }) => {
        return (
          <div
            key={title}
            className="movieTrailerDetails__trailerBtns__wrapper"
            color={color}
          >
            <div
              className="movieTrailerDetails__trailerBtns__iconWrapper"
              style={{
                borderColor: color,
              }}
            >
              <Icon fontSize="1.1rem" color={color} />
            </div>
            <p
              className="movieTrailerDetails__trailerBtns__title"
              style={{
                color: color,
              }}
            >
              {title}
            </p>
            <p
              className="movieTrailerDetails__trailerBtns__subTitle"
              style={{
                color: color,
              }}
            >
              ({subTitle})
            </p>
          </div>
        );
      })}
    </div>
  );
}
