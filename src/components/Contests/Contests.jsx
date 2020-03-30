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
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  let oldMonth = new Date("12 mar 1970");
  let month = new Date(contests[0].ratingUpdateTimeSeconds * 1000);
  return (
    <div className="contests">
      <h1>Contests</h1>
      <div className="desc">
        participated in <b>{props.contests.length}</b> Contests
      </div>
      <div className="items">
        {contests.map(c => {
          let header = null;
          month = new Date(c.ratingUpdateTimeSeconds * 1000);
          if (month.getMonth() != oldMonth.getMonth()) {
            header = (
              <div className="month">
                {months[month.getMonth()] + " " + month.getFullYear()}
              </div>
            );
            oldMonth = month;
          }
          return (
            <>
              {header}
              <Contest contest={c} key={c.contestId} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Contests;
