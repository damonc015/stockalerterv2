import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
} from "chart.js";
import classes from "./Chart.module.css";
import SearchContext from "../../store/searchProvider";
import WatchContext from "../../store/watchlistProvider";
import GlobalContext from "../../store/globalProvider";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

const Chart = () => {
  const { isNight } = useContext(GlobalContext);
  const { stockHome } = useContext(SearchContext);
  const { graphData } = useContext(WatchContext);

  if (!graphData || graphData["Note"])
    return (
      <div style={{ textAlign: "center" }}>
        Stock data not available, try again later
      </div>
    );

  function filterGraphLabels() {
    if (!graphData) return;
    let graphLabels = graphData.map((item) => {
      return item[0];
    });
    return graphLabels.reverse();
  }
  function filterGraphPrices() {
    if (!graphData) return;
    let graphPrices = graphData.map((item) => {
      return Number.parseFloat(item[1]["4. close"]).toFixed(2);
    });
    return graphPrices.reverse();
  }

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
      x: {
        ticks: {
          color: isNight ? "rgb(180,180,180)" : "black",
        },
        grid: {
          color: isNight ? "rgba(120,120,120)" : "rgb(202, 202, 203)",
        },
        display: true,
      },
      y: {
        ticks: {
          color: isNight ? "rgb(180,180,180)" : "black",
        },
        grid: {
          color: isNight ? "rgb(120,120,120)" : "rgb(202, 202, 203)",
        },
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  function lineColor() {
    if (graphData[0][1].close > graphData[graphData.length - 1][1].close)
      return "#52ad59";
    return "red";
  }

  const lineData = {
    labels: filterGraphLabels(),
    datasets: [
      {
        label: stockHome ? stockHome.symbol : "Stock Symbol",
        data: filterGraphPrices(),
        pointRadius: 0,
        fill: false,
        backgroundColor: isNight ? "red" : "blue",
        borderColor: lineColor(),
        color: isNight ? "red" : "blue",
      },
    ],
  };

  return (
    <div className={classes.chartContainer}>
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default Chart;
