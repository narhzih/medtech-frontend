import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function PatientQueue() {
  const queue = [
    { name: "james Olabisi", arrival: "08:45 AM", status: "In Consult", wait: "5 min" },
    { name: "Ini Gloria", arrival: "09:10 AM", status: "Waiting", wait: "10 min" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 font-semibold text-sm text-gray-500 mb-2">
          <span>Patient</span>
          <span>Arrival</span>
          <span>Status</span>
          <span>Wait</span>
        </div>
        {queue.map((p, i) => (
          <div key={i} className="grid grid-cols-4 py-2 border-t text-sm">
            <span>{p.name}</span>
            <span>{p.arrival}</span>
            <span>{p.status}</span>
            <span>{p.wait}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
