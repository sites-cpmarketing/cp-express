import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export default function CalendarPage() {
  return (
    <div className="flex justify-center items-start h-full pt-8">
        <Card className="w-full max-w-2xl">
            <CardContent className="p-0">
                <Calendar
                    mode="single"
                    selected={new Date()}
                    className="w-full"
                />
            </CardContent>
        </Card>
    </div>
  )
}
