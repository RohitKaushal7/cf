import React, { Component } from "react";
import "./style.css";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

class App extends Component {
  state = {
    handle: "",
    loggedIn: false,
    user: null,
    blogs: null,
    contests: null,
    error: null
  };
  handleChange = e => {
    let value = e.target.value.split(" ").join("");
    this.setState({ handle: value });
  };
  componentDidMount = () => {
    let handle = sessionStorage.getItem("handle");
    if (handle != undefined) {
      this.setState({ handle: handle }, () => {
        this.submit();
      });
    }
  };

  submit = async e => {
    let text;
    if (e) {
      e.preventDefault();
      text = e.target.querySelector(".fancyText");
      text.style.transform = "translate(0,-3rem)";
    }

    let user, blogs, contests;
    try {
      let res_user = await fetch(
        `https://codeforces.com/api/user.info?handles=${this.state.handle}`
      );
      let data_user = await res_user.json();
      user = data_user.result[0];
    } catch (err) {
      console.log("Error : " + err);
      user = null;
      this.setState({ error: err });
      text && (text.style.transform = "translate(0,0rem)");
    }
    try {
      let res_blogs = await fetch(
        `https://codeforces.com/api/user.blogEntries?handle=${this.state.handle}`
      );

      let data_blogs = await res_blogs.json();
      blogs = data_blogs.result;
    } catch (err) {
      blogs = null;
      console.log("Error : " + err);
      this.setState({ error: err });
      text && (text.style.transform = "translate(0,0rem)");
    }
    try {
      let res_contests = await fetch(
        `https://codeforces.com/api/user.rating?handle=${this.state.handle}`
      );

      let data_contests = await res_contests.json();
      contests = data_contests.result;

      text && (text.style.transform = "translate(0,0rem)");
    } catch (err) {
      console.log("Error : " + err);
      contests = null;
      this.setState({ error: err });
      text && (text.style.transform = "translate(0,0rem)");
    }
    if (user) {
      this.setState({
        blogs: blogs,
        user: user,
        loggedIn: true,
        contests: contests,
        error: null
      });
      sessionStorage.setItem("handle", this.state.handle);
    }
  };

  logOut = () => {
    this.setState({ loggedIn: false, handle: "" });
    sessionStorage.removeItem("handle");
  };

  render() {
    let { loggedIn } = this.state;
    let page = null;
    if (!loggedIn) {
      page = (
        <Home
          handle={this.state.handle}
          onChange={this.handleChange}
          onSubmit={this.submit}
          error={this.state.error}
        />
      );
    } else {
      page = (
        <Dashboard
          handle={this.state.handle}
          user={this.state.user}
          blogs={this.state.blogs}
          contests={this.state.contests}
          logOut={this.logOut}
        />
      );
    }
    return <>{page}</>;
  }
}

export default App;
