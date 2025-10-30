import { Pen, Trash2 } from 'lucide-react';
import React from 'react'

function AppointmentCard({ heading, text, status, bgColor, textColor }) {
  return (
    <div className="flex justify-between p-4 border-b border-gray-200 w-full">
      <div className="w-24">
        <p className="text-md font-semibold">{heading} </p>
        <p className="text-sm ">{text} </p>
      </div>
      <div className="flex flex-col">
        <button
          style={{ backgroundColor: bgColor, color: textColor }}
          className="rounded-full px-3 py-1 text-sm font-semibold"
        >
          {status}
        </button>
      </div>
      <div>
        <Pen />
      </div>
      <div>
        <Trash2 />
      </div>
    </div>
  );
}

export default AppointmentCard