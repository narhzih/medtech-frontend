import React from 'react';
import Action from '@/components/component/Action';
import { CalendarDays, CirclePlus, MessageSquare, Pen } from 'lucide-react';

function QuickAction() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800 text-center leading-snug">
        Quick Actions
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
        <Action
          icon={<CirclePlus size={20} className="text-blue-600" />}
          text="Book New Appointment"
        />
        <Action
          icon={<CalendarDays size={20} className="text-blue-600" />}
          text="View Past Consultations"
        />
        <Action
          icon={<MessageSquare size={20} className="text-blue-600" />}
          text="Message Your Doctor"
        />
        <Action
          icon={<Pen size={20} className="text-blue-600" />}
          text="Manage Prescriptions"
        />
      </div>
    </div>
  );
}

export default QuickAction;
