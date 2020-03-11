import React from "react";
const Listitem = props => {
  return (
    <div className="listDiv">
      <span className="icon-holder">
        <i className={props.icon}></i>
      </span>
      <span className={props.state ? "drawer-open" : "drawer-close"}>
        {props.name}
      </span>
    </div>
  );
};
export default Listitem;
