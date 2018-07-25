import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getUsername } from "../actions/user";
import { connect } from "react-redux";
import Form from "./Form";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import NewDocument from "./NewDocument";

class App extends Component {
  componentDidMount() {
    // persist logged-in user on refresh
    this.props.dispatch(getUsername());
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dashboard/new" component={NewDocument} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
