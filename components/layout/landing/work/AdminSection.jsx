import React from 'react';
import FeatureCard from './FeatureCard';
import { Settings, DollarSign, ChartColumnBig } from 'lucide-react';

function AdminSection() {
  const features = [
    {
      badge: 'Admins',
      Icon: Settings,
      title: 'User & Access Management',
      description:  'Manage user roles, permissions, and access levels for staff and patients efficiently. Ensure data security and compliance with customizable administrative controls.',
    },
    {
      badge: 'Admins',
      Icon: DollarSign,
      title: 'Integrated Billing & Claims',
      description:  'Simplify your billing processes with automated claims submission, payment tracking, and financial reporting. Reduce administrative burden and accelerate revenue cycles.',
    },
    {
      badge: 'Admins',
      Icon: ChartColumnBig,
      title: 'Operational Reporting & Analytics',
      description: 'Generate comprehensive reports on clinic performance, patient demographics, and resource utilization. Gain insights to optimize workflows and identify areas for improvement.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 text-gray-600">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-16">
          For Administrators: Streamlining Operations.
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminSection;
