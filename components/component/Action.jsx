
import React from 'react'

function Action( {text, icon:Icon}) {
  return (
    <div className="text-center border rounded-lg flex flex-col justify-center items-center cursor-pointer h-24 w-[120px] hover:bg-blue-50 transition">
      {Icon}
      <h2 className="text-sm mt-2 text-gray-700 font-medium">{text}</h2>
    </div>
  );
}

export default Action