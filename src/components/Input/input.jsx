import React, { Component } from "react";
import "./input.css";
// import SHA from "../utils/sha256";

class Input extends Component {
  render() {
    let elems = null;
    let str = Array.from(this.props.value);
    elems = str.map((ch, i, arr) => (
      <span key={ch + i} className="ch">
        {ch}
      </span>
    ));
    return (
      <div className="fancyText">
        <input
          type={this.props.type}
          id="handle"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <label htmlFor="handle">Enter your codeforces handle above</label>
        <div className="highlighted">{elems}</div>
      </div>
    );
  }
}

export default Input;
