import React from 'react'

function Suggest({heading, content, btnText}) {
  return (
    <div>
      <div className="border-b-2">
        <h2 className="font-medium mb-2 text-gray-700">{heading}</h2>
        <p className="text-gray-500">{content}</p>
        <button className=" px-4 py-2 border shadow-sm my-4 text-gray-700 hover:bg-gray-50">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Suggest