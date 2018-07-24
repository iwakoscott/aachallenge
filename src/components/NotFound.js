import React from "react";
import { Link } from "react-router-dom";
import { MainWrapper, Heading } from "./SharedComponents";

export default function NotFound(props) {
  return (
    <MainWrapper>
      <Heading>404: Looks like a very boring page.</Heading>
      <Link to="/">Head back?</Link>
    </MainWrapper>
  );
}
