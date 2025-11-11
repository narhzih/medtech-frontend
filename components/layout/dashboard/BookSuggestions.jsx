import Suggest from '@/components/component/Suggest';
import React from 'react';

function BookSuggestions() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6  flex flex-col gap-5">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Predictive Booking <br /> Suggestions
      </h1>

      <div className="flex flex-col gap-4">
        <Suggest
          heading="Routine Blood Test"
          content="You're due for your annual cholesterol and blood sugar check based on your last visit."
          btnText="Schedule Now"
        />
        <Suggest
          heading="Flu Shot Appointment"
          content="It's flu season! Protect yourself by scheduling your annual flu vaccination."
          btnText="Schedule Now"
        />
        <Suggest
          heading="Dietitian Consultation"
          content="Continue your healthy eating plan with a follow-up session with our dietitian."
          btnText="Schedule Now"
        />
      </div>
    </div>
  );
}

export default BookSuggestions;
