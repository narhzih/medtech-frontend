import DashboardLayout from "@/components/component/DashboardLayout";
import BookingCalendar from "@/components/layout/dashboard/BookingCalendar";
import Button from "@/components/layout/Button";
import QueueStatus from "@/components/layout/dashboard/QueueStatus";
import Appointments from "@/components/layout/dashboard/Appointments";
import DashBtn from "@/components/component/DashBtn";
import { CalendarClock } from "lucide-react";
import BookSuggestions from "@/components/layout/dashboard/BookSuggestions";
import Notifications from "@/components/layout/dashboard/Notifications";
import QuickAction from "@/components/layout/dashboard/QuickAction";


export default function Dashboard() {
    return (
        <>
            <DashboardLayout>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    
                    <BookingCalendar />
                    <QueueStatus />
                    <Appointments />
                    <Notifications />
                    
                    <QuickAction />
                    <BookSuggestions />
                </div>

            </DashboardLayout>

        </>
    );
}
