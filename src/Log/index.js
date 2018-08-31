import React from "react";
import { ListView } from "../Log/ListView";

//const total = expenses.reduce((a, expenses) => a + expenses.price, 0);

const total = Math.floor(Math.random() * 1000);

const Log = () => (
  <div>
    <div className="col-12">
      <div className="text-center">
        <h1 className="display-2">₱{total}</h1>
        <h6>
          Spent for the month of <b>{new Date().getMonth()}</b>
        </h6>
      </div>
    </div>
    <div className="col-8 offset-2 p-5">
      <ListView />
    </div>
  </div>
);

export { Log };
