import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 20 },
  { name: 'B', value: 40 },
  { name: 'C', value: 30 },
  { name: 'D', value: 50 },
  { name: 'E', value: 40 },
  { name: 'F', value: 60 }
];

const ProfitLineChart = () => {
  return (
    <ResponsiveContainer width="95%" height={100}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00cfff" // Match color from image
          strokeWidth={3}
          dot={{ stroke: '#00cfff', strokeWidth: 2, fill: '#fff', r: 5 }} // Rounded dots
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProfitLineChart;




