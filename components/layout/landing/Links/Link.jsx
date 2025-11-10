import React from 'react'

function Link({path, text}) {
  return (
    <a
      className="text-sm font-medium text-gray-700 hover:text-sky-600 transition"
      href={path}
    >
      {text}
    </a>
  );
}

export default Link