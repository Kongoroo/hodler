import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { contractAddress } from "../../config";
import Denominate from "./../../components/Denominate";
import styled from "styled-components";

const TopInfo = () => {
  const {
    address,
    account: { balance },
  } = Dapp.useContext();

  return (
    <StyledTopInfo>
      <div className='mb-1'>
        <StyledTopInfoText>Your address:</StyledTopInfoText>
        <span data-testid='accountAddress'> {address}</span>
      </div>
      <div>
        <StyledTopInfoText>Contract address:</StyledTopInfoText>
        <span data-testid='contractAddress'> {contractAddress}</span>
      </div>
      <div>
        <StyledBalance>
          <Denominate value={balance} dataTestId='balance' />
        </StyledBalance>
      </div>
    </StyledTopInfo>
  );
};

export default TopInfo;

const StyledTopInfo = styled.div`
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
`;

const StyledTopInfoText = styled.span`
  font-weight: bold;
`;

const StyledBalance = styled.h3`
  margin: 15px 0 0 0;
`;
