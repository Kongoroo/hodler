import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageState from "../../components/PageState";
import { contractAddress } from "../../config";
import { useContext, useDispatch } from "../../context";
import Actions from "./Actions";
import { getTransactions } from "./helpers/asyncRequests";
import TopInfo from "./TopInfo";
import Transactions from "./Transactions";
import styled from "styled-components";

const Dashboard = () => {
  const ref = React.useRef(null);
  const { apiAddress, address } = Dapp.useContext();
  const { transactionsFetched } = useContext();
  const dispatch = useDispatch();

  const fetchData = () => {
    getTransactions({
      apiAddress,
      address,
      timeout: 3000,
      contractAddress,
    }).then(({ data, success }) => {
      dispatch({
        type: "setTransactions",
        transactions: data,
        transactionsFetched: success,
      });
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchData, []);

  if (transactionsFetched === undefined) {
    return <PageState svgComponent={<></>} spin />;
  }

  if (transactionsFetched === false) {
    return (
      <StyledPageState
        svgComponent={
          <FontAwesomeIcon icon={faBan} className='text-secondary fa-3x' />
        }
        title='Unavailable'
      />
    );
  }

  return (
    <div className='container py-4' ref={ref}>
      <div className='card rounded border-0 bg-primary'>
        <div className='card-body text-center p-4'>
          <TopInfo />
          <Actions />
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default Dashboard;

const StyledPageState = styled(PageState)`
  padding: 5px;
  border-radius: 50%;
  background-color: $light;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &.icon-medium {
    width: 80px;
    height: 80px;
  }
`;
