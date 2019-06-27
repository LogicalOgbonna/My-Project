import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import propType from "prop-types";
import { connect } from "react-redux";

import Landing from "./components/Landing/Landing";
import MST from "./components/MST/MST";
import Kruskal from "./components/Kruskal/Kruskal";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
        <Route path="/login" exact name="Home" component={Landing} />
        <Route path="/mst" exact name="MST" component={MST} />
        <Route path="/kruskal" exact name="Kruskal" component={Kruskal} />
      </Switch>
    );
  }
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.user.isAuthenticated
// });

// App.propTypes = {
//   isAuthenticated: propTypes.bool.isRequired
// };

export default connect()(App);
