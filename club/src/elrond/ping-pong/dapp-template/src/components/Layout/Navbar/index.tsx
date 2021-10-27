import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { dAppName } from "../../../config";
import styled from "styled-components";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push("/");
  };

  return (
    <StyledNavBar>
      <Link to={loggedIn ? "/dashboard" : "/"}>
        {/* <ElrondLogo className="elrond-logo" /> */}
        <span className='dapp-name text-muted'>{dAppName}</span>
      </Link>

      {loggedIn && (
        <StyledLogoutButton href='/' onClick={logOut}>
          Close
        </StyledLogoutButton>
      )}
    </StyledNavBar>
  );
};

export default Navbar;

const StyledNavBar = styled(BsNavbar)`
  display: flex;
  margin-bottom: 20px;
  color: white;
  a {
    color: white;
    font-weight: bold;
    border: 1px solid white;
    background: rgba(167, 186, 209, 0.3);
    border-radius: 4px;
    padding: 10px;
    text-decoration: none;
    :hover {
      transition: all 0.1s ease-in;
      background: rgba(167, 186, 209, 0.5);
    }
  }
`;

const StyledLogoutButton = styled.a`
  display: inline-block;
  margin-left: 30px;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
`;
