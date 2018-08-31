import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Modal } from "../Components/Modal";
import { ListView } from "../Categories/ListView";

const Categories = () => (
  <Switch>
    <Route exact path="/categories" component={CategoryList} />
  </Switch>
);

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
          <span
            className="btn bg-main text-white mt-3"
            onClick={this.showModal}
          >
            Add New
          </span>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div className="modal-header">
              <p className="modal-title">Add Category</p>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Title"
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
          <ListView />
        </div>
      </div>
    );
  }
}

export { Categories };
