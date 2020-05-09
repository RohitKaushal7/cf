import React, { Component } from "react";

import Input from "../components/Input/input";
import Layout from "../components/Layouts/layout";
import Error from "../components/Error/Error";

const Home = props => {
  return (
    <Layout h="100vh" w="100vw">
      <div>
        <form action="/dashboard" onSubmit={props.onSubmit}>
          <Input
            type={"text"}
            placeholder="tourist"
            value={props.handle}
            onChange={props.onChange}
          />
        </form>
      </div>
      {props.error ? <Error msg={props.error} /> : null}
    </Layout>
  );
};

export default Home;
