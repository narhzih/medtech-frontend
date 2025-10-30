
import React from 'react'

function Status({ heading, text, time, status, bgColor, textColor }) {
  return (
    <div className="flex justify-between p-4 border-b border-gray-200 w-full">
      <div className="">
        <h2 className="font-bold">{heading} </h2>
        <p className="text-sm ">{text} </p>
      </div>
      <div className="flex flex-col">
        <button
          style={{ backgroundColor: bgColor, color: textColor }}
          className="rounded-full px-3 py-1 text-sm font-semibold"
        >
          {status}
        </button>
        <span className="text-blue-600 text-sm font-bold">{time}</span>
      </div>
    </div>
  );
}

export default Status