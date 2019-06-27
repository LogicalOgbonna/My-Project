import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import readXlsxFile from "read-excel-file";

import Nav from "../Nav";
import Footer from "../Footer";
// import Card from "../ServiceCard";
class Career extends Component {
  onChange = e => {
    const file = e.target.files[0];
    // console.log(file);
    let subjects = [];
    readXlsxFile(file).then(row => {
      let head = row[0];
      for (let i = 1; i < row.length; i++) {
        console.log(row[i][0]);
        subjects = [
          ...subjects,
          {
            subject: row[i][0],
            grade: row[i][1]
          }
        ];
      }

      console.log(subjects);
    });
  };
  render() {
    return (
      <div>
        <Nav active="career" />
        <div className="row">
          <div className="col-md-10 offset-1">{/* <Card /> */}</div>
          {/* <div className="col-md-4">Hello</div>
          <div className="col-md-4">Hello</div>
          <div className="col-md-4">Hello</div> */}
          <input type="file" name="excel" id="excel" onChange={this.onChange} />
        </div>
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Career.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Career);
