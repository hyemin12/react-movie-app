import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import MovieList from "../components/MovieList";

function TopRated() {
  const KEY = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=ko&page=1®ion=KR`
    );
    setMovies(response.data.results);
    console.log(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-wrapper">
          <h2 className="routes-title">현재 상영작</h2>
          <div className="movie-item-wrapper">
            {movies &&
              movies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  posterImg={movie.poster_path}
                  title={movie.title}
                  originalTitle={movie.original_title}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TopRated;
