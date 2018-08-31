import React, { Component } from "react";
import Axios from "axios";

const ListViewItem = ({ categories }) => {
  const categoriesItem = categories.map(category => {
    return (
      <li className="list-group-item highlight" key={category.id}>
        <div className="float-left">
          <span>
            <h4>{category.title}</h4>
          </span>
          <p>{category.description}</p>
        </div>
      </li>
    );
  });

  return <ul className="list-group">{categoriesItem}</ul>;
};

class ListView extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    Axios.get("https://expense-manager.thinkingpandas.com:443/api/categories")
      .then(response => {
        const newCategories = response.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            description: c.description
          };
        });
        const newState = Object.assign({}, this.state, {
          categories: newCategories
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return <ListViewItem categories={this.state.categories} />;
  }
}

export { ListView };
