import React from "react";
import "./Blog.scss";

const Blog = props => {
  let title = React.createElement("div");
  let vote_color = props.blog.rating > 0 ? "#00c510" : "red";
  return (
    <a href={`https://codeforces.com/blog/entry/${props.blog.id}`}>
      <div className="blog">
        <span className="lang">{props.blog.locale}</span>
        <div
          className="title"
          dangerouslySetInnerHTML={{ __html: props.blog.title }}
        ></div>
        <div className="tags">
          {props.blog.tags.map(t => (
            <div key={t} className="tag">
              {t}
            </div>
          ))}
        </div>
        <div>
          <div className="mod">
            {new Date(
              props.blog.modificationTimeSeconds * 1000
            ).toLocaleString()}
          </div>
          <div className="votes" style={{ color: vote_color }}>
            {props.blog.rating > 0
              ? "+" + props.blog.rating
              : props.blog.rating}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Blog;
