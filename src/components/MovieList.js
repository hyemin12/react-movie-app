import { Link } from "react-router-dom";

function MovieList({ id, title, posterImg, originalTitle }) {
  return (
    <div className="movie-list container">
      <img src={`https://image.tmdb.org/t/p/w500/${posterImg}`} alt={title} />
      <Link to={`/movie/${id}`}>
        <h4>{title}</h4>
        <p>{originalTitle}</p>
      </Link>
    </div>
  );
}

export default MovieList;
