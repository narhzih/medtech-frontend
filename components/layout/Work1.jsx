import React from 'react'
import Image from 'next/image';
import Medicine1 from "../../public/Medicine-bro.png";
import Medicine2 from "../../public/Researching-pana.png"
import { Stethoscope, Users } from 'lucide-react';

function Work1() {
  return (
    <div className="container  mx-auto ">
      <div className="px-4 sm:px-8">
        <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">
          <h2>For Doctors: Enhancing Clinical Excellence</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-full md:max-w-2xl text-base sm:text-lg md:text-2xl text-center md:text-left">
            <span className="bg-gray-300 p-2 text-gray-500 font-bold text-sm rounded-full">
              Doctors
            </span>
            <Stethoscope className="my-4 text-blue-600 mx-auto md:mx-0" />

            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Comprehensive Patient Records Access
            </h3>
            <p className="text-gray-500 text-base">
              Access complete patient histories, diagnostic results, and
              treatment plans from a unified dashboard. Make informed decisions
              quickly with all relevant data at your fingertips.
            </p>
          </div>
          <Image
            src={Medicine1}
            alt="medicine-bro"
            className="w-64 sm:w-72 md:w-96"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 max-w-full px-4 sm:px-8">
          <Image
            src={Medicine2}
            alt="medicine-bro"
            className="w-64 sm:w-72 md:w-96 order-1 md:order-none"
          />

          <div className="max-w-full md:max-w-2xl text-base sm:text-lg md:text-2xl text-center md:text-left flex-grow ">
            <span className="bg-gray-300 p-2 text-gray-500 font-bold text-sm rounded-full">
              Doctors
            </span>
            <Users className="my-4 text-blue-600 mx-auto md:mx-0" />
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Comprehensive Patient Records Access
            </h3>
            <p className="leading-relaxed text-gray-500  text-base">
              Access complete patient histories, diagnostic results, and
              treatment plans from a unified dashboard. Make informed decisions
              quickly with all relevant data at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work1