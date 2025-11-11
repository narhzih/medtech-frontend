import React from 'react';

export default function FeatureCard({ badge, Icon, title, description }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col font-[Inter]">
      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-5 w-fit">
        {badge}
      </span>
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
        {Icon && <Icon className="w-7 h-7" />}
      </div>
      <h2 className="text-gray-900 text-xl font-[Montserrat] font-semibold mb-3 leading-snug">
        {title}
      </h2>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
