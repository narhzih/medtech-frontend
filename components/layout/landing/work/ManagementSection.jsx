import React from 'react';
import { ShieldCheck, Target, ChartNoAxesCombined } from 'lucide-react';
import FeatureCard from './FeatureCard';

function ManagementSection() {
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
    <section className="text-gray-600 body-font bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-12">
          For Management: Driving Strategic Growth.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManagementSection;
