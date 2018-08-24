import React, { Component } from "react";
import Octicon, { Pencil, Trashcan } from "@githubprimer/octicons-react";
import { Switch, Route, Link } from "react-router-dom";

import { Log } from "../src/Log";
import { Reports } from "../src/Reports";
import { Categories } from "../src/Categories";

const Header = () => (
  <header className="col-12 mb-5 bg-main text-center p-3">
    <div className="text-main display-4 mt-4">
      <Link to={{ pathname: "/reports" }} className="mr-3">
        See
      </Link>
      <Link to="/" className="mr-3">
        how much
      </Link>

      <span className="mr-3">and</span>
      <Link to={{ pathname: "/categories" }} className="mr-3">
        what you've
      </Link>
      <br />
      <Link to="/" className="display-0 font-weight-bold text-white m-0">
        SPENT
      </Link>
    </div>
  </header>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Log} />
    <Route path="/reports" component={Reports} />
    <Route path="/categories" component={Categories} />
  </Switch>
);

class Buttons extends Component {
  render() {
    return (
      <span>
        <button className="btn rounded-10 mr-2 bg-main text-white">
          <Octicon icon={Pencil} />
        </button>
        <button className="btn rounded-10 bg-main text-white">
          <Octicon icon={Trashcan} />
        </button>
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
