import styled, { css } from "styled-components";

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
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const SubHeading = styled.h3`
  color: #8395a7;
  text-align: left;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const CardWrapper = styled.div`
  background: white;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border-style: solid;
  border-width: thin;
  border-color: #ced6e0;
  -moz-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  &:hover {
    -moz-box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 27px 0 rgba(0, 0, 0, 0.2);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a9a7ab' fill-opacity='0.24'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const MutedMiniText = styled.p`
  color: grey;
  font-size: 10px;
  font-style: italic;
`;

export const Button = styled.button`
  cursor: pointer;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
  ${props =>
    props.bottomRight &&
    css`
      bottom: 0;
      right: 0;
      margin-right: 10px;
      margin-bottom: 10px;
    `} ${props =>
  props.bottomLeft &&
  css`
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-bottom: 10px;
  `}
  ${props =>
    (props.bottomLeft || props.bottomRight) &&
    css`
      position: fixed;
    `}
  height: 90px;
  width: 90px;

  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `} outline: none;
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
