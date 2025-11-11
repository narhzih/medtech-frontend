import React from 'react';
import FeatureCard from './FeatureCard';
import { Settings, DollarSign, ChartColumnBig } from 'lucide-react';

export default function AdminSection() {
  const features = [
    {
      badge: 'Admins',
      Icon: Settings,
      title: 'User & Access Management',
      description:
        'Manage user roles, permissions, and access levels for staff and patients efficiently. Ensure data security and compliance with customizable administrative controls.',
    },
    {
      badge: 'Admins',
      Icon: DollarSign,
      title: 'Integrated Billing & Claims',
      description:
        'Simplify your billing processes with automated claims submission, payment tracking, and financial reporting. Reduce administrative burden and accelerate revenue cycles.',
    },
    {
      badge: 'Admins',
      Icon: ChartColumnBig,
      title: 'Operational Reporting & Analytics',
      description:
        'Generate comprehensive reports on clinic performance, patient demographics, and resource utilization. Gain insights to optimize workflows and identify areas for improvement.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 font-inter">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-center text-gray-900 leading-tight mb-16">
          For Administrators:{' '}
          <span className="text-blue-600">Streamlining Operations</span>.
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
