
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningsBarChart = () => {
  const barData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Earnings",
        data: [200, 400, 350, 700, 900, 450, 500],
        backgroundColor: "#1D4674",
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
      },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default EarningsBarChart;
