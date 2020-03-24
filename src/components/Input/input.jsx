import React, { Component } from "react";
import "./input.css";
// import SHA from "../utils/sha256";

class Input extends Component {
  render() {
    let elems = null;
    let str = Array.from(this.props.value);
    elems = str.map((ch, i, arr) => (
      <span key={ch + arr[i - 1]} className="ch">
        {ch}
      </span>
    ));
    return (
      <div className="fancyText">
        <input
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className="highlighted">{elems}</div>
      </div>
    );
  }
}

export default Input;
