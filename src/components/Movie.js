import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, posterImg, originalTitle }) {
  return (
    <div className="popular container">
      <img src={`https://image.tmdb.org/t/p/w500/${posterImg}`} alt={title} />
      <Link to={`/movie/${id}`}>
        <h4>{title}</h4>
        <p>{originalTitle}</p>
      </Link>
    </div>
  );
}
Movie.propTypes = {
  title: propTypes.string.isRequired,
};

export default Movie;
