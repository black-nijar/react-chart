import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2019 (M)",
        data: [3, 4, 2, 5, 3],
        backgroundColor: [
          "rgba(54, 255, 54, 1",
          "rgba(66, 86, 155, 1",
          "rgba(132, 244, 154, 1",
          "rgba(166, 24, 235,1)",
          "rgba(144, 244, 235,1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
