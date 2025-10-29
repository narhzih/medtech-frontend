'use client'

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function GreetingCard({
  name = "Dr. Seyi",
  date = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
}),
  appointments = 5,
  patients = 3,
  backgroundImage = "/",
}) {
  return (
    <Card className="relative overflow-hidden border-none shadow-sm bg-blue-50">
      
      <div className="absolute right-0 bottom-0 w-48 opacity-80 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="background image"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <CardHeader className="relative z-10">
        <p className="text-sm text-gray-500">{date}</p>
        <CardTitle className="text-2xl font-bold">Good Morning, {name}!</CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 text-gray-700">
        <p>
          You have <span className="font-semibold">{appointments}</span> upcoming appointments
          and <span className="font-semibold">{patients}</span> patients in queue.
        </p>
      </CardContent>
    </Card>
  )
}
