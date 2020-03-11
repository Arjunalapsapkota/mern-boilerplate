import React from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import SwitchRoute from "../Switch";
const Main = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <SideBar></SideBar>

      {/* switch  goes  here*/}
      <SwitchRoute></SwitchRoute>
    </React.Fragment>
  );
};
export default Main;
