import React, { Component } from "react";
import User from "../components/User/User";
import Layout from "../components/Layouts/layout";
import Blogs from "../components/Blogs/Blogs";
import Submissions from "../components/Submissions/Submissions";
import Contests from "../components/Contests/Contests";
import Nav from "../components/Nav/Nav"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea
} from "recharts";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const Dashboard = props => {
  let { handle, user } = props;
  let colors = {
    newbie: "#cccccc",
    pupil: "#77ff77",
    specialist: "#77ddbb",
    expert: "#aaaaff",
    "candidate master": "#ff88ff",
    master: "#ffcc88",
    "international master": "#ffbb55",
    grandmaster: "#ff7777",
    "international grandmaster": "#ff3333",
    "legendry grandmaster": "#aa0000"
  };
  return (
    <Layout theme={colors[user.rank]}>
      <Nav {...props} />
      <User
        user={props.user}
        blogs={props.blogs}
        contests={props.contests}
        submissions={props.submissions}
      />
      <Card p="2em 2em" bg="#fffe">
        <LineChart
          width={700}
          height={400}
          data={props.contests}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis unit="s" dataKey="ratingUpdateTimeSeconds" scale="linear" />
          <YAxis
            domain={["dataMin - 100", "dataMax+100"]}
            interval="preserveEnd"
          />
          <ReferenceArea
            y1={0}
            y2={1200}
            label="newbie"
            fill={colors["newbie"]}
          />
          <ReferenceArea
            y1={1200}
            y2={1400}
            label="pupil"
            fill={colors["pupil"]}
          />
          <ReferenceArea
            y1={1400}
            y2={1600}
            label="specialist"
            fill={colors["specialist"]}
          />
          <ReferenceArea
            y1={1600}
            y2={1900}
            label="expert"
            fill={colors["expert"]}
          />
          <ReferenceArea
            y1={1900}
            y2={2100}
            label="candidate master"
            fill={colors["candidate master"]}
          />
          <ReferenceArea
            y1={2100}
            y2={2300}
            label="master"
            fill={colors["master"]}
          />
          <ReferenceArea
            y1={2300}
            y2={2400}
            label="international master"
            fill={colors["international master"]}
          />
          <ReferenceArea
            y1={2400}
            y2={2600}
            label="grandmaster"
            fill={colors["grandmaster"]}
          />
          <ReferenceArea
            y1={2600}
            y2={3000}
            label="international grandmaster"
            fill={colors["international grandmaster"]}
          />
          <ReferenceArea
            y1={3000}
            label="legendary grandmaster"
            fill="#aa0000"
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="newRating"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="rank" hide stroke="#82ca9d" />
        </LineChart>
      </Card>
      <Card m="3em 0" bg="transparent" ai="center">
        <Card w="90vw">
          <Blogs blogs={props.blogs} />
        </Card>
        <Card w="100%" bg="transparent" dir="row" m="3em 2em" p="1em" res>
          <Card w="100%" bg="transparent" m="0 1em 0 0">
            <Submissions
              handle={props.handle}
              submissions={props.submissions}
              error={props.error}
            />
          </Card>
          <Card bg="linear-gradient(to bottom, #eee,transparent)" jc="flex-start" w="100%" m="0">
            <Contests contests={props.contests} />
          </Card>
        </Card>
      </Card>
      <Card p="1em">
        <div className="footer">
          Made with love by{" "}
          <a href="https://www.github.com/rohitkaushal7">
            <b>Rohit Kaushal</b>
          </a>
        </div>
      </Card>
    </Layout>
  );
};

export default Dashboard;
