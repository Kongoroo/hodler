import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "../../config";
import { routeNames } from "../../routes";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledappContainer>
      <h2 data-testid='title'>{dAppName}</h2>

      <p>
        This is an Elrond dapp sample.
        <br /> Login using your Elrond wallet.
      </p>

      <StyledLoginButton to={routeNames.unlock} data-testid='loginBtn'>
        Login
      </StyledLoginButton>
    </StyledappContainer>
  );
};

export default Home;

const StyledLoginButton = styled(Link)`
  display: inline-block;
  margin: 15px 0;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
`;

const StyledappContainer = styled.div``;
