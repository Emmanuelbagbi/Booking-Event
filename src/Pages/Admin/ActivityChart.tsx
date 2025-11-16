 
import ReactApexChart from 'react-apexcharts';
import './ActivityChart.css';

const data = [
  { day: "Sun", bookings: 950 },
  { day: "Mon", bookings: 870 },
  { day: "Tue", bookings: 1396 },
  { day: "Wed", bookings: 880 },
  { day: "Thu", bookings: 1500 },
  { day: "Fri", bookings: 1300 },
  { day: "Sat", bookings: 1650 },
];

const RegularSellChart = () => {
  const series = [
    {
      name: 'Bookings',
      data: data.map(item => item.bookings),
    },
  ];

  const options = {
    chart: {
      type: 'area' as const,
      height: 300,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth' as const,
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} bookings`,
      },
    },
    xaxis: {
      categories: data.map(item => item.day),
    },
    colors: ['#34a853'],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default RegularSellChart;
