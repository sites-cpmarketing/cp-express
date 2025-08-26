'use client';
import { BarChart, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const campaignData = [
  { name: 'Jan', leads: 400, conversion: 240 },
  { name: 'Fev', leads: 300, conversion: 139 },
  { name: 'Mar', leads: 200, conversion: 980 },
  { name: 'Abr', leads: 278, conversion: 390 },
  { name: 'Mai', leads: 189, conversion: 480 },
  { name: 'Jun', leads: 239, conversion: 380 },
  { name: 'Jul', leads: 349, conversion: 430 },
];

const roiData = [
  { name: 'Semana 1', roi: 1.2 },
  { name: 'Semana 2', roi: 1.5 },
  { name: 'Semana 3', roi: 1.3 },
  { name: 'Semana 4', roi: 1.8 },
  { name: 'Semana 5', roi: 2.1 },
  { name: 'Semana 6', roi: 2.5 },
];

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leads e Conversões</CardTitle>
            <CardDescription>Desempenho mensal de aquisição de leads e conversões.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                    contentStyle={{
                        background: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))"
                    }}
                />
                <Legend />
                <Bar dataKey="leads" fill="hsl(var(--primary))" name="Leads" />
                <Bar dataKey="conversion" fill="hsl(var(--accent))" name="Conversões" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Retorno Sobre Investimento (ROI)</CardTitle>
            <CardDescription>Acompanhe o ROI de suas campanhas ao longo do tempo.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                      background: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))"
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="roi" stroke="hsl(var(--primary))" name="ROI" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
