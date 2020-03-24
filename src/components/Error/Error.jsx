import React from "react";

const Error = props => {
  return (
    <div
      className="error"
      style={{
        color: "red",
        fontWeight: "bold",
        padding: "1em 2em",
        background: "#f905",
        borderRadius: "1em",
        position: props.pos || "absolute",
        margin: "1em",
        bottom: !props.pos ? "3em" : ""
      }}
    >
      {props.msg.message}
    </div>
  );
};

export default Error;
