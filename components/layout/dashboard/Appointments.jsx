import React, { useState } from 'react';
import AppointmentCard from '@/components/component/AppointmentCard';
import DashBtn from '@/components/component/DashBtn';
import { CirclePlus } from 'lucide-react';

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      heading: 'July 15, 2024 at 10:00 AM follow-up with Dr Smith',
      text: 'Dr. Jane Smith',
      status: 'Confirmed',
      bgColor: 'green',
      textColor: 'white',
    },
    {
      heading: 'August 20, 2024 at 9:00 AM consultation with Dr Adams',
      text: 'Dr. Adams',
      status: 'Confirmed',
      bgColor: 'green',
      textColor: 'white',
    },
    {
      heading: 'August 10, 2024 at 9:00 AM Physical Therapy Session',
      text: 'Sarah Johnson',
      status: 'pending',
      bgColor: 'gray',
      textColor: 'white',
    },
  ]);

  function handleAddTask() {
     console.log('btn clicked');
    const newTask = {
      heading: 'New Appointment',
      text: 'Dr. New',
      status: 'Pending',
      bgColor: 'gray',
      textColor: 'white',
    };
    setAppointments([...appointments, newTask]);
   
  }

  return (
    <div className="border min-h-full shadow-md">
      <h1 className="font-bold text-2xl p-4">Upcoming Appointments</h1>

      {appointments.map((appt, index) => (
        <AppointmentCard
          key={index}
          heading={appt.heading}
          text={appt.text}
          status={appt.status}
          bgColor={appt.bgColor}
          textColor={appt.textColor}
        />
      ))}

      <div className="mt-5">
        <DashBtn icon={CirclePlus} text="Add Task" onClick={handleAddTask} />
      </div>
    </div>
  );
}

export default Appointments;
