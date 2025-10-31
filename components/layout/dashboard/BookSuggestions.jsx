
import Suggest from '@/components/component/Suggest'
import React from 'react'

function BookSuggestions() {
  return (
    <div className="border min-h-full shadow-md p-5  space-y-5">
      <h1 className="text-2xl font-bold mb-5">
        Predictive Booking <br /> Suggestions
      </h1>
      <Suggest
        heading="Routine Blood Test"
        content="Due For your annual cholesterol and blood sugarcheck based on your last visit."
        btnText="Schedule Now"
      />
      <Suggest
        heading="Flu Shot Appointment"
        content="it's flu season! Protect yourself and schedule your annual flu vaccination."
        btnText="Schedule Now"
      />
      <Suggest
        heading="Dietitian Consultation"
        content="Continue your heathly eating plan with a follow-up session with our dietitain."
        btnText="Schedule Now"
      />
    </div>
  );
}

export default BookSuggestions