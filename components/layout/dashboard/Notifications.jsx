
import React from 'react'
import Notify from "@/components/component/Notify"
import { Eye } from 'lucide-react';
function Notifications() {
  return (
    <div className="border min-h-full shadow-md p-5  space-y-5 ">
      <div className="space-y-5 ">
        <h1 className="text-2xl font-bold py-2">Recent Notifications</h1>

        <Notify
          text="Your Appointment with Dr.Smith on July 15 has been confirmed."
          duration="1 hour ago"
          icon={<Eye />}
        />
        <Notify
          text="Your Appointment with Dr.Smith on July 15 has been confirmed."
          duration="1 hour ago"
          icon={<Eye />}
        />
        <Notify
          text="Your Appointment with Dr.Smith on July 15 has been confirmed."
          duration="1 hour ago"
          icon={<Eye />}
        />
        <Notify
          text="Your Appointment with Dr.Smith on July 15 has been confirmed."
          duration="1 hour ago"
          icon={<Eye />}
        />
      </div>
    </div>
  );
}

export default Notifications;