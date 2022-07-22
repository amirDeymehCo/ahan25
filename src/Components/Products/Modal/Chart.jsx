import React from "react";
import { DivChart } from "../../Index/Data/Tabel/Chart/ChartStyle";
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
      position: "bottom",
    },
    title: {
      display: false,
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
const dataSetss = [
  {
    fill: false,
    label: "افزایش قیمت",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
  {
    fill: false,
    label: "کاهش قیمت",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    borderColor: "red",
    backgroundColor: "red",
  },
];

export const data = {
  labels,
  datasets: dataSetss,
};
const Chart = () => {
  return (
    <DivChart styles={`width:100% !important;`}>

      <Line options={options} data={data} />
    </DivChart>
  );
};

export default Chart;
