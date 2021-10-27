import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/img/heart.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <div>
        <a
          {...{
            target: "_blank",
          }}
          className='d-flex align-items-center'
          href='https://elrond.com/'
        >
          Made with <StyledHeartIcon /> by Elrond Network.
        </a>
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;

const StyledFooterContainer = styled.footer`
  color: white;
  margin: 10px 0 30px 0;
  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledHeartIcon = styled(HeartIcon)`
  filter: invert(9%) sepia(97%) saturate(4602%) hue-rotate(355deg)
    brightness(90%) contrast(100%);
`;
