import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/custom.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
