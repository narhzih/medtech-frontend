import React from 'react'

import { ShieldCheck, Target, ChartNoAxesCombined } from 'lucide-react';
function Work4() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          For Management: Driving Strategic Growth.
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <ChartNoAxesCombined />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Strategic Performance Dashboards
              </h2>
              <p className="leading-relaxed text-base">
                Monitor key performance indicators (KPIs) with intuitive
                dashboards. Track organizational goals, identify trends, and
                make data-driven decisions to foster growth.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <Target />
            </div>

            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Resource Optimization & Planning
              </h2>
              <p className="leading-relaxed text-base">
                Optimize staffing, equipment, and facility resources with
                predictive analytics and scheduling tools. Enhance efficiency
                and reduce operational costs across your organization.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <ShieldCheck />
            </div>

            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Compliance & Audit Trail
              </h2>
              <p className="leading-relaxed text-base">
                Maintain regulatory compliance with built-in audit trails and
                comprehensive documentation features. Ensure adherence to
                healthcare standards and prepare for audits with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work4