import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loader from "../components/Loader.js";
const KEY = "903a8c8b994d1d2a652c3b000db52e4d";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const current = new Date();
  const today =
    current.getFullYear() +
    String(current.getMonth()).padStart(2, "0") +
    String(current.getDate()).padStart(2, "0");
  console.log(today);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=ko&page=1®ion=KR`
    );
    setMovies(response.data.results);
    console.log(response);
    console.log(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home">
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-wrapper">
          <h2 className="routes-title">가장 인기있는 영화</h2>
          <div className="movie-item-wrapper">
            {movies.map((movie) => (
              <Movie
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
