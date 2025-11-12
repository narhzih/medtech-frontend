import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Appointments() {
  const data = [
    { name: "Seyi Joan", time: "09:00 AM", type: "Check-up", status: "Confirmed" },
    { name: "Nifemi Product", time: "10:30 AM", type: "Follow-up", status: "Scheduled" },
    { name: "Lawrence Johnson", time: "11:00 AM", type: "Consultation", status: "Confirmed" },
    { name: "Wale Med", time: "02:00 PM", type: "Follow-up", status: "Scheduled" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>

      <CardContent>
       
        <div className="grid grid-cols-4 font-semibold text-sm text-gray-500 mb-2">
          <span>Patient</span>
          <span>Time</span>
          <span>Type</span>
          <span>Status</span>
        </div>

        
        {data.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-4 py-2 border-t text-sm items-center text-gray-700"
          >
            <span>{item.name}</span>
            <span>{item.time}</span>
            <span>{item.type}</span>
            <Badge
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                item.status === "Confirmed"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
