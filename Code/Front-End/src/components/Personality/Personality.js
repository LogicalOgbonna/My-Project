import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Personality.css";
import Holland from "./Holland.js";
class Personality extends Component {
  render() {
    return (
      <div>
        <Nav active="personality" />
        <div className="row">
          <div className="col-md-12">
            <Holland />
          </div>
        </div>
        <Footer isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}
Personality.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Personality);
