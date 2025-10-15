import React from 'react';

function Button({ text, color, action }) {
  return (
    <button
      onClick={action}
      className={` ${color} inline-flex items-center border-1 text-sm font-medium px-6 py-2.5 rounded-md hover:text-white hover:bg-sky-700 transition bg-sky-600 `}
    >
      {text}
    </button>
  );
}

export default Button;
