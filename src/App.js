import React, { Component } from "react";
import Octicon, { Pencil, Trashcan } from "@githubprimer/octicons-react";
import { Switch, Route, Link } from "react-router-dom";

//Date function
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let mm = month[new Date().getMonth()];
let dd = new Date().getDate();
let yyyy = new Date().getFullYear();
let date = mm + " " + dd + ", " + yyyy;

const Header = () => (
  <header className="col-12 bg-main text-center p-3">
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
    </div>
    <Link to="/" className="display-0 font-weight-bold text-white m-0">
      SPENT
    </Link>
  </header>
);

let expenses = [
  { name: "Netflix", category: "Entertainment", price: "520.46" },
  { name: "KFC", category: "Food", price: "129.00" }
];

let total = "12";

let ExpensesListViewItem = expenses.map(expenses => (
  <li class="list-group-item">
    <div className="float-left">
      <span>
        <h4>{expenses.name}</h4>
      </span>
      <h6>
        <button className="btn mr-2 bg-main text-white">
          {expenses.category}
        </button>
        <small>{date}</small>
      </h6>
    </div>
    <div className="float-right text-right">
      <h4>₱{expenses.price}</h4>
    </div>
  </li>
));

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

const Main = () => (
  <Switch>
    <Route exact path="/" component={Log} />
    <Route path="/reports" component={Reports} />
    <Route path="/categories" component={Categories} />
  </Switch>
);

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

const Log = () => (
  <div>
    <div className="col-12">
      <div className="text-center">
        <h1 className="display-2">₱{total}</h1>
        <h6>
          Spent for the month of <b>{mm}</b>
        </h6>
      </div>
    </div>
    <div className="col-10 offset-1 p-5">
      <ul className="list-group">{ExpensesListViewItem}</ul>
    </div>
  </div>
);
const Reports = () => (
  <div className="text-center">
    <h1 className="display-1">Reports</h1>
    <hr />
    <h1 className="display-4">Pending Stage 2</h1>
  </div>
);

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

export default App;
