'use client';

import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import DashBtn from '@/components/component/DashBtn';

export default function BookingSection() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex flex-col border rounded-lg bg-white text-center p-5 min-h-[500px] shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Booking Calendar</h1>

       
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border shadow-sm"
            captionLayout="dropdown"
          />
       

        <div className="py-8">
          <DashBtn icon={CalendarIcon} text="View Daily Schedule" />
        </div>
      </div>
   
  );
}
