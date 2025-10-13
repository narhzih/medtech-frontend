import React from 'react';

function Button({ text, color, action }) {
  return (
    <button
      onClick={action}
      className={` ${color} inline-flex items-center border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0`}
    >
      {text}
    </button>
  );
}

export default Button;
