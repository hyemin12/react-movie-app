import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

const KEY = process.env.REACT_APP_API_KEY;

const url = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: KEY,
    language: "ko",
    include_image_language: "en",
  },
});

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [similar, setsimilar] = useState([]);
  const [keywords, setkeywords] = useState([]);
  const [socials, setSocials] = useState([]);
  const [posters, setPosters] = useState([]);

  const { id } = useParams();

  const getMovies = async () => {
    const response = await url.get(`${id}`);
    const resCredits = await url.get(`${id}/credits`);
    const resSimilars = await url.get(`${id}/similar`);
    const resKeywords = await url.get(`${id}/keywords`);
    const resSocial = await url.get(`${id}/external_ids`);
    const resPosters = await url.get(`${id}/images`);
    setMovie(response.data);
    setCredit(resCredits.data);
    setsimilar(resSimilars.data.results);
    setkeywords(resKeywords.data.keywords);
    setSocials(resSocial.data);
    setPosters(resPosters.data.posters);
    setLoading(false);
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
          keywords={keywords}
          socials={socials}
          posters={posters}
        />
      )}
    </div>
  );
}

export default Detail;
