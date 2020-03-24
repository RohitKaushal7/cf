import React, { Component } from "react";
import "./Submissions.scss";
import Error from "../Error/Error";

const Submission = props => {
  let submission = props.submission;
  let colors = {
    OK: "#00c510",
    WRONG_ANSWER: "red",
    RUNTIME_ERROR: "#0079a8",
    TIME_LIMIT_EXCEEDED: "gold"
  };
  return (
    <a
      href={`https://codeforces.com/contest/${submission.contestId}/submission/${submission.id}`}
    >
      <div className="submission">
        <div className="header">
          <div className="date">
            {new Date(submission.creationTimeSeconds * 1000).toLocaleString()}
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
  state = { submissions: null, error: null };
  componentDidMount = async () => {
    try {
      let res_submissions = await fetch(
        `https://codeforces.com/api/user.status?handle=${this.props.handle}&from=1&count=50`
      );
      let data_submissions = await res_submissions.json();
      let submissions = data_submissions.result;
      this.setState({ submissions: submissions });
    } catch (err) {
      this.setState({ error: err });
    }
  };
  render() {
    return (
      <div className="submissions">
        <h1>Recent Submissions</h1>
        <div className="desc">Last 50 submissions</div>
        <div className="items">
          {this.state.submissions
            ? this.state.submissions.map(s => (
                <Submission submission={s} key={s.id} />
              ))
            : null}
        </div>
        {this.state.error ? (
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
