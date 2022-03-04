import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
