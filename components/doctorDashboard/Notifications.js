import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Notifications() {
  const notifications = [
    "New message from Dr. Joan",
    "Patient Nifemi has checked in",
    "Urgent: Telemedicine session with Dr. Adeolu-Joan starts soon"
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {notifications.map((n, i) => (
            <li key={i} className="border-b pb-2">{n}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
