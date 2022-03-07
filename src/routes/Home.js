import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader.js";

function Home() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=ko&page=1®ion=KR`
    );
    setMovies(response.data.results);
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
          <h2 className="routes-title">가장 인기있는 영화</h2>
          <div className="movie-item-wrapper">
            {movies.map((movie) => (
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

export default Home;
