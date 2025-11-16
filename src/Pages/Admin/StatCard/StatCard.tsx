import React from 'react';
import ProfitLineChart from '../ProfitLineChart/ProfitLineChart';
import './StatCard.css';

interface StatCardProps {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  value: number;
  change?: { type: string; value: number };
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, change, color = 'blue' }) => (
  <div className={`stat-card-2 stat-card-2-${color}`} role="region" aria-label={`${title} statistics`}>
    <div className="stat-content-1">
      <p>{title}</p>
      <h3>{value}</h3>
      {change && (
        <div className="minor">
          <span className={`stat-change-1 ${change.type}-1`}>
            {change.type === 'up' ? '↗' : '↘'} {change.value}%
          </span>
          <small className="last-month">Since last month</small>
        </div>
      )}
    </div>

    <ProfitLineChart />

    <div className="stat-icon-1">
      <Icon size={30} />
    </div>
  </div>
);

export default StatCard;
