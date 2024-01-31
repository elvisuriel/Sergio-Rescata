"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";

export const CounterChart = () => {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Menos de un año", "1-2 años", "2-3 años", "3-4 años", "4-5 años", "5 años y más"],
                datasets: [
                    {
                        data: [84.9, 15.1],
                        label: "Por género",
                        borderColor: "#3cba9f",
                        backgroundColor: "#71d1bd",
                        fill: false,
                    },
                    {
                        data: [1211, 5043],
                        label: "Comparación de censos (2021 vs. 2023)",
                        borderColor: "#ffa500",
                        backgroundColor: "#ffc04d",
                        fill: false,
                    },
                    {
                        data: [7, 6.6, 6.7, 6.8, 5.1, 67.8],
                        label: "Tiempo en la calle",
                        borderColor: "#3e95cd",
                        backgroundColor: "#7bb6dd",
                        fill: false,
                    },
                ],
            },
        });
    }, []);

    return (
        <>
            {/* Line chart */}
            <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">Line Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>

            {/* Table */}
            <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">Tabla de Datos</h1>
            <div className="w-[1100px] mx-auto">
                <table className="table-auto border-collapse border border-gray-800">
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
        </>
    );
};
