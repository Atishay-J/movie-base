import "./movieTrailer.css";

export default function MovieTrailerVideo({ trailerUrl, trailerName }) {
  const source = trailerUrl.split("watch?v=").join("embed/") + "?autoplay=1";
  return (
    <div className="movieTrailerVideo__container">
      <iframe
        src={source}
        className="video"
        title={trailerName ? trailerName : "video trailer"}
      ></iframe>
    </div>
  );
}
