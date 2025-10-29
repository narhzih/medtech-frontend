'use client'

import { GreetingCard } from "@/components/doctorDashboard/GreetingCard"
import { Appointments } from "@/components/doctorDashboard/Appointments"
import { PatientQueue } from "@/components/doctorDashboard/PatientQueue"
import { TelemedicineSessions } from "@/components/doctorDashboard/TelemedicineSessions"
import { Notifications } from "@/components/doctorDashboard/Notifications"
import { Status } from "@/components/doctorDashboard/Status"
import { DailyInsightsChart } from "@/components/doctorDashboard/DailyInsightsChart"
import { Sidebar } from "@/components/Bar"
import Topbar from "@/components/Topbar"


export default function doctorDashboard () {
  return (
     <main className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      <div className="w-full md:w-[25%] lg:w-[15%] bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Topbar/>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          
          
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <GreetingCard />
            <Appointments />
            <PatientQueue />
            <TelemedicineSessions />
          </div>

          <div className="space-y-6">
            <Notifications />
            <Status />
            <DailyInsightsChart />
          </div>
        </div>
      </div>
    </main>
  )
}




