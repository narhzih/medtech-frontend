

import React from 'react'
import Status from '../../component/Status';

function QueueStatus() {
  return (
    <div className="border  min-h-full shadow-md  ">
      <h1 className="font-bold text-2xl p-4">Digital Queue Status</h1>
      <Status
        status="active"
        time="15-20 min"
        heading="Cardiology Clinic"
        text="Waiting: 3 patients"
        bgColor="#166534"
        textColor="white"
      />
      <Status
        status="active"
        time="15-20 min"
        heading="General Practice"
        text="Waiting: 7 patients"
        bgColor="#166534"
        textColor="white"
      />
      <Status
        status="Closed"
        time="15-20 min"
        heading="Lab Results"
        text="Waiting: 0 patients"
        bgColor="gray"
        textColor="white"
      />
    </div>
  );
}

export default QueueStatus