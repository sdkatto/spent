import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Categories = () => (
  <Switch>
    <Route exact path="/categories" component={CategoryList} />
    <Route path="/categories/:category" component={SpecificCategory} />
  </Switch>
);

const CategoryList = () => (
  <div className="text-center">
    <h1 className="display-1">Categories</h1>
  </div>
);

const SpecificCategory = () => (
  <div className="text-center">
    <h1 className="display-1">Categories</h1>
  </div>
);

export { Categories };
