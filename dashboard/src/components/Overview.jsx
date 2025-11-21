import { useState } from "react";
import PieChart from "./Charts/PieChart";

const Overview = ({ repos }) => {
    const [chartData, setChartData] = useState({
        labels: repos.map((repo) => repo.language),
        datasets: [
            {
                label: "Languages Used",
                data: repos.map((repo) => repo.language),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],
            },
        ],
    });
    return (
        <div className="w-full p-6">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <div className="bg-bg p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Languages Used</h3>
                <PieChart chartData={chartData} />
            </div>
        </div>
    );
};

export default Overview;
