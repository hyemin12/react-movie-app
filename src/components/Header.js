import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="header container">
      <Link to="/" className="logo">
        <h1>Box Office : Movie</h1>
      </Link>
      <nav className="nav">
        <Link to="/" activeStyle={{ color: "#fdc000" }}>
          인기 영화
        </Link>

        <Link to="/now-playing" activeStyle={{ color: "#fdc000" }}>
          현재 상영중
        </Link>

        <Link to="/upcoming" activeStyle={{ color: "#fdc000" }}>
          개봉 예정
        </Link>

        <Link to="/top-ranked" activeStyle={{ color: "#fdc000" }}>
          높은 평점
        </Link>
      </nav>
      <div className="search">
        <input
          type="text"
          className="title"
          placeholder="검색어를 입력하세요."
        />
      </div>
    </div>
  );
}

export default SideBar;
