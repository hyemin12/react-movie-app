import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
// import ReactPlayer from "react-player/lazy";

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
  similar,
  socials,
  keywords,
  videos,
}) {
  cast.splice(3, cast.length - 4).sort(function (a, b) {
    return a.popularity < b.popularity
      ? 1
      : a.popularity > b.popularity
      ? -1
      : 0;
  });
  console.log(overview);
  const directors = crew.splice(3, crew.length - 4).filter(function (director) {
    return director.department === "Directing";
  });

  similar.splice(3, similar.length - 4).sort(function (c, d) {
    return c.popularity < d.popularity
      ? 1
      : c.popularity > d.popularity
      ? -1
      : 0;
  });

  const backImg = `https://image.tmdb.org/t/p/original/${bgImg}`;

  return (
    <>
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
                  {cast.map((actor) => {
                    return <li key={actor.id}>{actor.name},</li>;
                  })}
                </ul>
              </div>
              <div>
                <h4>감독</h4>
                <ul className="directors">
                  {directors.map((director) => {
                    return <li key={director.id}>{director.name},</li>;
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
                <span>{ranking}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row-wrapper">
          <div className="aside">
            <div className="social-wrapper">
              <h4>OFFICIAL</h4>
              <ul className="social">
                {socials.facebook_id == null &&
                socials.instagram_id == null &&
                socials.twitter_id == null ? (
                  <h4>준비중</h4>
                ) : (
                  <>
                    {socials.facebook_id != null ? (
                      <li>
                        <a
                          href={`https://www.facebook.com/${socials.facebook_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookSquare />
                        </a>
                      </li>
                    ) : null}
                    {socials.twitter_id != null ? (
                      <li>
                        <a
                          href={`https://twitter.com/${socials.twitter_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                    ) : null}
                    {socials.instagram_id != null ? (
                      <li>
                        <a
                          href={`https://www.instagram.com/${socials.instagram_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                    ) : null}
                  </>
                )}
              </ul>
            </div>
            <div className="similar-wrapper">
              <h4>비슷한 영화</h4>
              <ul className="similar-list">
                {similar.map((similarItem) => {
                  return (
                    <li key={similarItem.id}>
                      <Link to={`/movie/${similarItem.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/original/${similarItem.backdrop_path}`}
                          alt={title}
                        />
                        <div className="content">
                          <span>{similarItem.title}</span>
                          <span>★ {similarItem.vote_average}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="contents-wrapper">
            <div className="overview">
              {overview !== "" ? (
                <>
                  <h4>줄거리</h4>
                  <span>{overview}</span>
                </>
              ) : null}
            </div>
            <div className="images-wrapper">
              <h4>스틸 이미지</h4>
              <ul className="still-images">
                <li>
                  {/* <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videos[0].key}`}
                  /> */}
                  <iframe
                    id="youtube-player"
                    title="스파이더맨"
                    type="text/html"
                    width="457"
                    height="257"
                    src={`https://www.youtube.com/embed/${videos[0].key}`}
                  />
                </li>
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${bgImg}`}
                    alt={title}
                  />
                </li>
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${posterImg}`}
                    alt={title}
                  />
                </li>
              </ul>
            </div>
            <div className="keyword-wrapper">
              {keywords.length !== 0 ? (
                <>
                  <h4>Keywords</h4>
                  <ul className="keyword">
                    {keywords.map((keword) => (
                      <li key={keword.name}>{keword.name}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoveItem;
