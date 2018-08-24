import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

const Categories = () => (
  <Switch>
    <Route exact path="/categories" component={CategoryList} />
    <Route path="/categories/:category" component={SpecificCategory} />
  </Switch>
);

/*
const CategoryList = () => (
  <div>
    <div className="col-12 text-center">
      <h1> Categories</h1>
      <button className="btn">Add Category</button>
    </div>
    <div className="col-8 offset-2 p-5">
      <ul className="list-group">{CategoryListViewItem}</ul>
    </div>
  </div>
);
*/

let Modal = ({ handleClose, show, children }) => {
  let henlo = show ? "modal display-block" : "modal display-none";
  return (
    <div className={henlo}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

class CategoryList extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <div className="col-12 text-center">
          <h1> Categories</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button className="btn" onClick={this.showModal}>
            Add Category
          </button>
        </div>
        <div className="col-8 offset-2 p-5">
          <ul className="list-group">{CategoryListViewItem}</ul>
        </div>
      </div>
    );
  }
}

let categories = [
  { name: "Food", description: "Om nom nom nom" },
  { name: "Entertainment", description: "Wow oh wow" }
];

let CategoryListViewItem = categories.map((categories, index) => (
  <li className="list-group-item highlight" key={index}>
    <div className="float-left">
      <span>
        <h4>{categories.name}</h4>
      </span>
      <h6>{categories.description}</h6>
    </div>
  </li>
));

const SpecificCategory = () => (
  <div className="text-center">
    <h1 className="display-1">Categories</h1>
  </div>
);

export { Categories };
