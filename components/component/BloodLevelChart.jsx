'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', level: 80 },
  { day: 'Tue', level: 92 },
  { day: 'Wed', level: 75 },
  { day: 'Thu', level: 88 },
  { day: 'Fri', level: 95 },
  { day: 'Sat', level: 70 },
  { day: 'Sun', level: 65 },
];

export default function BloodLevelChart() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Blood Level Chart
      </h1>

      <p className="text-gray-500 text-sm mb-2">
        Daily blood level measurements
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              cursor={{ fill: 'rgba(239,68,68,0.1)' }}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Bar
              dataKey="level"
              fill="#ef4444" 
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
