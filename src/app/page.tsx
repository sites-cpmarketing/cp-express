import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LayoutDashboard, Calendar, MessageSquare, BarChart2, Bot, FileText, Mail } from 'lucide-react';

const features = [
  { href: '/dashboard', label: 'Painel', description: 'Visualize o desempenho da campanha.', icon: LayoutDashboard },
  { href: '/calendar', label: 'Calendário', description: 'Veja campanhas e atividades agendadas.', icon: Calendar },
  { href: '/scheduler', label: 'Agendador', description: 'Planeje e agende postagens sociais.', icon: MessageSquare },
  { href: '/reports', label: 'Relatórios', description: 'Fornece relatórios de desempenho.', icon: BarChart2 },
  { href: '/content-generator', label: 'Gerador de Conteúdo', description: 'Gere textos de marketing com IA.', icon: Bot },
  { href: '/forms', label: 'Formulários', description: 'Crie formulários para capturar leads.', icon: FileText },
  { href: '/templates', label: 'Modelos de E-mail', description: 'Use modelos de e-mail pré-desenhados.', icon: Mail },
];

export default function Home() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black tracking-tight">Bem-vindo ao CP Express</h1>
        <p className="text-muted-foreground mt-2">Sua plataforma de marketing integrada. Escolha uma ferramenta para começar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.href}>
            <Card className="hover:bg-card/60 hover:border-primary/50 transition-colors h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{feature.label}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
