import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

const Categories = () => (
  <Switch>
    <Route exact path="/categories" component={CategoryList} />
    <Route path="/categories/:category" component={SpecificCategory} />
  </Switch>
);

/*
          <span
            className="btn font-weight-bold text-main"
            onClick={this.showModal}
          >
            Add New
          </span>
          */

let Modal = ({ handleClose, show, children }) => {
  let modalstyle = show ? "modal-black display-block" : "display-none";
  return (
    <div className={modalstyle}>
      <section
        className="w-25 modal-dialog modal-dialog-center"
        role="document"
      >
        <div className="modal-content">
          {children}
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={handleClose}>
              Cancel
            </button>
            <button className="btn bg-primary text-white">Add</button>
          </div>
        </div>
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
          <h1 className="display-2"> Categories</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div className="modal-header">
              <p className="modal-title">Add Category</p>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Category Name"
              />
              <textarea
                className="form-control"
                rows="5"
                placeholder="Description"
              />
            </div>
          </Modal>
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
      <p>{categories.description}</p>
    </div>
  </li>
));

const SpecificCategory = () => (
  <div className="text-center">
    <h1 className="display-1">Categories</h1>
  </div>
);

export { Categories };
