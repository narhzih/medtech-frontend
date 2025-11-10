import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Status() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Status</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Current: <span className="w-full px-2 py-1 border rounded-2xl bg-blue-500 font-semibold text-white cursor-pointer">Available</span></p>
        <Button size="sm" variant="outline" className="bg-amber-50 hover:bg-blue-500 hover:text-white cursor-pointer">Change Status</Button>
      </CardContent>
    </Card>
  )
}
