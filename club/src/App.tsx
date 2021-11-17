import elrondLogo from "./logo512.png";
import styled from "styled-components";
// import ElrondDApp from "./elrond/ping-pong/dapp-template/src/App";
import Calculator from "./calculator";
import UsageGraph from "./usageGraph";

export default function App() {
  return (
    <StyledWrapperDiv>
      <StyledAppHeader>
        <StyledAppLogo src={elrondLogo} alt='logo' />
        <StyledHeadline>Hodl the coin!</StyledHeadline>
      </StyledAppHeader>

      <Calculator />

      <UsageGraph />

      {/* <ElrondDApp /> */}
    </StyledWrapperDiv>
  );
}

const StyledHeadline = styled.h2`
  margin-left: 40px;
`;

const StyledWrapperDiv = styled.div`
  align-items: center;
`;

const StyledAppLogo = styled.img`
  height: 100px;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
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
  min-height: 100px;
  margin: 40px 0 60px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: calc(10px + 2vmin);
  color: white;
`;
