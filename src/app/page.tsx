import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import ShinyText from '@/components/ui/shiny-text';
import { ChromaGrid } from '@/components/ui/chroma-grid';
import { LayoutDashboard, Calendar, Users, BotMessageSquare, Mail, Briefcase, FileText } from 'lucide-react';

export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const chromaItems = [
    {
      icon: <LayoutDashboard size={48} />,
      title: 'Visão Geral',
      subtitle: 'Visualize seus dados e performance.',
      url: '/dashboard',
    },
    {
      icon: <Calendar size={48} />,
      title: 'Calendário',
      subtitle: 'Planeje seus conteúdos e campanhas.',
      url: '/calendar',
    },
    {
      icon: <Users size={48} />,
      title: 'Base de Leads',
      subtitle: 'Crie e gerencie seus formulários.',
      url: '/forms',
    },
    {
      icon: <BotMessageSquare size={48} />,
      title: 'Gerador de Conteúdo',
      subtitle: 'Crie textos e posts com IA.',
      url: '/content-generator',
    },
    {
      icon: <Mail size={48} />,
      title: 'Modelos de E-mail',
      subtitle: 'Navegue por templates prontos.',
      url: '/templates',
    },
    {
      icon: <Briefcase size={48} />,
      title: 'Agendador',
      subtitle: 'Programe suas postagens sociais.',
      url: '/scheduler',
    },
    {
      icon: <FileText size={48} />,
      title: 'Relatórios',
      subtitle: 'Exporte relatórios de performance.',
      url: '/reports',
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center pt-24 px-4">
        <div className="text-center text-white mb-12">
            <ShinyText
              text="BEM VINDO CLIENTE"
              speed={5}
              className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-down font-headline"
              style={{ animationDelay: '0.2s' }}
            />
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
              Sua plataforma de marketing integrada.
            </p>
        </div>
        <div className="w-full max-w-5xl animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
            <ChromaGrid
              items={chromaItems}
              columns={4}
            />
        </div>
    </div>
  );
};
