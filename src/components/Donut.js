import React from "react";
import Chart from "react-apexcharts";
import { brandDataRow } from "../screens/Brands";

export default function Donut() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: [
      `1M - pending`,
      "500k - pending",
      "100k - pending",
      "10k - pending",
    ],
    legend: {  
      position: "right",
      offsetY: -3,
      height: 150,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    colors: ["#B69DF8", "#8859DF", "#4E2C85", "#C9AAFC"],
  };

  const series = [6, 1, 2, 8];

  return (
    <div
      style={{
        marginTop:"20px",
        display: "flex",
        justifyContent:"space-between",
        width: "100%",
        height:"fit-content",
      }}
    >
      <Chart
        options={options}
        series={series}
        type="donut"
        width={"300px"}
        height={"100%"}
      />
    </div>
  );
}
