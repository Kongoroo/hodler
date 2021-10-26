import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "../../config";
import { routeNames } from "../../routes";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledappContainer>
      <div className='row w-100'>
        <div className='col-12 col-md-8 col-lg-5 mx-auto'>
          <div className='card shadow-sm rounded p-4 border-0'>
            <div className='card-body text-center'>
              <h2 className='mb-3' data-testid='title'>
                {dAppName}
              </h2>

              <p className='mb-3'>
                This is an Elrond dapp sample.
                <br /> Login using your Elrond wallet.
              </p>

              <StyledLoginButton
                to={routeNames.unlock}
                className='btn btn-primary mt-3'
                data-testid='loginBtn'
              >
                Login
              </StyledLoginButton>
            </div>
          </div>
        </div>
      </div>
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
