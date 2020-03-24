import React from "react";

const Layout = props => {
  return (
    <div
      className="flex"
      style={{
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(135deg,${props.theme},${props.theme +
          11},transparent)`,
        minHeight: "100vh",
        height: props.h || "auto",
        width: props.w || "auto",
        position: "relative",
        justifyContent: props.jc || "center",
        alignItems: props.ai || "center"
      }}
    >
      {props.children}
    </div>
  );
};

export default Layout;
