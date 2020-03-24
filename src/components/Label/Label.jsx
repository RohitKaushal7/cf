import React from "react";
import "./Label.scss";

const Label = props => {
  return (
    <div className="label">
      <div className="for">{props.for}</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default Label;
