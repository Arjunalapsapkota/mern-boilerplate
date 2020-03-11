import React, { Component } from "react";
import Listitem from "./Listitem.js";
import "./index.scss";

class SideBar extends Component {
  state = {
    menu_open: false
  };
  handleClick = () => {
    console.log(this.state.menu_open);
    this.setState({ menu_open: !this.state.menu_open });
  };
  render() {
    const { menu_open } = this.state;
    return (
      <div className={this.state.menu_open ? "open sidebar" : "sidebar"}>
        <div className="sidebar-icon" onClick={this.handleClick}>
          <div
            className={
              this.state.menu_open ? "first-line fiopen" : "first-line"
            }
          ></div>
          <div
            className={
              this.state.menu_open ? "second-line siopen" : "second-line"
            }
          ></div>
          <div
            className={
              this.state.menu_open ? "third-line tiopen" : "third-line"
            }
          ></div>
        </div>

        <div
          className="menu"
          onMouseEnter={!this.state.menu_open ? this.handleClick : null}
          onMouseLeave={this.handleClick}
        >
          <Listitem name="Home" icon="fas fa-home" state={menu_open} />
          <Listitem
            name="Transactions"
            icon="fas fa-database"
            state={menu_open}
          />
          <Listitem name="Users" icon="fas fa-users" state={menu_open} />
          <Listitem
            name="Statistics"
            icon="fas fa-chart-pie"
            state={menu_open}
          />
        </div>
      </div>
    );
  }
}

export default SideBar;
