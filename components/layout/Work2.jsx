import React from 'react';
import Image from 'next/image';
import phone from '../../public/phone.svg';
import Hospital from '../../public/hospital.png';
import { CalendarDays, MessagesSquare } from 'lucide-react';

function Work2() {
  return (
    <div className=" max-w-9/10 mx-auto py-6">
      <div className="mx-auto px-4 sm:px-8">
        <div className="text-center my-8 text-xl sm:text-2xl font-bold">
          <h2>For Patients: Empowering Your Health Journey</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-full md:max-w-2xl text-base sm:text-lg md:text-2xl text-center md:text-left">
            <span className="bg-gray-300 p-2 text-gray-500 font-bold text-sm rounded-full">
              Patients
            </span>
            <CalendarDays className="my-4 text-blue-600 mx-auto md:mx-0" />

            <h3 className="font-bold text-gray-700">
              Easy Appointment Booking
            </h3>
            <p className="text-gray-400">
              Schedule, reschedule, or cancel appointments with ease, directly
              through our secure patient portal. Receive timely reminders and
              manage your heathcare itinerary efficiently.
            </p>
          </div>
          <Image
            src={phone}
            alt="patient chatting"
            className="w-64 sm:w-72 md:w-96"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 max-w-full px-4 sm:px-8">
          <Image
            src={Hospital}
            alt="Hospital "
            className="w-64 sm:w-72 md:w-96 order-1 md:order-none"
          />

          <div className="max-w-full md:max-w-2xl text-base sm:text-lg md:text-2xl text-center md:text-left">
            <span className="bg-gray-300 p-2 text-gray-500 font-bold text-sm rounded-full">
              Patients
            </span>
            <MessagesSquare className="my-4 text-blue-600 mx-auto md:mx-0" />
            <h3 className="font-bold text-gray-700">
              Secure Messaging & Communication
            </h3>
            <p className="text-gray-400">
              Communication directly you and securely with your healthcare
              provider. Ask questions, share updates, and receive important
              information without the hassle of phone calls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work2;
