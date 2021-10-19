import elrondLogo from "./logo512.png";
import styled from "styled-components";
import ElrondDApp from "./elrond/ping-pong/dapp-template/src/App";

export default function App() {
  return (
    <StyledWrapperDiv>
      <StyledAppHeader>
        <StyledAppLogo src={elrondLogo} alt='logo' />
        <p>Hodl the coin!</p>

        <ElrondDApp />
      </StyledAppHeader>
    </StyledWrapperDiv>
  );
}

const StyledWrapperDiv = styled.div`
  align-items: center;
`;

const StyledAppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
  margin-bottom: 20px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledAppHeader = styled.header`
  background-color: #4b68a1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
