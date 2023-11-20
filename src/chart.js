import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

export const LineChart = () => {
  // Sample data
  const data = {
    labels: ['09', '10', '11', '12', '13',14,15,16,17,18],
    datasets: [
      {
        
        data: [65, 70, 81, 81, 56],
        fill: false,
        borderColor:'green',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} />
    </div>
  );
};

