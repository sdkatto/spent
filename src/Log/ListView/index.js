import React, { Component } from "react";
import Axios from "axios";
import moment from "moment";

const ListViewItem = ({ expenses }) => {
  const expensesItem = expenses.map(expenses => {
    return (
      <li className="list-group-item highlight" key={expenses.id}>
        <div className="float-left">
          <span>
            <h4>{expenses.title}</h4>
          </span>
          <h6>
            <button className="btn mr-2 bg-main text-white">
              {expenses.category_title}
            </button>
            <small>{moment(expenses.date).format("MMMM DD YYYY")}</small>
          </h6>
        </div>
        <div className="float-right text-right">
          <h4>₱{expenses.value}</h4>
        </div>
      </li>
    );
  });
  return <ul className="list-group">{expensesItem}</ul>;
};

class ListView extends Component {
  state = {
    expenses: []
  };

  componentDidMount() {
    Axios.get("https://expense-manager.thinkingpandas.com:443/api/expenses")
      .then(response => {
        const newExpenses = response.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            date: c.date,
            value: c.value,
            category_id: c.category_id,
            category_title: c.category.title
          };
        });
        const newState = Object.assign({}, this.state, {
          expenses: newExpenses
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return <ListViewItem expenses={this.state.expenses} />;
  }
}

export { ListView };
