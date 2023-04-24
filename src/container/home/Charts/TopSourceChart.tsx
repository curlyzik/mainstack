import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  source:
    | {
        source: string;
        count: number;
        percent: number;
      }[]
    | undefined;
}
const TopSourceChart: React.FC<Props> = ({ source }) => {
  const data = source?.map((src) => src.percent);
  const labels = source?.map((src) => src.source);

  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "rgb(89, 158, 234)",
              "rgb(132, 79, 246)",
              "rgb(15, 183, 122)",
              "rgb(250, 183, 10)",
              "rgb(240, 148, 104)",
            ],
            borderWidth: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        cutout: 60,
        radius: 90,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      }}
    />
  );
};

export default TopSourceChart;
