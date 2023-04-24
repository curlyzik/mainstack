import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetGraphDataQuery } from "@/services/graphApi";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const DashboardChart = () => {
  const { data: graphData } = useGetGraphDataQuery();

  const labels =
    graphData &&
    Object.keys(graphData?.data.graph_data.views).map((date) =>
      dayjs(date).format("DD MMM")
    );

  const data = graphData && Object.values(graphData.data.graph_data.views);

  return (
    <div>
      <Line
        data={{
          labels,
          datasets: [
            {
              fill: true,
              data: data,
              borderWidth: 1,
              pointRadius: 3,
              borderColor: "rgb(255, 84, 3)",
              backgroundColor: "rgba(255, 83, 3, 0.116)",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#56616B",
                font: {
                  family: "Söhne",
                  size: 14,
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "#56616B",
                font: {
                  family: "Söhne",
                  size: 14,
                },
                stepSize: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DashboardChart;
