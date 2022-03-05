function MoveItem({
  title,
  posterImg,
  bgImg,
  releaseDate,
  runtime,
  originalTitle,
  overview,
  genres,
  productionCompany,
  productionCountry,
  cast,
  crew,
  ranking,
}) {
  console.log(typeof crew[0].popularity);
  const actors = cast.slice(0, 4).filter(function (actor) {
    if (actor.popularity > 9) {
      return actor;
    }
  });
  console.log(actors);
  const directors = crew.filter(function (director) {
    return director.department === "Directing";
  });
  const backImg = `https://image.tmdb.org/t/p/original/${bgImg}`;
  return (
    <div>
      <div
        className="movie-item"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="overlay-bg">
          <div className="movie-item-wrapper">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${posterImg}`}
                alt={title}
              />
            </div>
            <div className="movie-detail">
              <h4>{originalTitle}</h4>
              <h1>{title}</h1>
              <ul className="labels">
                <li>{releaseDate}</li>
                <li>{runtime} min</li>
                <li>{productionCountry}</li>
              </ul>
              <div>
                <h4>배우</h4>
                <ul className="actors">
                  {actors.map((actor) => {
                    return <li key={actor.id}>{actor.name}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h4>감독</h4>
                <ul className="directors">
                  {directors.map((director) => {
                    return <li key={director.id}>{director.name}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h4>제작사</h4>
                <span>{productionCompany}</span>
              </div>
              <div>
                <h4>장르</h4>
                <ul className="genres">
                  {genres.map((genre) => {
                    return <li key={genre.name}>{genre.name}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h4>Ranking</h4>
                <span>{ranking} / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="aside">
          <div className="sns-wrapper">
            <h4>OFFICIAL</h4>
            <ul className="sns">
              <li>facebook</li>
              <li>twitter</li>
              <li>site</li>
            </ul>
          </div>
          <div className="actor-wrapper">
            <h4>주요 출연진</h4>
            <ul className="actors">
              {actors.map((actor) => {
                return (
                  <li key={actor.id}>
                    <div className="actor-img">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt={actor.name}
                      />
                    </div>
                    <div className="actor-name">
                      <span>{actor.name}</span>
                      <span className="actor-chracter">{actor.character}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="overview">
          <h4>줄거리</h4>
          <span>{overview}</span>
        </div>
      </div>
    </div>
  );
}

export default MoveItem;

// https://www.themoviedb.org/search?query={text}
// https://www.themoviedb.org/movie/{movie id}}

// url('/t/p/w1920_and_h800_multi_faces/AoSZyb37ljMAxw0RdeQEBHKtgcc.jpg')
