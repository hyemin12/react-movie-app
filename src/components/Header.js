import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="header container">
      <Link to="/" className="logo">
        <h1>Box Office : Movie</h1>
      </Link>
      <ul className="nav">
        <li>
          <Link to="/" className="link-active">
            인기 영화
          </Link>
        </li>
        <li>
          <Link to="/">현재 상영중</Link>
        </li>
        <li>
          <Link to="/">개봉 예정</Link>
        </li>
        <li>
          <Link to="/">높은 평점</Link>
        </li>
      </ul>
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
