import DashboardLayout from "@/components/component/DashboardLayout";
import { useEffect, useState } from "react";

const mockNotifications = [
    {
        id: 1,
        title: "Appointment Update",
        message: "Your appointment has been confirmed for tomorrow.",
        time: "2 hours ago",
        read: false,
        type: "info",
    },
    {
        id: 2,
        title: "Doctor Message",
        message: "Please come with your previous test results.",
        time: "1 day ago",
        read: true,
        type: "message",
    },
    {
        id: 3,
        title: "System Alert",
        message: "Clinic will be closed next Monday.",
        time: "3 days ago",
        read: false,
        type: "alert",
    },
];

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setNotifications(mockNotifications);
    }, []);

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notif) =>
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12 py-10 space-y-10">
                <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>

                <div className="space-y-5">
                    {notifications.length === 0 && (
                        <p className="text-gray-500">No notifications yet.</p>
                    )}

                    {notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={`border p-5 rounded-xl shadow-sm flex flex-col gap-2 transition-all ${notif.read ? "bg-gray-100 border-gray-200" : "bg-blue-50 border-blue-200"
                                }`}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">{notif.title}</h2>
                                {!notif.read && (
                                    <button
                                        onClick={() => markAsRead(notif.id)}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Mark as read
                                    </button>
                                )}
                            </div>

                            <p className="text-gray-700 text-sm">{notif.message}</p>

                            <span className="text-xs text-gray-500">{notif.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
