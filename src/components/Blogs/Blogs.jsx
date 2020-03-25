import React from "react";
import "./Blogs.scss";
import Blog from "./Blog";

const Blogs = props => {
  if (!props.blogs) {
    return null;
  }
  return (
    <div className="blogs">
      <h1>Blogs</h1>
      <div className="desc">
        {" "}
        <b>{props.blogs.length}</b> blogs written
      </div>
      <div className="items">
        {props.blogs.map(b => (
          <Blog blog={b} key={b.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
