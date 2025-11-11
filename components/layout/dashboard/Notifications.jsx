import React from 'react';
import Notify from '@/components/component/Notify';
import { Eye } from 'lucide-react';

function Notifications() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Recent Notifications
      </h1>

      <div className="flex flex-col gap-4">
        <Notify
          text="Your appointment with Dr. Smith on July 15 has been confirmed."
          duration="1 hour ago"
          icon={<Eye size={18} className="text-blue-600" />}
        />
        <Notify
          text="Reminder: Your follow-up session with Sarah Johnson is tomorrow at 10:00 AM."
          duration="3 hours ago"
          icon={<Eye size={18} className="text-blue-600" />}
        />
        <Notify
          text="Lab results from your recent blood test are now available."
          duration="Yesterday"
          icon={<Eye size={18} className="text-blue-600" />}
        />
        <Notify
          text="Dietitian consultation rescheduled to August 25 at 9:00 AM."
          duration="2 days ago"
          icon={<Eye size={18} className="text-blue-600" />}
        />
      </div>
    </div>
  );
}

export default Notifications;
