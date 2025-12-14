import React from 'react';
import '../css/StatisticCard.css';

export default function StatisticsCard({ value, label, color1 = '#e63c8c', color2 = '#ffffff20' }) {
  return (
    <div
      className="statistics-card"
      style={{
        '--gradient-color1': color1,
        '--gradient-color2': color2,
      }}
    >
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
