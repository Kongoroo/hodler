import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Ui } from "@elrondnetwork/dapp-utils";
import moment from "moment";
import Denominate from "../../../components/Denominate";
import { TransactionType } from "../../../context/state";
import StatusIcon from "./StatusIcon";
import txStatus from "./txStatus";
import styled from "styled-components";

function sortByDate(a: TransactionType, b: TransactionType) {
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  return 0;
}

const fakeSender =
  "erd000000000000000000000000000000000000000000000000000000000a";

const TransactionList = ({
  transactions,
}: {
  transactions: TransactionType[];
}) => {
  const { address, explorerAddress } = Dapp.useContext();
  const incoming = (sender: string) =>
    sender === address && sender !== fakeSender;

  // eslint-disable-next-line
  const doubleOwnTransactions = transactions
    .filter((tx) => tx.sender === tx.receiver && tx.blockHash !== "")
    .map((tx) => ({ ...tx, sender: fakeSender, timestamp: tx.timestamp + 1 }));

  const sortedTransactions: TransactionType[] = ([
    ...transactions,
    ...(doubleOwnTransactions.length > 0 ? doubleOwnTransactions : []),
  ].filter((el: any) => el !== undefined) as any).sort(sortByDate);

  return (
    <StyledTableContainer>
      <h4>Smart Contract Transactions</h4>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tx hash</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody data-testid='transactionsList'>
          {sortedTransactions.map((tx: TransactionType, i) => {
            const incomingTransaction = incoming(tx.sender);
            return (
              <tr key={tx.txHash + i}>
                <td>
                  <div title={txStatus[tx.status]}>
                    <StatusIcon
                      tx={tx}
                      incomingTransaction={incomingTransaction}
                    />
                  </div>
                </td>
                <td>
                  <a
                    href={`${explorerAddress}transactions/${tx.txHash}`}
                    {...{
                      target: "_blank",
                    }}
                    title='View in Explorer'
                  >
                    <Ui.Trim data-testid='txHash' text={tx.txHash} />
                  </a>
                </td>
                <td>
                  {moment.unix(tx.timestamp).format("MMMM Do YYYY, h:mm A")}
                </td>
                <td>
                  {tx.value === "0" ? (
                    ""
                  ) : (
                    <>{tx.sender === address ? "-" : "+"}</>
                  )}
                  <Denominate value={tx.value} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <a
          href={`${explorerAddress}address/${address}`}
          {...{
            target: "_blank",
          }}
        >
          See all transactions
        </a>
      </div>
    </StyledTableContainer>
  );
};

export default TransactionList;

const StyledTableContainer = styled.div`
  max-width: 1400px;
`;
