import { PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
} from 'chart.js';
import { useEffect, useState } from "react";
import styles from '@/components/Nutrition/Nutrition.module.css';

ChartJS.register(
    ArcElement,
    RadialLinearScale,
    Tooltip,
    Legend
);

export default function Nutrition({ nutritionData }) {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        if (nutritionData) {
            setChartData({
                labels: ["Protein", "Carbs", "Fat"],
                datasets: [
                    {
                        label: 'Nutrition',
                        data: [nutritionData.protein, nutritionData.carbs, nutritionData.fat],
                        backgroundColor: [
                            'rgba(43, 63, 71, 0.60)',
                            'rgba(70, 117, 124, 0.60)',
                            'rgba(239, 255, 248, 0.60)'
                        ],
                        borderColor: [
                            'rgb(43, 63, 71)',
                            'rgb(70, 117, 124)',
                            'rgb(239, 255, 248)'
                        ],
                        borderWidth: 1
                    }
                ]
            });

            setChartOptions({
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        enabled: true
                    },
                    title: {
                        display: true,
                        text: 'Nutrition Chart'
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            });
        }
    }, [nutritionData]);

    return (
        <div className={styles.chartContainer}>
            <div className={styles.caloriesInfo}>
                <h4>Calories: {nutritionData.calories}</h4>
            </div>
            <div className={styles.chart}>
                <PolarArea data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}
