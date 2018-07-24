import React, { Component } from "react";
import { connect } from "react-redux";

class NewDocument extends Component {
  state = {
    title: "",
    content: ""
  };

  render() {
    return (
      <form>
        <input type="text" />
        <textarea />
      </form>
    );
  }
}

export default connect()(NewDocument);
