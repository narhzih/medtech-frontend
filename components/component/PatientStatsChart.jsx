'use client';

import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// FULL medical dataset
const data = [
  {
    month: 'Jan',
    heartRate: 90,
    bloodPressure: 120,
    glucose: 85,
    cholesterol: 110,
  },
  {
    month: 'Feb',
    heartRate: 95,
    bloodPressure: 118,
    glucose: 92,
    cholesterol: 120,
  },
  {
    month: 'Mar',
    heartRate: 100,
    bloodPressure: 125,
    glucose: 87,
    cholesterol: 130,
  },
  {
    month: 'Apr',
    heartRate: 105,
    bloodPressure: 130,
    glucose: 95,
    cholesterol: 125,
  },
  {
    month: 'May',
    heartRate: 98,
    bloodPressure: 122,
    glucose: 88,
    cholesterol: 119,
  },
  {
    month: 'Jun',
    heartRate: 110,
    bloodPressure: 128,
    glucose: 93,
    cholesterol: 124,
  },
];

export default function PatientStatsChart() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-500">Heart Rate</p>
          <h2 className="text-xl font-bold text-cyan-500">107 bpm</h2>
          <p className="text-xs text-gray-400">Above the normal</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Blood Pressure</p>
          <h2 className="text-xl font-bold text-cyan-500">120/89 mmHg</h2>
          <p className="text-xs text-gray-400">In the normal</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Glucose Rate</p>
          <h2 className="text-xl font-bold text-cyan-500">97 mg/dl</h2>
          <p className="text-xs text-gray-400">In the normal</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Cholesterol</p>
          <h2 className="text-xl font-bold text-cyan-500">124 mg/dl</h2>
          <p className="text-xs text-gray-400">In the normal</p>
        </div>
      </div>
      <div className="w-full h-72">
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
            <Legend />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Heart Rate"
            />
            <Line
              type="monotone"
              dataKey="bloodPressure"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Blood Pressure"
            />
            <Line
              type="monotone"
              dataKey="glucose"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Glucose"
            />
            <Line
              type="monotone"
              dataKey="cholesterol"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Cholesterol"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
