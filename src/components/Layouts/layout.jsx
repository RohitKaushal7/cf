import React from "react";

const Layout = props => {
  return (
    <>
      <div
        className="bg"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          background: `linear-gradient(180deg,${props.theme},${props.theme +
            11} ,transparent)`
        }}
      ></div>
      <div
        className="flex"
        style={{
          display: "flex",
          flexDirection: "column",
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
    </>
  );
};

export default Layout;
