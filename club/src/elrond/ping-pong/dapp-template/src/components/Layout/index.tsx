import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import routes, { routeNames } from "../../routes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loggedIn } = Dapp.useContext();
  const refreshAccount = Dapp.useRefreshAccount();

  React.useEffect(() => {
    if (loggedIn) {
      refreshAccount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <StyledAppWrapper>
      <Navbar />
      <StyledMainSection>
        <Dapp.Authenticate routes={routes} unlockRoute={routeNames.unlock}>
          {children}
        </Dapp.Authenticate>
      </StyledMainSection>
      <Footer />
    </StyledAppWrapper>
  );
};

export default Layout;

const StyledMainSection = styled.main`
  padding: 15px;
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  a,
  button {
    color: white;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 4px;
    padding: 10px;
    text-decoration: none;
    background: rgba(167, 186, 209, 0.3);
    margin: 0 5px;
    :hover {
      transition: all 0.1s ease-in;
      background: rgba(167, 186, 209, 0.5);
    }
  }
`;

const StyledAppWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
