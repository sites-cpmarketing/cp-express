
"use client";

import ShinyText from '@/components/ui/shiny-text';
import { ChromaGrid } from '@/components/ui/chroma-grid';
import { LayoutDashboard, Calendar, Wand2, Users, BotMessageSquare } from 'lucide-react';
import { UserNav } from '@/components/layout/user-nav';

const Home = () => {
  const chromaItems = [
    {
      icon: <LayoutDashboard size={48} />,
      title: 'Dashboard de Métricas',
      subtitle: 'Visualize seus dados e performance.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
      url: '/dashboard',
    },
    {
      icon: <Calendar size={48} />,
      title: 'Calendário',
      subtitle: 'Planeje seus conteúdos e campanhas.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
      url: '/calendar',
    },
    {
      icon: <Users size={48} />,
      title: 'Formulários de Leads',
      subtitle: 'Crie e gerencie seus formulários.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
      url: '/forms',
    },
    {
      icon: <BotMessageSquare size={48} />,
      title: 'Gerador de Conteúdo',
      subtitle: 'Crie textos e posts com IA.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
      url: '/content-generator',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 5',
      subtitle: 'Descrição da ferramenta 5.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
    },
     {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 6',
      subtitle: 'Descrição da ferramenta 6.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 7',
      subtitle: 'Descrição da ferramenta 7.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 8',
      subtitle: 'Descrição da ferramenta 8.',
      gradient: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%), #000',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
       <header className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-end items-center">
        <UserNav />
       </header>
      <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
        <div className="text-center text-white mb-12">
            <ShinyText 
              text="BEM VINDO CLIENTE"
              speed={5}
              className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-down"
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
      </main>
    </div>
  );
};

export default Home;
