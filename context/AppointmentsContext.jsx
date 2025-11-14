'use client';

import { createContext, useContext, useState } from 'react';

const AppointmentsContext = createContext();

export function AppointmentsProvider({ children }) {
  const [appointments, setAppointments] = useState([]);

  // Add appointment
  const addAppointment = (data) => {
    const newAppt = {
      id: crypto.randomUUID(),
      status: 'pending',
      duration: data.duration ?? 15,
      ...data,
    };

    setAppointments((prev) => [...prev, newAppt]);
  };

  // This Logic is to cancel appointment
  const cancelAppointment = (id) =>
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'cancelled' } : a)),
    );

  // This Logic is to update appointment
  const updateAppointment = (id, data) =>
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...data, status: 'pending' } : a)),
    );

  
  const getTodaysQueueForDoctor = (doctor, dateStr) => {
    return appointments
      .filter(
        (a) =>
          a.doctor === doctor && a.date === dateStr && a.status === 'pending',
      )
      .sort(
        (a, b) =>
          parseInt(a.time.replace(':', '')) - parseInt(b.time.replace(':', '')),
      );
  };

  const getQueueInfo = (id) => {
    const appt = appointments.find((a) => a.id === id);
    if (!appt) return null;

    const queue = getTodaysQueueForDoctor(appt.doctor, appt.date);
    const idx = queue.findIndex((x) => x.id === id);

    if (idx === -1) return null;

    const waiting = queue
      .slice(0, idx)
      .reduce((sum, x) => sum + (x.duration ?? 15), 0);

    return {
      position: idx + 1,
      waitingMinutes: waiting,
      queueLength: queue.length,
    };
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
        cancelAppointment,
        updateAppointment,
        getQueueInfo,
        getTodaysQueueForDoctor,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export const useAppointments = () => useContext(AppointmentsContext);
