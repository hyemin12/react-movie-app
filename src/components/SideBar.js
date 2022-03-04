function SideBar() {
  return (
    <div className="side-bar container">
      <div className="logo">
        <h1>Box Office : Movie</h1>
      </div>
      <div className="search">
        <input
          type="text"
          className="title"
          placeholder="검색하고싶은 영화 제목을 작성해주세요."
        />
        <div className="selects">
          <select></select>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
