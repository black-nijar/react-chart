import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [1, 3, 2, 2, 5],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.9",
          "rgba(255, 206, 86, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(255, 206, 86, 0.9)",
        ],
      },
      {
        label: "Sales for 2019 (M)",
        data: [3, 4, 2, 5, 3],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
