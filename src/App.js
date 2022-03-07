import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import TopRated from "./routes/TopRated.js";
import UpComing from "./routes/UpComing.js";
import NowPlaying from "./routes/NowPlaying.js";
import Search from "./routes/Search.js";
import Header from "./components/Header";
import { SearchContextProvider } from "./search_context.js";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchContextProvider>
          <Header />
          <Switch>
            <Route path="/search/:query">
              <Search />
            </Route>
            <Route path="/movie/:id">
              <Detail />
            </Route>
            <Route path="/now-playing">
              <NowPlaying />
            </Route>
            <Route path="/top-ranked">
              <TopRated />
            </Route>
            <Route path="/upcoming">
              <UpComing />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </SearchContextProvider>
      </div>
    </div>
  );
}

export default App;
