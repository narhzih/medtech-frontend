import React from 'react';

function FeatureCard({ badge, Icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm  hover:shadow-md transition-shadow duration-300 flex flex-col">
      <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded mb-4 w-fit">
        {badge}
      </span>
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
     {Icon && <Icon className="w-6 h-6" />}
      </div>
      <h2 className="text-gray-900 text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-relaxed text-gray-600 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
