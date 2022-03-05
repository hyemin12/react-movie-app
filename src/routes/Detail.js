import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/Header";
import MovieItem from "../components/MovieItem";

const KEY = "903a8c8b994d1d2a652c3b000db52e4d";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=ko`
    );
    const credits = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-ko`
    );
    setMovie(response.data);
    setCredit(credits.data);
    setLoading(false);
    console.log(credits.data);
    console.log(response.data.results);
    console.log(response);
  };
  for (let i = 0; i < 4; i++) {}
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="detail">
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <MovieItem
          id={movie.id}
          posterImg={movie.poster_path}
          title={movie.title}
          originalTitle={movie.original_title}
          bgImg={movie.backdrop_path}
          releaseDate={movie.release_date}
          runtime={movie.runtime}
          overview={movie.overview}
          genres={movie.genres}
          productionCountry={movie.production_countries[0].iso_3166_1}
          productionCompany={movie.production_companies[0].name}
          ranking={movie.vote_average}
          cast={credit.cast}
          crew={credit.crew}
        />
      )}
    </div>
  );
}

export default Detail;
