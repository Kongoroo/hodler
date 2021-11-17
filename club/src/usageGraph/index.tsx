import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const UsageGraph = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const useFetch = (url: string, options: any) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();

          const chartJson = json.map((val: any) => {
            val["x"] = val["time"];
            delete val["time"];

            val["y"] = val["value"];
            delete val["value"];
            return val;
          });

          console.log(chartJson);

          setResponse(chartJson);
        } catch (e) {
          setError(error);
        }
      };

      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  };

  useFetch(
    `https://data.elrond.com/complete/transactionshistorical/transactions/count_24h`,
    {}
  );

  const data = {
    labels: ["1"],
    datasets: [
      {
        label: "Daily tx",
        data: response,
        fill: false,
        backgroundColor: "rgba(221, 87, 9, 0.589)",
        borderColor: "rgba(216, 93, 22, 0.466)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return response ? (
    <StyledGraphContainer>
      <h1>Daily transactions</h1>

      <Line data={data} options={options} />
    </StyledGraphContainer>
  ) : (
    <StyledGraphContainer>Loading...</StyledGraphContainer>
  );
};

export default UsageGraph;

const StyledGraphContainer = styled.div`
  background-color: #fff;
  margin: 0 auto;
  padding: 15px;
  width: 80%;
`;
