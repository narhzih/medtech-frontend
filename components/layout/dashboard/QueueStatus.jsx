import React from 'react';
import Status from '../../component/Status';

function QueueStatus() {
  return (
    <div className="border rounded-2xl shadow-sm bg-white p-6  flex flex-col gap-5">
      <h1 className="text-2xl font-semibold text-gray-800 leading-snug">
        Digital Queue Status
      </h1>

      <div className="flex flex-col gap-4">
        <Status
          status="Active"
          time="15–20 min"
          heading="Cardiology Clinic"
          text="Waiting: 3 patients"
          bgColor="#166534"
          textColor="white"
        />
        <Status
          status="Active"
          time="15–20 min"
          heading="General Practice"
          text="Waiting: 7 patients"
          bgColor="#166534"
          textColor="white"
        />
        <Status
          status="Closed"
          time="—"
          heading="Lab Results"
          text="Waiting: 0 patients"
          bgColor="gray"
          textColor="white"
        />
      </div>
    </div>
  );
}

export default QueueStatus;
