import React, { Component } from "react";
import "./Submissions.scss";
import Error from "../Error/Error";

const Submission = props => {
  let submission = props.submission;
  let colors = {
    OK: "#00c510",
    WRONG_ANSWER: "#ff0000",
    RUNTIME_ERROR: "#0079a8",
    TIME_LIMIT_EXCEEDED: "#ffd700"
  };
  return (
    <a
      href={`https://codeforces.com/contest/${submission.contestId}/submission/${submission.id}`}
    >
      <div
        className="submission"
        style={{ background: colors[submission.verdict] + "09" }}
      >
        <div className="header">
          <div className="date">
            {new Date(
              submission.creationTimeSeconds * 1000
            ).toLocaleTimeString()}
          </div>
          <div className="c_id">
            #{submission.id} of contest #{submission.contestId}
          </div>
        </div>
        <div className="main">
          <div className="left">
            <div className="name">{submission.problem.name}</div>
            <div className="bottom">
              <div className="rating tag">{submission.problem.rating}</div>
              <div className="tags">
                {submission.problem.tags.map(t => (
                  <div key={t} className="tag">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div
              className="verdict"
              style={{ color: colors[submission.verdict] }}
            >
              {submission.verdict}
            </div>
            <div className="cpu">
              <div className="time">
                {submission.timeConsumedMillis}{" "}
                <span className="light">ms</span>
              </div>
              <div className="mem">
                {submission.memoryConsumedBytes / 1024}
                <span className="light">KB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

class Submissions extends Component {
  render() {
    let oldDay = new Date("12 mar 1970");
    let day = null;
    return (
      <div className="submissions">
        <h1>Recent Submissions</h1>
        <div className="desc">Last 50 submissions</div>
        <div className="items">
          {this.props.submissions
            ? this.props.submissions.map(s => {
                let header = null;
                day = new Date(s.creationTimeSeconds * 1000);
                if (day.toDateString() != oldDay.toDateString()) {
                  header = (
                    <div className="day">
                      {day.toDateString() == new Date().toDateString()
                        ? "Today"
                        : day.toDateString()}
                    </div>
                  );
                  oldDay = day;
                }
                return (
                  <>
                    {header}
                    <Submission submission={s} key={s.id} />
                  </>
                );
              })
            : null}
        </div>
        {this.props.error ? (
          <Error
            pos="relative"
            msg={{ message: "Failed to Fetch : CORS Error" }}
          />
        ) : null}
      </div>
    );
  }
}

export default Submissions;
