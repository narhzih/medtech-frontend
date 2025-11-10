import Action from '@/components/component/Action'
import React from 'react'
import { CalendarDays, CirclePlus, MessageSquare, Pen } from 'lucide-react'
function QuickAction() {
  return (
    <div className="border flex flex-col items-center py-6">
      <h1 className="text-lg font-semibold mb-6">Quick Actions</h1>

      <div className="grid grid-cols-2 gap-6">
        <Action
          icon={<CirclePlus className="text-blue-500" />}
          text="Book New Appointment"
        />
        <Action
          icon={<CalendarDays className="text-blue-500" />}
          text="View Past Consultations"
        />
        <Action
          icon={<MessageSquare className="text-blue-500" />}
          text="Message Your Doctor"
        />
        <Action
          icon={<Pen className="text-blue-500" />}
          text="Manage Prescriptions"
        />
      </div>
    </div>
  );
}

export default QuickAction