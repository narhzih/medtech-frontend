import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export function DailyInsightsChart() {
  const data = [
    { name: "Check-ups", patients: 12 },
    { name: "Consults", patients: 8 },
    { name: "Follow-ups", patients: 5 },
    { name: "Procedures", patients: 3 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Patient Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}  margin={{ top: 10, right: 0, left: -30, bottom: 0 }} >
             <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: 7}}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
