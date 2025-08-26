'use client';
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const topCampaigns = [
  { campaign: "Lançamento Verão 2024", leads: 3450, conversion: "18%", roi: "3.2x" },
  { campaign: "Promoção de Fim de Ano", leads: 2100, conversion: "25%", roi: "4.1x" },
  { campaign: "Webinar de Marketing", leads: 1500, conversion: "35%", roi: "2.5x" },
  { campaign: "Black Friday", leads: 5200, conversion: "22%", roi: "5.5x" },
];

const channelPerformance = [
    { name: 'Google Ads', leads: 4000 },
    { name: 'Facebook', leads: 3000 },
    { name: 'Instagram', leads: 2000 },
    { name: 'LinkedIn', leads: 2780 },
    { name: 'E-mail', leads: 1890 },
];

export default function ReportsPage() {
  return (
    <>
      <PageHeader 
        title="Relatórios" 
        description="Fornecer relatórios resumidos do desempenho de suas campanhas."
        actions={
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        }
      />
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Campanhas com Melhor Desempenho</CardTitle>
            <CardDescription>
              Um resumo das campanhas que geraram os melhores resultados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campanha</TableHead>
                  <TableHead className="text-right">Leads Gerados</TableHead>
                  <TableHead className="text-right">Conversão</TableHead>
                  <TableHead className="text-right">ROI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCampaigns.map((c) => (
                  <TableRow key={c.campaign}>
                    <TableCell className="font-medium">{c.campaign}</TableCell>
                    <TableCell className="text-right">{c.leads}</TableCell>
                    <TableCell className="text-right">{c.conversion}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{c.roi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Canal</CardTitle>
            <CardDescription>
              Visualização da aquisição de leads por canal de marketing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={channelPerformance}>
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
                    <Bar dataKey="leads" fill="hsl(var(--accent))" name="Leads" />
                </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
