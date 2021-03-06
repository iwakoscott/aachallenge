import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsername,
  handleAddUsernameToBrowser,
  handleResetUsername
} from "../actions/user";
import { Link } from "react-router-dom";
import { MainWrapper, Heading, LinksWrapper } from "./SharedComponents";

class Form extends Component {
  state = {
    username: ""
  };

  componentDidMount() {
    this.props.dispatch(getUsername());
  }

  onTextChange = ({ target }) => this.setState({ username: target.value });

  onSubmit = e => {
    e.preventDefault(); // prevent browser refresh
    this.props.dispatch(handleAddUsernameToBrowser(this.state.username));
    this.props.history.push("/dashboard");
  };

  onUsernameChange = () => this.props.dispatch(handleResetUsername());

  isDisabled = () => this.state.username === "";

  render() {
    const { username } = this.props.user;
    return (
      <MainWrapper>
        {username === null ? (
          <div>
            <Heading>
              Choose a username!{" "}
              <span role="img" aria-label="emoji wave">
                👋
              </span>
            </Heading>
            <form
              onSubmit={this.onSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                type="text"
                value={this.state.username}
                placeholder="Choose a username!"
                onChange={this.onTextChange}
              />
              <button type="submit" disabled={this.isDisabled()}>
                submit!
              </button>
            </form>
          </div>
        ) : (
          <div>
            <Heading>
              Looks like you are logged in as{" "}
              <span role="img" aria-label="magnifying glass emoji">
                🔎
              </span>:
            </Heading>
            <h2
              style={{
                display: "block",
                textDecoration: "underline",
                textAlign: "center"
              }}
            >
              {username}
            </h2>
            <LinksWrapper>
              <button onClick={this.onUsernameChange}>Change username</button>
              <Link to="/dashboard">Continue?</Link>
            </LinksWrapper>
          </div>
        )}
      </MainWrapper>
    );
  }
} // Form

export default connect(({ user }) => ({ user }))(Form);
