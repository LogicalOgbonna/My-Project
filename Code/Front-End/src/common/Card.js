import React from "react";
// import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";

import SVG from "./CardSVG";

import "./Card.css";
const Card = ({ user }) => {
  return (
    <div className="">
      <div className="card">
        <div className="additional">
          <div className="user-card">
            <div className="level center">Code: RAI</div>
            <div className="points center">4 Points</div>
            <SVG />
          </div>
          <div className="more-info">
            <h1>{user.username}</h1>
            <div className="coords">
              <span className="mr-5">Code: RAI</span>
            </div>
            <div className="coords">
              <span>Realistic</span>
              <span className="ml-4">Artistic</span>
              <span>Investigative</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">R</div>
                <i className="fab fa-react" />
                <div className="value">2</div>
              </div>
              <div>
                <div className="title">I</div>
                <i className="fas fa-blind" />
                <div className="value">1</div>
              </div>
              <div>
                <div className="title">A</div>
                <i className="fas fa-snowboarding" />
                <div className="value">2</div>
              </div>
              <div>
                <div className="title">S</div>
                <i className="fa fa-users" />
                <div className="value">0</div>
              </div>
              <div>
                <div className="title">E</div>
                <i className="fas fa-comment-dollar" />
                <div className="value">0</div>
              </div>
              <div>
                <div className="title">C</div>
                <i className="fas fa-user" />
                <div className="value">0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{user.username}</h1>
          <p className="text-justify">
            These are the results from the CAS RIASEC Test. Your scores for each
            of the 6 basic interest areas are below.
          </p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  user: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Card);
