import MovieList from "../components/MovieList.js";
import { useSearchContext } from "../search_context.js";

function Search() {
  const { inputQuery } = useSearchContext();
  console.log(inputQuery);

  const searchMovies = inputQuery.results;
  return (
    <>
      <div className="movie-wrapper">
        <h2 className="routes-title">검색 결과 {searchMovies.length} 개</h2>
        <div className="movie-item-wrapper">
          {searchMovies.map((movie) => (
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
    </>
  );
}

export default Search;
