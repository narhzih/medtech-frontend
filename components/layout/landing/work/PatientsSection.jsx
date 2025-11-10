import React from 'react';
import WorkCard from './WorkCard';
import phone from '@/public/phone.svg';
import Hospital from '@/public/hospital.png';
import { CalendarDays, MessagesSquare } from 'lucide-react';

function PatientsSection() {
  return (
     <section className="bg-gray-50 py-20 text-gray-600">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
         For Patients: Empowering Your Health Journey
        </h2>

        <div className="space-y-24">
          <WorkCard
            badgeLabel="Patients"
            Icon={CalendarDays}
            title="Easy Appointment Booking"
            description=" Schedule, reschedule, or cancel appointments with ease, directly
              through our secure patient portal. Receive timely reminders and
              manage your heathcare itinerary efficiently."
            imageSrc={phone}
          />

          <WorkCard
            badgeLabel="Doctors"
            Icon={MessagesSquare}
            title="Secure Messaging & Communication"
            description="Communication directly you and securely with your healthcare
              provider. Ask questions, share updates, and receive important
              information without the hassle of phone calls."
            imageSrc={Hospital}
            reverse 
          />
        </div>
      </div>
    </section>
  );
}

export default PatientsSection;
