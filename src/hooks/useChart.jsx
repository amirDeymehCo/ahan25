import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function UseChart({ chart_array, changes }) {
  let color = '#52e1c1';
  let fill = '#52e1c27c';

  switch (changes) {
    case 'up':
      color = '#52e1c1';
      fill = '#52e1c27c';
      break;
    case 'down':
      color = '#E15555';
      fill = '#e1555540';
      break;
  }
  const chart_data = {
    series: [
      {
        name: 'Desktops',
        data: chart_array,
      },
    ],
    options: {
      chart: {
        height: 250,
        width: '100%',
        type: 'area',
        zoom: {
          enabled: false,
        },
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      fill: {
        color: [fill],
      },
      colors: [color],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        tickAmount: 3,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },

      tooltip: {
        enabled: false,
      },
      selection: {
        enabled: false,
        show: false,
      },
    },
  };

  return (
    <div>
      <$ApexCharts
        options={chart_data.options}
        series={chart_data.series}
        type="area"
        height={80}
        width={100}
      />
    </div>
  );
}


const $ApexCharts = styled(ApexCharts)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`