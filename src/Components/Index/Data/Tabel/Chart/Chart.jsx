import { DivChart } from "./ChartStyle";
import FilterBtn from "./FiterBtn";
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
import { faker } from "@faker-js/faker";

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "10:59",
  "6:59",
  "7:59",
  "5:59",
  "4:59",
  "3:59",
  "2:59",
  "1:59",
  "11:59",
  "13:59",
];
const datasetss = [
  {
    fill: false,
    label: "",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
  {
    fill: true,
    label: "",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    borderColor: "rgb(253, 162, 235)",
    backgroundColor: "rgba(253, 162, 235, 0.5)",
  },
  {
    fill: true,
    label: "",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    borderColor: "rgb(200, 255, 20)",
    backgroundColor: "rgb(200, 255, 20,0.3)",
  },
];

export const data = {
  labels,
  datasets: datasetss,
};
const Chart = () => {
  return (
    <DivChart>
      <FilterBtn />

      <Line options={options} data={data} />
    </DivChart>
  );
};

export default Chart;
