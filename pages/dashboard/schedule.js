// /pages/dashboard/schedule.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppointments } from "@/context/AppointmentsContext";
import DashboardLayout from "@/components/component/DashboardLayout";

function toYYYYMMDD(date = new Date()) {
  return date.toISOString().split("T")[0];
}

// this logic is to convert "HH:MM" to minutes since midnight
const hhmmToMinutes = (hhmm) => {
  if (!hhmm) return 0;
  const [hh, mm] = hhmm.split(":").map(Number);
  return hh * 60 + mm;
};

// this logic is to format minutes to " min" or "H:mm"
const minutesToText = (m) => {
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${h}h ${mm}m`;
};

export default function Schedule() {
  const { appointments, cancelAppointment, updateAppointment, getTodaysQueueForDoctor } = useAppointments();

  const [editData, setEditData] = useState(null);
  const [now, setNow] = useState(Date.now());

  // this is live clock for countdowns using with useEffect this will update every 30s
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000 * 30); 
    return () => clearInterval(t);
  }, []);

  const todayStr = toYYYYMMDD();

  // this is to grouped appointments by doctor for today's queue 
  const doctorsMap = useMemo(() => {
    const map = {};
    for (const a of appointments) {
      if (a.date !== todayStr) continue;
      if (!map[a.doctor]) map[a.doctor] = [];
      map[a.doctor].push(a);
    }
    // sort each doctor's queue by time
    for (const d in map) {
      map[d].sort((x, y) => hhmmToMinutes(x.time) - hhmmToMinutes(y.time));
    }
    return map;
  }, [appointments, todayStr]);

  // this allow us to wait for estimated appointment for a particular time (per doctor queue)
  const estimateFor = (appt) => {
    if (!appt) return null;
    //this allow us to get today's pending queue for same doctor and group them together
    const q = getTodaysQueueForDoctor(appt.doctor, appt.date);
    const idx = q.findIndex(x => x.id === appt.id);
    if (idx === -1) return null;
    const waiting = q.slice(0, idx).reduce((s, x) => s + (x.duration ?? 15), 0);
    return { position: idx + 1, waitingMinutes: waiting, queueLength: q.length };
  };

  // live countdown until appointment start from current time 
  const minutesUntil = (appt) => {
    if (!appt) return null;
    const [hh, mm] = (appt.time || "00:00").split(":").map(Number);
    const parts = appt.date.split("-");
    const apptDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), hh, mm);
    const diff = Math.max(0, Math.round((apptDate.getTime() - now) / 60000));
    return diff;
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold">My Schedule</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(doctorsMap).length === 0 ? (
            <div className="p-4 rounded border">No appointments for today.</div>
          ) : Object.entries(doctorsMap).map(([doctor, list]) => {
            const pending = list.filter(a => a.status === "pending").length;
            const inProgress = list.filter(a => a.status === "in-progress").length;
            return (
              <div key={doctor} className="p-4 rounded border bg-white/70">
                <h3 className="font-semibold">{doctor}</h3>
                <p className="text-sm text-gray-600">{list.length} total — {pending} waiting • {inProgress} in-progress</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {list.slice(0, 3).map(it => (
                    <div key={it.id} className="text-xs px-2 py-1 rounded bg-gray-100">
                      {it.time} • {it.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-4">
          {appointments.length === 0 && (
            <div className="text-gray-500">No appointments created yet.</div>
          )}

          {appointments.map(appt => {
            const q = estimateFor(appt);
            const minutesToStart = minutesUntil(appt);
            return (
              <div key={appt.id} className="rounded-2xl border p-4 bg-white/80 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold">{appt.title}</h2>
                    <span className="text-sm text-gray-600">• {appt.doctor}</span>
                    <span className="text-sm px-2 py-1 rounded bg-gray-100">{appt.date} {appt.time}</span>
                    <span className={`text-xs px-2 py-1 rounded ${appt.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : appt.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : appt.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {appt.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-1">{appt.location} • {appt.phone}</p>

                  {appt.status === "pending" && appt.date === todayStr && q && (
                    <div className="mt-3 text-sm text-gray-700">
                      <div>Position in queue: <b>{q.position}</b> / {q.queueLength}</div>
                      <div>Estimated wait: <b>{minutesToText(q.waitingMinutes)}</b></div>
                      <div>Appointment starts in: <b>{minutesToStart === 0 ? "Now or past" : minutesToText(minutesToStart)}</b></div>
                    </div>
                  )}

                  {appt.status === "in-progress" && (
                    <div className="mt-3 text-sm text-blue-700">Your appointment is in progress.</div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <button onClick={() => {
                    if (confirm("Cancel this appointment?")) cancelAppointment(appt.id);
                  }} className="px-3 py-1 rounded bg-red-100 text-red-700">Cancel</button>

                  <button onClick={() => setEditData(appt)} className="px-3 py-1 rounded bg-blue-100 text-blue-700">Reschedule</button>

                  
                </div>
              </div>
            );
          })}
        </div>
        {editData && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[360px]">
              <h3 className="font-semibold text-lg mb-3">Reschedule</h3>

              <label className="block text-sm text-gray-700">Date</label>
              <input type="date" value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} className="border p-2 rounded w-full mb-3" />

              <label className="block text-sm text-gray-700">Time</label>
              <input type="time" value={editData.time} onChange={(e) => setEditData({ ...editData, time: e.target.value })} className="border p-2 rounded w-full mb-3" />

              <div className="flex justify-end gap-2 mt-4">
                <button className="px-3 py-1 rounded border" onClick={() => setEditData(null)}>Close</button>
                <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={() => {
                  updateAppointment(editData.id, { date: editData.date, time: editData.time, status: "pending" });
                  setEditData(null);
                }}>Save</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}
