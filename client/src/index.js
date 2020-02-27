import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "index.scss";
let Helloworld = () => {
  return <App></App>;
};
ReactDOM.render(<Helloworld />, document.getElementById("root"));
