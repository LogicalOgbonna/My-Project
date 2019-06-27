import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../common/Card";
import "./Question.css";

const Questions = ({ question, onChange, finished, choice }) => {
  const Test = () => (
    <div className="col-md-8 offset-2">
      <div className="jumbotron pt-3">
        <form action="" className="form-contro">
          <h3 className="text-muted">{question.question}</h3>
          <div className="border border-dark rounded-right rounded-left mt-3">
            <label htmlFor="disagree" className="form-check-label">
              <input
                type="radio"
                name="disagree"
                id="disagree"
                onChange={onChange("disagree")}
                checked={choice === "disagree"}
                value="disagree"
                className="p-5"
                style={{ marginRight: "1rem" }}
              />
              Disagree
            </label>
          </div>

          <div className="border border-dark rounded-right rounded-left mt-3">
            <label htmlFor="slightlyDisagree" className="form-check-label">
              <input
                type="radio"
                name="slightlyDisagree"
                id="slightlyDisagree"
                checked={choice === "slightlyDisagree"}
                value={"slightlyDisagree"}
                onChange={onChange("slightlyDisagree")}
                className="p-5"
                style={{ marginRight: "1rem" }}
              />
              Silghtly Disagree
            </label>
          </div>

          <div className="border border-dark rounded-right rounded-left mt-3">
            <label htmlFor="neutral" className="form-check-label">
              <input
                type="radio"
                name="neutral"
                id="neutral"
                checked={choice === "neutral"}
                onChange={onChange("neutral")}
                value={"neutral"}
                className="p-5"
                style={{ marginRight: "1rem" }}
              />
              Neutral
            </label>
          </div>

          <div className="border border-dark rounded-right rounded-left mt-3">
            <label htmlFor="slightlyAgree" className="form-check-label">
              <input
                type="radio"
                name="slightlyAgree"
                id="slightlyAgree"
                onChange={onChange("slightlyAgree")}
                checked={choice === "slightlyAgree"}
                value={"slightlyAgree"}
                className="p-5"
                style={{ marginRight: "1rem" }}
              />
              Slightly Agree
            </label>
          </div>

          <div className="border border-dark rounded-right rounded-left mt-3">
            <label htmlFor="agree" className="form-check-label">
              <input
                type="radio"
                name="agree"
                id="agree"
                onChange={onChange("agree")}
                checked={choice === "agree"}
                value={"agree"}
                className="p-5"
                style={{ marginRight: "1rem" }}
              />
              Agree
            </label>
          </div>
        </form>
      </div>
    </div>
  );
  const Finished = () => (
    <div className="col-md-10 offset-1">
      <div style={{ paddingBottom: "15%" }} className="row">
        <div className="col-md-6 offset-3">
          <div className="pt-5 pl-3">
            <h3 className="text-muted text-center">Your Result</h3>
            <Card />
          </div>

          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
            style={{ float: "left" }}
            className="btn btn-primary"
          >
            Read More
          </a>
          <Link
            to="/career"
            style={{ float: "right" }}
            className="btn btn-primary"
          >
            Career Path
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6" />
        <div style={{ float: "right" }} className="col-md-6" />
      </div>
    </div>
  );
  return <div className="row mt-5">{finished ? Finished() : Test()}</div>;
};

Questions.propTypes = {
  question: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  finished: propTypes.bool.isRequired,
  choice: propTypes.string.isRequired
};

export default Questions;
