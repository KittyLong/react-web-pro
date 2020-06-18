import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import request from '../server/Request.js'

let root = document.getElementById("root");
let height = document.body.offsetHeight;
let width = document.body.offsetWidth;

root.style.height = height;
root.style.width = width;
// axios挂载到React原型上
React.Component.prototype.httpRequest = request

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
