import React from "react";
import "./Contests.scss";

const Contest = props => {
  let change =
    Number(props.contest.newRating) - Number(props.contest.oldRating);
  let change_color = change > 0 ? "#00c510" : "red";
  return (
    <a href={`https://codeforces.com/contest/${props.contest.contestId}`}>
      <div className="contest">
        <div className="header">
          <div className="date">
            {new Date(
              props.contest.ratingUpdateTimeSeconds * 1000
            ).toLocaleString()}
          </div>
          <div className="c_id">#{props.contest.contestId}</div>
        </div>
        <div className="main">
          <div className="left">
            <div className="name">{props.contest.contestName}</div>
            <div className="rank">
              <span className="light">Rank </span> {props.contest.rank}
            </div>
          </div>
          <div className="right">
            <div className="change" style={{ color: change_color }}>
              {change > 0 ? "+" + change : change}
            </div>
            <div className="newRating">{props.contest.newRating}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Contests = props => {
  let contests = [...props.contests];
  contests.reverse();
  return (
    <div className="contests">
      <h1>Contests</h1>
      <div className="desc">
        participated in <b>{props.contests.length}</b> Contests
      </div>
      <div className="items">
        {contests.map(c => (
          <Contest contest={c} key={c.contestId} />
        ))}
      </div>
    </div>
  );
};

export default Contests;
