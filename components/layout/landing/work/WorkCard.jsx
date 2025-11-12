import React from 'react';
import Image from 'next/image';

function WorkCard({ badgeLabel, Icon, title, description, imageSrc, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-16 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="max-w-xl text-center md:text-left">
       
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-indigo-50 rounded-full">
          {badgeLabel}
        </span>
        <div className="mt-5 mb-6 flex items-center justify-center md:justify-start">
          <div className="p-3 bg-indigo-100 rounded-full shadow-sm">
            {Icon && <Icon className="text-blue-600 w-6 h-6" />}
          </div>
        </div>
        <h3 className="text-gray-900 text-xl font-semibold mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto md:mx-0">
          {description}
        </p>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Image
          src={imageSrc}
          alt={title}
          className="w-64 sm:w-72 md:w-80 object-contain drop-shadow-md"
          priority
        />
      </div>
    </div>
  );
}

export default WorkCard;
