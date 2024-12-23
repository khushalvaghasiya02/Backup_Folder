import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const GaugeChart = ({ percentage }) => {
  const getSegmentData = (percentage) => {
    const totalSegments = 5;
    const filledSegments = Math.ceil((percentage / 100) * totalSegments); 
    const data = new Array(totalSegments).fill(10);
    const backgroundColors = new Array(totalSegments).fill('#d3d3d3')

    for (let i = 0; i < filledSegments; i++) {
      if (percentage < 40) {
        backgroundColors[i] = '#77dd77';
      } else if (percentage < 60) {
        backgroundColors[i] = '#ffcc5c';
      } else {
        backgroundColors[i] = '#ff6f69';
      }
    }

    return { data, backgroundColors };
  };

  const { data, backgroundColors } = getSegmentData(percentage);

  const chartData = {
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        borderColor: '#fff',
        borderWidth: 8,
        borderRadius: 10,
        circumference: 180,
        rotation: -90,
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
    rotation: -90,
    circumference: 180,
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '150px' }}>
      <Doughnut data={chartData} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '24px', margin: 0 }}>{percentage}%</p>
        <p style={{ margin: 0 }}>LOW RISK</p>
      </div>
      <div style={{ bottom: '10px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div><span style={{ color: '#77dd77' }}>▼ Low</span></div>
          <div><span style={{ color: '#ffcc5c' }}>⬤ Medium</span></div>     
          <div><span style={{ color: '#ff6f69' }}>▲ High</span></div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;


//install this package npm install react-chartjs-2 chart.js