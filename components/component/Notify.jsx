
import { Bell, Eye } from 'lucide-react'
import React, { useState } from 'react'

function Predict({icon: Icon, text, duration}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick (){
    setIsClicked(true);
  }
  return (
    <div className="border-b-2">
      <div
        onClick={handleClick}
        className="flex items-start justify-between mb-2 cursor-pointer"
      >
        <Bell color={isClicked ? 'gray' : '#4a90e2'} />
        <div className="flex-1 mx-2">
          <h2 className="text-wrap max-w-[16rem] text-gray-700">{text}</h2>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <div className="w-6 flex justify-center">{!isClicked && <Eye />}</div>
      </div>
    </div>
  );
}

export default Predict