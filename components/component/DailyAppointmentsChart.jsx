'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', appointments: 12 },
  { day: 'Tue', appointments: 18 },
  { day: 'Wed', appointments: 15 },
  { day: 'Thu', appointments: 20 },
  { day: 'Fri', appointments: 25 },
  { day: 'Sat', appointments: 10 },
  { day: 'Sun', appointments: 8 },
];

export default function DailyAppointmentsChart() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Daily Appointments
      </h1>
      <p className="text-gray-500 text-sm mb-2">
        Number of appointments by day
      </p>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="colorAppointments"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="#2563eb"
              fill="url(#colorAppointments)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
