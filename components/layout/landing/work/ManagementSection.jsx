import React from 'react';
import { ShieldCheck, Target, ChartNoAxesCombined } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function ManagementSection() {
  const features = [
    {
      badge: 'Management',
      Icon: ChartNoAxesCombined,
      title: 'Strategic Performance Dashboards',
      description:
        'Monitor KPIs with intuitive dashboards. Track goals, identify trends, and make data-driven decisions to foster growth.',
    },
    {
      badge: 'Management',
      Icon: Target,
      title: 'Resource Optimization & Planning',
      description:
        'Optimize staffing, equipment, and facilities with predictive analytics and scheduling tools for higher efficiency.',
    },
    {
      badge: 'Management',
      Icon: ShieldCheck,
      title: 'Compliance & Audit Trail',
      description:
        'Maintain compliance with built-in audit trails and documentation. Ensure adherence to healthcare standards confidently.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 text-gray-600 font-[Inter]">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[Montserrat] font-extrabold text-center text-gray-900 leading-tight mb-16">
          For Management:{' '}
          <span className="text-blue-600">Driving Strategic Growth</span>.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
