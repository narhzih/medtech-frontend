import DashboardLayout from "@/components/component/DashboardLayout";
import BookingCalendar from "@/components/layout/dashboard/BookingCalendar";
import QueueStatus from "@/components/layout/dashboard/QueueStatus";
import Appointments from "@/components/layout/dashboard/Appointments";
import BookSuggestions from "@/components/layout/dashboard/BookSuggestions";
import Notifications from "@/components/layout/dashboard/Notifications";
import QuickAction from "@/components/layout/dashboard/QuickAction";
import AppointmentTypeChart from "@/components/component/AppointmentTypeChart";
import PatientStatsChart from "@/components/component/PatientStatsChart";
import DailyAppointmentsChart from "@/components/component/DailyAppointmentsChart";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12 py-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <PatientStatsChart />
                    <AppointmentTypeChart />
                    <DailyAppointmentsChart />
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-8">
                        <BookingCalendar />
                        <QueueStatus />
                    </div>
                    <div className="space-y-8">
                        <Appointments />
                        <QuickAction />
                    </div>
                    <div className="space-y-8">
                        <Notifications />
                        <BookSuggestions />
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}
