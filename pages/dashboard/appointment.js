// /pages/dashboard/appointment.js
"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { useAppointments } from "@/context/AppointmentsContext";
import DashboardLayout from "@/components/component/DashboardLayout";

export default function AppointmentPage() {
    const router = useRouter();
    const { addAppointment } = useAppointments();

    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [title, setTitle] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [duration, setDuration] = useState(15);

    const bookAppointment = () => {
        if (!doctor || !date || !time) {
            alert("Please fill at least doctor, date and time");
            return;
        }
        addAppointment({ doctor, date, time, title, specialty, location, phone, duration });
        // redirect to schedule
        router.push("/dashboard/schedule");
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-4xl space-y-6">
                <h1 className="text-2xl font-bold">Book Appointment</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input value={doctor} onChange={e => setDoctor(e.target.value)} className="border p-3 rounded" placeholder="Doctor (e.g. Dr. Smith)" />
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-3 rounded" />
                    <input type="time" value={time} onChange={e => setTime(e.target.value)} className="border p-3 rounded" />
                    <input value={title} onChange={e => setTitle(e.target.value)} className="border p-3 rounded" placeholder="Title (e.g. Checkup)" />
                    <input value={specialty} onChange={e => setSpecialty(e.target.value)} className="border p-3 rounded" placeholder="Specialty" />
                    <input value={location} onChange={e => setLocation(e.target.value)} className="border p-3 rounded" placeholder="Location" />
                    <input value={phone} onChange={e => setPhone(e.target.value)} className="border p-3 rounded" placeholder="Phone" />
                    <input type="number" min={5} step={5} value={duration} onChange={e => setDuration(Number(e.target.value))} className="border p-3 rounded" placeholder="Duration (mins)" />
                </div>

                <div className="flex gap-2">
                    <button onClick={bookAppointment} className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
                    <button onClick={() => router.push("/dashboard/schedule")} className="px-4 py-2 rounded border">Go to Schedule</button>
                </div>
            </div>
        </DashboardLayout>
    );
}
