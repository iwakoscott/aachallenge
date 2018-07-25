import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

/*
  PrivateRoute component is a Higher Order Component that Redirects a user
  if they have not logged in, otherwise returns the requested page.

  To know if the user has already authenticated we must connect this component
  to the store to get access to the user slice of the store.

*/

function PrivateRoute({ username, component: Component, editMode, ...props }) {
  return username !== null ? (
    <Route
      {...props}
      render={_props => <Component {..._props} editMode={editMode} />}
    />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: props.location.pathname }
      }}
    />
  );
}

function mapStateToProps({ user }) {
  return {
    username: user.username
  };
}

export default connect(mapStateToProps)(PrivateRoute);
