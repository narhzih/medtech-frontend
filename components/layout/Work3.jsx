import React from 'react'

import { Settings, DollarSign, ChartColumnBig } from 'lucide-react';
function Work3() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          For Administrators: Streamlining Operations.
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <Settings />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                User & Access Management
              </h2>
              <p className="leading-relaxed text-base">
                Manage user roles, permissions, and access levels for staff and
                patients efficiently. Ensure data security and compliance with
                customizable administrative controls.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <DollarSign />
            </div>

            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Integrated Billing & Claims
              </h2>
              <p className="leading-relaxed text-base">
                Simplify your billing processes with automated claims
                submission, payment tracking, and financial reporting. Reduce
                administrative burden and accelerate revenue cycles.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <ChartColumnBig />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Operational Reporting & Analytics
              </h2>
              <p className="leading-relaxed text-base">
                Generate comprehensive reports on clinic performance, patient
                demographics, and resource utilization. Gain insights to
                optimize workflows and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work3