"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";

export const CounterChart = () => {
    useEffect(() => {
        const canvas1 = document.getElementById('chart1') as HTMLCanvasElement | null;
        const canvas2 = document.getElementById('chart2') as HTMLCanvasElement | null;
        const canvas3 = document.getElementById('chart3') as HTMLCanvasElement | null;

        if (canvas1 && canvas2 && canvas3) {
            const ctx1 = canvas1.getContext('2d');
            const ctx2 = canvas2.getContext('2d');
            const ctx3 = canvas3.getContext('2d');

            if (ctx1 && ctx2 && ctx3) {
                const chart1 = new Chart(ctx1, {
                    type: 'line',
                    data: {
                        labels: ["Menos de un año", "1-2 años", "2-3 años", "3-4 años", "4-5 años", "5 años y más"],
                        datasets: [
                            {
                                data: [7, 6.6, 6.7, 6.8, 5.1, 67.8],
                                label: "Tiempo en en la calle",
                                borderColor: "#3cba9f",
                                backgroundColor: "#71d1bd",
                                fill: false,
                            },
                        ],
                    },
                });

                const chart2 = new Chart(ctx2, {
                    type: 'line',
                    data: {
                        labels: ["2021 = 1211", "2023 = 5043"],
                        datasets: [
                            {
                                data: [1211, 5043],
                                label: "Comparación de censos (2021 vs. 2023)",
                                borderColor: "#ffa500",
                                backgroundColor: "#ffc04d",
                                fill: false,
                            },
                        ],
                    },
                });

                const chart3 = new Chart(ctx3, {
                    type: 'doughnut',
                    data: {
                        labels: ["Hombres", "Mujeres"],
                        datasets: [
                            {
                                data: [84.9, 15.1],
                                backgroundColor: ["#3cba9f", "#7186d1"],
                            },
                        ],
                    },
                });
            } else {
                console.error("No se pudo obtener el contexto 2D de los lienzos");
            }
        } else {
            console.error("No se encontró el elemento con ID 'chart1', 'chart2', o 'chart3'");
        }
    }, []);
    return (
        <div className="my-20 flex flex-wrap justify-center">
            {/* Chart 1 */}
            <div className='border border-gray-400 pt-0 rounded-xl w-full md:w-1/2 lg:w-1/3 h-fit my-auto shadow-xl m-2'>
                <canvas id='chart1'></canvas>
            </div>

            {/* Chart 2 */}
            <div className='border border-gray-400 pt-0 rounded-xl w-full md:w-1/2 lg:w-1/3 h-fit my-auto shadow-xl m-2'>
                <canvas id='chart2'></canvas>
            </div>
            {/* Chart 2 */}
            <div className='border border-gray-400 pt-0 rounded-xl w-full md:w-1/2 lg:w-1/3 h-fit my-auto shadow-xl m-2'>
                <canvas id='chart3'></canvas>
            </div>
            {/* Table */}
            <div className="w-full md:w-1/2 lg:w-1/3 m-2">
                <h1 className="text-xl font-semibold capitalize">Tabla de Datos</h1>
                <table className="table-auto border-collapse border border-gray-800 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-800 p-2">Categoría</th>
                            <th className="border border-gray-800 p-2">Porcentaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-800 p-2">Por género</td>
                            <td className="border border-gray-800 p-2">84.9% Hombres / 15.1% Mujeres</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 p-2">Comparación de censos</td>
                            <td className="border border-gray-800 p-2">2021: 1211 / 2023: 5043</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-800 p-2">Tiempo en la calle</td>
                            <td className="border border-gray-800 p-2">Menos de un año: 7%, 1-2 años: 6.6%, 2-3 años: 6.7%, 3-4 años: 6.8%, 4-5 años: 5.1%, 5 años y más: 67.8%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};