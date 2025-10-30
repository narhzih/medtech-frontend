
import React from 'react'

function DashBtn({ text, icon: Icon }) {
  return (
    <div className="w-full bg-blue-500 text-white p-2 flex items-center justify-center space-x-2 cursor-pointer">
      {Icon && <Icon size={18} />}
      <span>{text}</span>
    </div>
  );
}

export default DashBtn