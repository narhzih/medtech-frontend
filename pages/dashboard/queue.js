"use client";

import DashboardLayout from "@/components/component/DashboardLayout";
import { useAppointments } from "@/context/AppointmentsContext";
import { useMemo } from "react";

export default function Queue() {
    const { appointments } = useAppointments();

    const today = new Date().toISOString().split("T")[0];

    const activeQueue = useMemo(() => {
        return appointments
            .filter((a) => a.status === "pending" && a.date === today)
            .sort((a, b) => new Date(`2000-01-01 ${a.time}`) - new Date(`2000-01-01 ${b.time}`));
    }, [appointments, today]);

    const APPOINTMENT_DURATION = 15; // minutes per appointment

    const getQueueInfo = (id) => {
        const index = activeQueue.findIndex((item) => item.id === id);
        const position = index + 1;
        const waitingMinutes = index * APPOINTMENT_DURATION;
        return { position, waitingMinutes };
    };

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12 py-10 space-y-10">

                {/* HEADLINE */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Queue Status</h1>
                    <p className="text-gray-500 mt-1">Track today’s active appointment queue</p>
                </div>

                {/* QUEUE SUMMARY CARD */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-3 text-blue-900">Today s Queue Overview</h2>

                    <div className="flex flex-wrap gap-6 text-gray-700">
                        <p className="text-lg">
                            Total Patients in Queue:{" "}
                            <span className="font-bold">{activeQueue.length}</span>
                        </p>

                        <p className="text-lg">
                            Estimated Time Per Patient:{" "}
                            <span className="font-bold">{APPOINTMENT_DURATION} mins</span>
                        </p>

                        {activeQueue.length > 0 && (
                            <p className="text-lg">
                                Next Patient:{" "}
                                <span className="font-bold">{activeQueue[0].title}</span>
                            </p>
                        )}
                    </div>
                </div>

                {/* NO QUEUE */}
                {activeQueue.length === 0 && (
                    <p className="text-center text-gray-500 text-lg mt-10">
                        No pending appointments today.
                    </p>
                )}

                {/* QUEUE LIST */}
                <div className="space-y-6">
                    {activeQueue.map((appt, index) => {
                        const { position, waitingMinutes } = getQueueInfo(appt.id);

                        return (
                            <div
                                key={appt.id}
                                className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg">{appt.title}</h3>
                                        <p className="text-gray-600">{appt.doctor}</p>
                                        <p className="text-gray-600">{appt.specialty}</p>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Appointment Time: {appt.time}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Position in Queue:{" "}
                                            <span className="font-semibold text-blue-600">{position}</span>
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Estimated Wait:{" "}
                                            <span className="font-semibold text-blue-600">
                                                {waitingMinutes} minutes
                                            </span>
                                        </p>
                                    </div>

                                    {/* BADGE */}
                                    {index === 0 ? (
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                                            Now Serving
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-semibold">
                                            Waiting
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
}
