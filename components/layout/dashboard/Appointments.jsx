import AppointmentCard from '@/components/component/AppointmentCard'
import React from 'react'
import DashBtn from '@/components/component/DashBtn';
import { CirclePlus } from 'lucide-react'
function Appointments() {
  return (
    <div>
      <div className="border  min-h-full shadow-md  ">
        <h1 className="font-bold text-2xl p-4">Upcoming Appointments</h1>
        <AppointmentCard
          heading="July 15, 2024 at 10:00 AM follow-up with Dr Smith"
          text="Dr.Jane Smith"
          status="Confirmed"
          bgColor="green"
          textColor="white"
        />
        <AppointmentCard
          heading="July 15, 2024 at 10:00 AM follow-up with Dr Smith"
          text="Dr.Jane Smith"
          status="Confirmed"
          bgColor="green"
          textColor="white"
        />
        <AppointmentCard
          heading="July 15, 2024 at 10:00 AM follow-up with Dr Smith"
          text="Dr.Jane Smith"
          status="Pending"
          bgColor="gray"
          textColor="white"
        />
        <div className='mt-5'>
          <DashBtn icon={CirclePlus} text="Add Task" />
        </div>
      </div>
    </div>
  );
}

export default Appointments

