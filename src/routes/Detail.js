import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

function Detail() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [similar, setsimilar] = useState([]);
  const [media, setMedia] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=ko`
    );
    const credits = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-ko`
    );
    const similars = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${KEY}&language=en-ko`
    );
    const media = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-ko`
    );

    setMovie(response.data);
    setCredit(credits.data);
    setsimilar(similars.data.results);
    setMedia(media.data.results);
    setLoading(false);
    console.log(similars.data);
    console.log(media.data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="detail">
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
          similar={similar}
          media={media}
        />
      )}
    </div>
  );
}

export default Detail;
