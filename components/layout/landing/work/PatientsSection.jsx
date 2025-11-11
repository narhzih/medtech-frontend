import React from 'react';
import WorkCard from './WorkCard';
import phone from '@/public/phone.svg';
import Hospital from '@/public/hospital.png';
import { CalendarDays, MessagesSquare } from 'lucide-react';

function PatientsSection() {
  return (
    <section className="bg-gray-50 py-20 text-gray-700">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Montserrat] font-extrabold text-center text-gray-900 leading-tight mb-16">
          For Patients:{' '}
          <span className="text-blue-600">
            Empowering Your Health Journey
          </span>
        </h2>
        <div className="space-y-24">
          <WorkCard
            badgeLabel="Patients"
            Icon={CalendarDays}
            title="Easy Appointment Booking"
            description="Schedule, reschedule, or cancel appointments effortlessly through our secure patient portal. Receive timely reminders and manage your healthcare journey with confidence."
            imageSrc={phone}
          />

          <WorkCard
            badgeLabel="Patients"
            Icon={MessagesSquare}
            title="Secure Messaging & Communication"
            description="Connect directly and securely with your healthcare provider. Ask questions, share updates, and receive important information without the hassle of phone calls."
            imageSrc={Hospital}
            reverse
          />
        </div>
      </div>
    </section>
  );
}

export default PatientsSection;
