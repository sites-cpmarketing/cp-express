import { PageHeader } from "@/components/page-header"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const activities = [
    { time: "09:00", title: "Post: Lançamento do Produto X", platform: "Instagram", type: "social"},
    { time: "11:30", title: "E-mail: Newsletter Semanal", platform: "Email", type: "email"},
    { time: "15:00", title: "Campanha: Anúncio de Verão", platform: "Facebook", type: "campaign"},
    { time: "18:00", title: "Post: Artigo de Blog sobre Tendências", platform: "LinkedIn", type: "social"},
]

function PlatformIcon({ platform }: { platform: string }) {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram className="h-4 w-4 text-muted-foreground" />
    case 'facebook':
      return <Facebook className="h-4 w-4 text-muted-foreground" />
    case 'linkedin':
      return <Linkedin className="h-4 w-4 text-muted-foreground" />
    case 'twitter':
      return <Twitter className="h-4 w-4 text-muted-foreground" />
    default:
      return null;
  }
}

export default function CalendarPage() {
  return (
    <>
      <PageHeader title="Calendário de Marketing" description="Exibir um calendário visual mostrando campanhas agendadas e atividades." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card>
                <CardContent className="p-0">
                    <Calendar
                        mode="single"
                        selected={new Date()}
                        className="w-full"
                    />
                </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Atividades para Hoje</CardTitle>
                    <CardDescription>24 de Julho de 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {activities.map((activity, index) => (
                            <li key={index}>
                                <div className="flex items-start gap-4">
                                    <div className="text-sm text-muted-foreground w-12 text-right pt-1">{activity.time}</div>
                                    <div className="flex-1 space-y-1">
                                      <div className="flex items-center justify-between">
                                        <p className="font-medium leading-none">{activity.title}</p>
                                        <PlatformIcon platform={activity.platform} />
                                      </div>
                                      <Badge variant={activity.type === 'campaign' ? "default" : "secondary"}>{activity.type === 'campaign' ? "Campanha" : activity.type === 'email' ? "E-mail" : "Post Social"}</Badge>
                                    </div>
                                </div>
                                {index < activities.length - 1 && <Separator className="mt-4" />}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  )
}
