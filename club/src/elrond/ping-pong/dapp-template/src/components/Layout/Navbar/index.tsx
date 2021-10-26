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
    <StyledNavBar className='bg-white border-bottom px-4 py-3'>
      <div className='container-fluid'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={loggedIn ? "/dashboard" : "/"}
        >
          {/* <ElrondLogo className="elrond-logo" /> */}
          <span className='dapp-name text-muted'>{dAppName}</span>
        </Link>

        {loggedIn && (
          <StyledLogoutButton href='/' onClick={logOut}>
            Close
          </StyledLogoutButton>
        )}
      </div>
    </StyledNavBar>
  );
};

export default Navbar;

const StyledNavBar = styled(BsNavbar)`
  color: white;
  a {
    color: white;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 4px;
    padding: 10px;
    text-decoration: none;
  }
  :hover {
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
