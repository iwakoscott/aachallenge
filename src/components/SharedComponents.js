import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const CardWrapper = styled.div`
  background: white;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border-style: solid;
  border-width: thin;
  border-color: #ced6e0;
  -moz-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
`;
