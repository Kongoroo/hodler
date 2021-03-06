import React, { useCallback, useRef, useState } from "react";
import "hammerjs";
import { Line, Chart } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import { Button } from "react-bootstrap";
import { useGraphFetch } from "../utils/fetch";

Chart.register(zoomPlugin); // REGISTER PLUGIN

// https://data.elrond.com/latest/quoteshistorical/egld/price

const UsageGraph = () => {
  const { response: isLoading, response } = useGraphFetch(
    `https://data.elrond.com/complete/transactionshistorical/transactions/count_24h`,
    {}
  );
  const [resetChartZoom, setResetChartZoom] = useState(false);

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

  const options: any = {
    plugins: {
      limits: {
        x: { min: -100, max: 100, minRange: 50 },
        y: { min: -100, max: 100, minRange: 50 },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true, // SET SCROOL ZOOM TO TRUE
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
          speed: 100,
        },
        pan: {
          enabled: true,
          mode: "xy",
          speed: 100,
        },
        pinch: {
          enabled: true,
          mode: "xy",
          speed: 100,
        },
      },
    },
  };

  const useHookWithRefCallback = () => {
    const chartRef = useRef(null);
    const setRef = useCallback((node) => {
      if (chartRef.current) {
        // Make sure to cleanup any events/references added to the last instance
      }

      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        if (resetChartZoom) {
          node.resetZoom();
        }
      }

      // Save a reference to the node
      chartRef.current = node;
    }, []);

    return [setRef];
  };

  const [chartRef] = useHookWithRefCallback();

  const resetChartZoomFunc = () => {
    setResetChartZoom(!resetChartZoom);
  };

  return isLoading ? (
    <div>
      {/* <div>EGLD price: {fetchPrice}</div> */}

      <h1>Daily transactions</h1>

      <Line
        ref={chartRef}
        data={data}
        options={options}
        height={100}
        width={250}
      />
      <Button onClick={resetChartZoomFunc}>Reset chart</Button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UsageGraph;
