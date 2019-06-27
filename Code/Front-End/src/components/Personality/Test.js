import React from "react";
import { Link } from "react-router-dom";

import Questions from "./Questions";
import Nav from "../Nav";
import Footer from "../Footer";
import Button from "./Button";

const questions = [
  { question: "Are you a loving person?" },
  { question: "Do you like hiking?" },
  { question: "Are you friendly?" },
  { question: "Are you generous?" }
];
class Test extends React.Component {
  state = {
    choice: "",
    index: 0,
    lastIndex: questions.length - 1,
    finished: false,
    answers: []
  };

  onChange = type => e => {
    this.setState({
      choice: type
    });
  };

  next = () => {
    const answer = {
      question: questions[this.state.index].question,
      value: this.state.choice
    };
    this.setState(prev => {
      return {
        answers: [...this.state.answers, answer],
        index: prev.index + 1,
        lastIndex: questions.length - 1,
        choice: ""
      };
    });
  };

  previous = () => {
    this.state.answers.pop();
    this.setState(prev => {
      return {
        index: prev.index - 1
      };
    });
  };

  finish = () => {
    const answer = {
      question: questions[this.state.index].question,
      value: this.state.choice
    };
    this.setState({ answers: [...this.state.answers, answer], finished: true });
  };
  render() {
    console.log(this.state.answers);
    return (
      <React.Fragment>
        <Nav active="personality" />
        <div className="container-fluid">
          <div className="row">
            <div className="mt-3 col-md-12">
              <Link to="/personality" className="btn btn-primary ml-auto">
                Back
              </Link>
            </div>
          </div>
          <Questions
            onChange={this.onChange}
            question={questions[this.state.index]}
            finished={this.state.finished}
            choice={this.state.choice}
            answers={this.state.answers}
          />

          {!this.state.finished && (
            <Button
              index={this.state.index}
              lastIndex={this.state.lastIndex}
              questions={questions}
              next={this.next}
              previous={this.previous}
              finish={this.finish}
            />
          )}
        </div>

        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

export default Test;
