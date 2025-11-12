import React from 'react';
import WorkCard from './WorkCard';
import Medicine1 from '@/public/Medicine-bro.png';
import Medicine2 from '@/public/Researching-pana.png';
import { Stethoscope, Users } from 'lucide-react';

export default function DoctorsSection() {
  return (
    <section className="bg-gray-50 py-24 text-gray-600 font-[Inter]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Montserrat] font-extrabold text-center text-gray-900 leading-tight mb-16">
          For Doctors:{' '}
          <span className="text-blue-600">Enhancing Clinical Excellence</span>
        </h2>
        <div className="space-y-24">
          <WorkCard
            badgeLabel="Doctors"
            Icon={Stethoscope}
            title="Comprehensive Patient Records Access"
            description="Access complete patient histories, diagnostic results, and treatment plans from a unified dashboard. Make informed decisions quickly with all relevant data at your fingertips."
            imageSrc={Medicine1}
          />
          <WorkCard
            badgeLabel="Doctors"
            Icon={Users}
            title="Collaborative Care & Team Management"
            description="Coordinate effectively with other specialists and staff. Share updates, manage tasks, and ensure seamless continuity of care for every patient."
            imageSrc={Medicine2}
            reverse
          />
        </div>
      </div>
    </section>
  );
}
