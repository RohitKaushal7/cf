import React from "react";
import "./Status.scss";

const State = props => {
  let time = "on " + props.date.toString();

  if (props.date.toLocaleDateString() == new Date().toLocaleDateString()) {
    time = (
      <>
        <b>Today</b> at {props.date.toLocaleTimeString()}
      </>
    );
  }
  return (
    <div className="state">
      <div className="dot"></div>
      <div className="last-online">last online {time}</div>
    </div>
  );
};

export default State;
