import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const KEY = "903a8c8b994d1d2a652c3b000db52e4d";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getMovies = async () => {
    const response = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${id}`
    );
    setMovie(response);
    setLoading(false);
    console.log(response);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div className="container"></div>}
    </div>
  );
}

export default Detail;
