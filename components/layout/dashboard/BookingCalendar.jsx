"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import DashBtn from "@/components/component/DashBtn";
import { useRouter } from "next/navigation";

export default function BookingSection() {
  const [date, setDate] = React.useState(new Date());
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between border rounded-2xl bg-white text-center p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 tracking-tight">
        Booking Calendar
      </h1>

      <div className="w-full flex justify-center mb-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => d && setDate(d)}
          className="rounded-lg border shadow-sm p-4"
          captionLayout="dropdown"
        />
      </div>

      <div className="w-full mt-auto">
        <DashBtn
          icon={CalendarIcon}
          text="View Daily Schedule"
          onClick={() =>
            router.push(`/dashboard/schedule?date=${date.toISOString()}`)
          }
        />
      </div>
    </div>
  );
}
