import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { getIsDarkMode } from '../../../App';

function ChartTest({titleChart}) {
  const isDarkMode = getIsDarkMode();
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 240,
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    }
  });

  useEffect(() => {
    // Code to render the chart when component mounts
  }, []);

  return (
    <div className={`relative flex flex-col rounded-xl bg-${isDarkMode ? 'dark' : 'white'} bg-clip-border text-gray-700 shadow-md`}>
      <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div className={`w-max rounded-lg bg-gray-900 p-5 text-${isDarkMode ? 'white' : 'dark'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </div>
        <div>
          <h6 className={`block font-sans text-base font-semibold leading-relaxed tracking-normal text-${isDarkMode ? 'white' : 'dark'} antialiased`}>
            {titleChart}
          </h6>
          <p className={`block max-w-sm font-sans text-sm font-normal leading-normal text-${isDarkMode ? 'white' : 'dark'} antialiased`}>
            Visualize your data in a simple way using the
            @material-tailwind/html chart plugin.
          </p>
        </div>
      </div>
      <div className="pt-6 px-2 pb-0">
        <Chart
          options={chartData.chartOptions}
          series={chartData.series}
          type="bar"
          height={240}
        />
      </div>
    </div>
  );
};

export default ChartTest;