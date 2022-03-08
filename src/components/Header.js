import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import { useSearchContext } from "../search_context.js";

const KEY = process.env.REACT_APP_API_KEY;

function Header() {
  const { setInputQuery } = useSearchContext();

  const history = useHistory();
  // const [searchMovies, setsearchMovies] = useState();
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          query: query,
          api_key: KEY,
          language: "ko",
        },
      }
    );
    setInputQuery(result.data);
    history.push(`/search/${query}`);
    setQuery("");
    console.log(result.data);
  };
  function handlePress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
  function handleQuery(event) {
    setQuery(event.target.value);
  }
  const navData = [
    { title: "인기영화", path: "/" },
    { title: "현재상영중", path: "/now-playing" },
    { title: "개봉 예정", path: "/upcoming" },
    { title: "높은 평점", path: "/top-ranked" },
  ];
  return (
    <div className="header container">
      <Link to="/" className="logo">
        <h1>Box Office : Movie</h1>
      </Link>
      <div className="nav">
        {navData.map((navLink, index) => (
          <NavLink
            exact
            key={navLink.path}
            to={navLink.path}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <li>{navLink.title}</li>
          </NavLink>
        ))}
      </div>
      <div className="search">
        <input
          type="text"
          className="title"
          placeholder="검색어를 입력하세요."
          value={query}
          onChange={handleQuery}
          onKeyPress={handlePress}
        />
        <FaSearch className="icon-search" onClick={handleSearch} />
      </div>
    </div>
  );
}

export default Header;
