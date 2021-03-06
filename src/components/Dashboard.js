import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFetchingDocuments } from "../actions/documents";
import { MainWrapper, Heading, Button } from "./SharedComponents";
import FaPlus from "react-icons/lib/fa/plus";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Board from "./Board";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr 85px;
  padding: 0 10px;
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchingDocuments());
  }

  newDocument = () => {
    this.props.history.push(`${this.props.location.pathname}/new`);
  };

  goBack = () => {
    this.props.history.push("/");
  };

  render() {
    const { documents, isFetching } = this.props;
    const _documents = Object.values(documents);

    if (isFetching) {
      return (
        <MainWrapper>
          <Heading>LOADING...</Heading>
        </MainWrapper>
      );
    }

    if (documents.length === 0) {
      // No documents found
      return (
        <MainWrapper>
          <Heading>
            Looks like you have 0 documents.{" "}
            <span role="img" aria-label="emoji paper">
              📄
            </span>
          </Heading>
          <Link to="#">Create one?</Link>
        </MainWrapper>
      );
    }

    // Show Dashboard with Documents
    return (
      <DashboardWrapper>
        <Heading>You have {_documents.length} documents.</Heading>
        <Board documents={documents} location={this.props.location} />
        <Button
          bottomRight
          backgroundColor="#e74c3c"
          onClick={this.newDocument}
        >
          <FaPlus size={30} color="white" />
        </Button>
        <Button bottomLeft backgroundColor="#F79F1F" onClick={this.goBack}>
          <FaArrowLeft size={30} color="white" />
        </Button>
      </DashboardWrapper>
    );
  }
}

function mapStateToProps({ documents }) {
  return {
    documents: documents.documents,
    isFetching: documents.isFetching
  };
}

export default connect(mapStateToProps)(Dashboard);
