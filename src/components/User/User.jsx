import React, { useEffect } from "react";
import "./User.scss";
import Status from "../Status/Status";
import Label from "../Label/Label";
import Card from "../Card/Card";

const User = props => {
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
    "legendary grandmaster": "#aa0000"
  };
  return (
    <div className="container">
      <div className="flex-v">
        <div className="main">
          <div className="avatar">
            <img src={props.user.titlePhoto} alt={props.user.handle} />
          </div>
          <div className="content">
            <Status date={new Date(props.user.lastOnlineTimeSeconds * 1000)} />
            <h1>{props.user.handle}</h1>
            <div className="rating">
              {props.user.rating}{" "}
              <span
                style={{
                  filter: "brightness(50%)",
                  color: colors[props.user.rank]
                }}
              >
                {props.user.rank}
              </span>
            </div>
            <div className="best-rating">
              All time best {props.user.maxRating}{" "}
              <span
                style={{
                  filter: "brightness(50%)",
                  color: colors[props.user.maxRank]
                }}
              >
                {" "}
                {props.user.maxRank}
              </span>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="location">
            <Card
              bg="#fff7"
              m="3em 0"
              p="0 2em"
              w="100%"
              dir="row"
              jc="space-around"
            >
              <Card p="0">
                <Label for="country" value={props.user.country} />
              </Card>
              <Card>
                <Label for="organization" value={props.user.organization} />
              </Card>
              <Card p="0">
                <Label
                  for="Friend of"
                  value={props.user.friendOfCount + " Users"}
                />
              </Card>
              <Card p="0">
                <Label for="Blogs written" value={props.blogs.length} />
              </Card>
              <Card p="0">
                <Label
                  for="contribution"
                  value={
                    props.user.contribution > 0
                      ? "+" + props.user.contribution
                      : props.user.contribution
                  }
                />
              </Card>
              <Card p="0">
                <Label for="contests" value={props.contests.length} />
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
