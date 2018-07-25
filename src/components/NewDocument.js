import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "./SharedComponents";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";
import FaFloppy from "react-icons/lib/fa/floppy-o";

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

  handleTextChange = ({ target }, key) => {
    this.setState({
      [key]: target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert(`Submitted!`);
    console.log(this.state);
  };

  goBack = () => this.props.history.push("/dashboard");

  render() {
    const { title, content } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <TitleTextArea
          type="text"
          placeholder="Title..."
          onChange={e => this.handleTextChange(e, "title")}
          value={this.state.title}
        />
        <TextArea
          type="text"
          placeholder="Roses are red, Violets are blue..."
          onChange={e => this.handleTextChange(e, "content")}
          value={this.state.content}
        />
        <Button type="submit" bottomRight backgroundColor="#1289A7">
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

export default connect()(NewDocument);
