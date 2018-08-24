import React from "react";

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

let expenses = [
  { name: "Netflix", category: "Entertainment", price: 520.46 },
  { name: "KFC", category: "Food", price: 129.0 },
  { name: "Grocery", category: "Food", price: 2500.25 }
];

let total = expenses.reduce((a, expenses) => a + expenses.price, 0);

let ExpensesListViewItem = expenses.map((expenses, index) => (
  <li className="list-group-item highlight" key={index}>
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
    <div className="col-8 offset-2 p-5">
      <ul className="list-group">{ExpensesListViewItem}</ul>
    </div>
  </div>
);

export { Log };
