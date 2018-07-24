import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleFetchingDocuments } from "../actions/documents";
import { MainWrapper, Heading, LinksWrapper } from "./SharedComponents";
import FaPlus from "react-icons/lib/fa/plus";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Board from "./Board";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr 85px;
  padding: 0 10px;
`;

const AddEntryButton = styled.button`
  position: fixed;
  cursor: pointer;
  bottom: 0;
  right: 0;
  height: 90px;
  width: 90px;
  margin-right: 10px;
  margin-bottom: 10px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #e74c3c;
  outline: none;
  -moz-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    -moz-box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 400px) {
    height: 75px;
    width: 75px;
  }
`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchingDocuments());
  }

  newDocument = () => {
    this.props.history.push(`${this.props.location.pathname}/new`);
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
        <AddEntryButton onClick={this.newDocument}>
          <FaPlus size={30} color="white" />
        </AddEntryButton>
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
