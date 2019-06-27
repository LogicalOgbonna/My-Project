import React, { Component } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Card from "../ServiceCard";
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav active="dashboard" />

        <div className="dashboard" id="home">
          <div className="layer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-3 banner-text-w3pvt">
                  <h4 className="b-w3ltxt text-capitalize">Know Who You Are</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-1">
            <Card dashboard={true} />
          </div>
          {/* <div className="col-md-4">Hello</div>
          <div className="col-md-4">Hello</div>
          <div className="col-md-4">Hello</div> */}
        </div>
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

export default Dashboard;
