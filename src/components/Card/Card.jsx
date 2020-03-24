import React from "react";
import "./Card.scss";

const Card = props => {
  return (
    <div
      className={`card ${props.res ? "res" : ""}`}
      style={{
        width: props.w || "auto",
        maxWidth: "100vw",
        height: props.h || "auto",
        background: props.bg || "#fff9",
        borderRadius: "1em",
        display: "inline-flex",
        flexDirection: props.dir || "column",
        padding: props.p || "0em 0",
        margin: props.m || "0em",
        boxShadow: `0 0 ${props.sh} #0003`,
        justifyContent: props.jc || "center",
        alignItems: props.ai || ""
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
