import { useEffect, useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [moneyValue, setMoneyValue] = useState(0);
  const [apr, setApr] = useState(0);
  const [totalAprValue, setTotalAprValue] = useState(0);
  const [daily, setDaily] = useState(true);

  useEffect(() => {
    if (moneyValue && apr) {
      const calculatedYearlyValue = (moneyValue / 100) * apr;

      const result = daily
        ? calculatedYearlyValue / 365
        : calculatedYearlyValue;

      // const result = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(number);

      setTotalAprValue(result);
    }
  }, [moneyValue, apr, daily]);

  return (
    <StyledCalculatorContainer>
      <h1>APR rewards calculator</h1>

      <StyledDurationContainer>
        <label>
          Daily earnings:
          <input
            type='radio'
            name='daily'
            checked={daily}
            onChange={() => setDaily(true)}
          />
        </label>

        <StyledDivider> | </StyledDivider>

        <label>
          Yearly earnings:
          <input
            type='radio'
            name='yearly'
            checked={!daily}
            onChange={() => setDaily(false)}
          />
        </label>
      </StyledDurationContainer>
      <StyledValueContainer>
        <label>
          Money value:
          <input
            type='number'
            name='value'
            onChange={(event) => setMoneyValue(parseInt(event.target.value))}
          />
        </label>

        <label>
          APR:
          <input
            type='number'
            name='apr'
            onChange={(event) => setApr(parseInt(event.target.value))}
          />
        </label>

        <StyledResultsContainer>
          {daily ? "Daily " : "Yearly "} earnings:{" "}
          {totalAprValue &&
            new Intl.NumberFormat("en-EN", {
              style: "currency",
              currency: "USD",
            }).format(totalAprValue)}
        </StyledResultsContainer>
      </StyledValueContainer>
    </StyledCalculatorContainer>
  );
};

export default Calculator;

const StyledCalculatorContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto 30px auto;
  width: 80%;
  && h1 {
    margin: 0 0 16px 0;
  }
`;

const StyledDurationContainer = styled.div`
  margin: 10px;

  && input {
    background-color: #4b68a130;
    border: 3px solid #4b68a1;
    margin: 0 10px;
    border-radius: 3px;
    padding: 5px;
  }
`;

const StyledValueContainer = styled.div`
  margin: 10px;

  && input {
    background-color: #4b68a130;
    border: 3px solid #4b68a1;
    margin: 0 10px;
    border-radius: 3px;
    padding: 5px;
  }
`;

const StyledDivider = styled.span`
  font-weight: bold;
  margin: 0 10px;
`;

const StyledResultsContainer = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;
