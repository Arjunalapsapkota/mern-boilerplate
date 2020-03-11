import React, { Component } from "react";
import "./index.scss";
import logo from "./logo.png";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <div className="account">
          {/* <div className="profile"></div> */}
          <div className="manage">
            Account
            <div className="icon">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
        </div>
        <img className="logo" src={logo} />
      </div>
    );
  }
}

export default Navbar;
