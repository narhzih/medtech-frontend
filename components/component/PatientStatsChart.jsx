'use client';

import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', appointments: 12 },
  { month: 'Feb', appointments: 18 },
  { month: 'Mar', appointments: 10 },
  { month: 'Apr', appointments: 22 },
  { month: 'May', appointments: 17 },
  { month: 'Jun', appointments: 25 },
];

export default function PatientStatsChart() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Appointment Trends
      </h1>
      <p className="text-gray-500 text-sm mb-2">
        Overview of monthly appointments
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
