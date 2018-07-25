import React from "react";
import styled from "styled-components";
import {
  CardWrapper,
  Heading,
  SubHeading,
  MutedMiniText
} from "./SharedComponents";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;

Board.propTypes = {
  documents: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired
};

export default function Board({ documents, location }) {
  return (
    <GridWrapper>
      {Object.entries(documents).map(([encodedTitle, doc]) => (
        <Link
          to={`${location.pathname}/edit/${encodedTitle}`}
          key={encodedTitle}
          style={{ textDecoration: "none" }}
        >
          <CardWrapper>
            <Heading color="black">{decodeURI(encodedTitle)}</Heading>
            <div>
              <SubHeading>Owners</SubHeading>
              <ul style={{ listStyle: "none", color: "black" }}>
                {doc.owners.map(owner => <li key={owner}>{owner}</li>)}
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <MutedMiniText>last changed by {doc.lastChangeBy}</MutedMiniText>
            </div>
          </CardWrapper>
        </Link>
      ))}
    </GridWrapper>
  );
}
