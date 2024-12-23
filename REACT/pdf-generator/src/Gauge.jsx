import React from 'react';
import Gauge from 'react-gauge-component';

const Gauges = ({ percentage }) => {
  const getRiskLevel = (percentage) => {
    if (percentage < 40) return 'LOW RISK';
    if (percentage < 60) return 'MEDIUM RISK';
    return 'HIGH RISK';
  };

  const getRiskColor = (percentage) => {
    if (percentage < 40) return '#77dd77'; // Green for low risk
    if (percentage < 60) return '#ffcc5c'; // Yellow for medium risk
    if (percentage < 100) return '#ff6f69'; // Yellow for medium risk
    return '#d3d3d3'; // Red for high risk
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '150px' }}>
      <Gauge
        value={percentage}
        width={300}
        height={150}
        arcsLength={[10,10,10,10,10]}
        color={getRiskColor(percentage)}
        backgroundColor="#d3d3d3"
        arcPadding={0.02}
        arcWidth={0.3}
        cornerRadius={3}
        needleColor="#fff"
        needleBaseColor="#000"
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '24px', margin: 0 }}>{percentage}%</p>
        <p style={{ margin: 0 }}>{getRiskLevel(percentage)}</p>
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

export default Gauges;
