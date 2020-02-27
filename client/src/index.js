import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "index.scss";
let Helloworld = () => {
  return (
    <button className="btn-primary w-25 m-3 p-2 rounded text-center">
      sign in
    </button>
  );
};
ReactDOM.render(<Helloworld />, document.getElementById("root"));
