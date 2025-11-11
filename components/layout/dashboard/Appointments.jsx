import React, { useState } from 'react';
import AppointmentCard from '@/components/component/AppointmentCard';
import DashBtn from '@/components/component/DashBtn';
import { CirclePlus } from 'lucide-react';

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      heading: 'July 15, 2024 at 10:00 AM follow-up with Dr Smith',
      text: 'Dr. Jane Smith',
      status: 'Completed',
    },
    {
      heading: 'August 20, 2024 at 9:00 AM consultation with Dr Adams',
      text: 'Dr. Adams',
      status: 'Completed',
    },
    {
      heading: 'August 10, 2024 at 9:00 AM Physical Therapy Session',
      text: 'Sarah Johnson',
      status: 'Pending',
    },
  ]);

  function handleAddTask() {
    const newAppointment = {
      heading: 'New Appointment',
      text: 'Dr. New',
      status: 'Pending',
    };

    setAppointments((prev) => [...prev, newAppointment]);
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-xl text-gray-900">
          Upcoming Appointments
        </h1>
      </div>

      <div className="space-y-4 mb-5">
        {appointments.map((appt, index) => (
          <AppointmentCard
            key={index}
            heading={appt.heading}
            text={appt.text}
            status={appt.status}
          />
        ))}
      </div>
      <DashBtn
        icon={CirclePlus}
        text="Add Appointment"
        onClick={handleAddTask}
      />
    </div>
  );
}

export default Appointments;
