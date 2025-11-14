'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Consultations', value: 40 },
  { name: 'Follow-ups', value: 25 },
  { name: 'Lab Tests', value: 20 },
  { name: 'Physical Therapy', value: 15 },
]; 

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'];

export default function AppointmentTypeChart() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Appointment Types
      </h1>
      <p className="text-gray-500 text-sm mb-2">
        Distribution of appointments by type
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
