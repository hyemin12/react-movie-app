import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import MovieList from "../components/MovieList";

function Upcoming() {
  const KEY = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState();
  const getcomingMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=ko&page=1®ion=KR`
    );
    setMovies(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getcomingMovies();
  }, []);
  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-wrapper">
          <h2 className="routes-title">개봉 예정작</h2>
          <div className="movie-item-wrapper">
            {movies &&
              movies.map((upMovie) => (
                <MovieList
                  key={upMovie.id}
                  id={upMovie.id}
                  posterImg={upMovie.poster_path}
                  title={upMovie.title}
                  originalTitle={upMovie.original_title}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Upcoming;
