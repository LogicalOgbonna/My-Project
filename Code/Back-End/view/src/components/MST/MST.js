import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
// import { getPersonality } from "../../actions/test";
// import { addSubject } from "../../actions/profile";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./MST.css";
class Career extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav active="mst" />
        <div className="row">
          <div className="col-md-12" />
        </div>
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Career.propTypes = {
  isAuthenticated: propTypes.bool
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.user.isAuthenticated,
//   career: state.user.career,
//   riasec: state.user.riasec
// });

export default connect()(Career);
// mapStateToProps,
// { addSubject, getPersonality }
