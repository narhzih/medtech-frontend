import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react"; 

export function TelemedicineSessions() {
  const sessions = [
    { name: "Meditech surgeons", time: "01:00 PM" },
    { name: "Dr. Adeolu-Joan", time: "04:00 PM" },
  ];

  return (
    <Card className="p-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base font-semibold text-gray-800">
          <Video className="h-4 w-4 text-gray-500" />
          Telemedicine Sessions
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sessions.map((s, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white"
            >
              <div>
                <p className="font-medium text-gray-800">{s.name}</p>
                <p className="text-sm text-gray-500">{s.time}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full flex items-center justify-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 bg-white cursor-pointer"
              >
                <Video className="h-4 w-4 text-blue-500" />
                Join Session
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
