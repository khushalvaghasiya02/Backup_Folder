import React from 'react';
import GaugeChart from 'react-gauge-chart';

const CustomGaugeChart = ({ percentage }) => {
  let color;
  if (percentage < 40) {
    color = '#77dd77'; // Low risk
  } else if (percentage < 60) {
    color = '#ffcc5c'; // Medium risk
  } else if (percentage <= 100) {
    color = '#ff6f69'; // High risk
  } else {
    color = '#d3d3d3'; // Default color
  }

  return (
    <div style={{ position: 'relative', width: '300px', height: '150px' }}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={5}
        arcsLength={[10,10,10,10,10]}
        colors={[color, '#d3d3d3']}
        percent={percentage / 100}
        arcPadding={0}
        style={{ height: '100%' }}
      />    
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
        <p style={{ margin: 0 }}>
          {percentage < 40
            ? 'LOW RISK'
            : percentage < 60
            ? 'MEDIUM RISK'
            : 'HIGH RISK'}
        </p>
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

export default CustomGaugeChart;
