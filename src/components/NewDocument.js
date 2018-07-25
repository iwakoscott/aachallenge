import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "./SharedComponents";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";
import FaFloppy from "react-icons/lib/fa/floppy-o";
import slugify from "slugify";
import { handleSaveDocument } from "../actions/documents";
import PropTypes from "prop-types";

const TextArea = styled.textarea`
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  font-size: 2em;
  padding: 1em;
  resize: none;
  background-color: white;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;

const TitleTextArea = styled.input`
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  font-size: 2em;
  padding: 1em;
  resize: none;
  background-color: white;
  outline: none;
  border: none;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;

const Form = styled.form`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 100px 1fr 85px;
`;

class NewDocument extends Component {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    if (this.props.editMode) {
      // if we are in editMode
      const { docURI } = this.props.match.params;
      const encodedTitle = encodeURI(docURI);
      const { content } = this.props.documents[encodedTitle];
      const title = decodeURI(encodedTitle);

      this.setState({
        title,
        content
      });
    }
  }

  handleTextChange = ({ target }, key) => {
    this.setState({
      [key]: target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    const { username, dispatch, history } = this.props;
    const rawData = {
      title,
      content,
      username
    };

    dispatch(handleSaveDocument(rawData));
  };

  goBack = () => this.props.history.push("/dashboard");

  isDisabled = () => this.state.title === "" || this.state.content === "";

  render() {
    const { title, content } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <TitleTextArea
          type="text"
          placeholder="Title..."
          disabled={this.props.editMode}
          onChange={e => this.handleTextChange(e, "title")}
          value={this.state.title}
        />
        <TextArea
          type="text"
          placeholder="Roses are red, Violets are blue..."
          onChange={e => this.handleTextChange(e, "content")}
          value={this.state.content}
        />
        <Button
          disabled={this.isDisabled()}
          type="submit"
          bottomRight
          backgroundColor="#1289A7"
        >
          <FaFloppy size={30} color="white" />
        </Button>
        <Button
          type="button"
          onClick={this.goBack}
          bottomLeft
          backgroundColor="#EA2027"
        >
          <FaArrowLeft size={30} color="white" />
        </Button>
      </Form>
    );
  }
}

NewDocument.propTypes = {
  editMode: PropTypes.bool
};

function mapStateToProps({ user, documents }) {
  return {
    username: user.username,
    documents: documents.documents
  };
}

export default connect(mapStateToProps)(NewDocument);
