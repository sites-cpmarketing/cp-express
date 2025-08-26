
"use client";

import { CardNav, type CardNavItem } from '@/components/ui/card-nav';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import ShinyText from '@/components/ui/shiny-text';
import { ChromaGrid } from '@/components/ui/chroma-grid';
import { LayoutDashboard, Calendar, Wand2 } from 'lucide-react';

const Home = () => {
  const items: CardNavItem[] = [
    {
      label: "Painel",
      bgColor: "#1A1A1D",
      textColor: "#fff",
      links: [
        { label: "Visão Geral", href: "/dashboard", ariaLabel: "Visão Geral do Painel" },
        { label: "Relatórios", href: "/reports", ariaLabel: "Relatórios de Desempenho" }
      ]
    },
    {
      label: "Ferramentas", 
      bgColor: "#2C2C34",
      textColor: "#fff",
      links: [
        { label: "Gerador de Conteúdo", href: "/content-generator", ariaLabel: "Gerador de Conteúdo com IA" },
        { label: "Calendário", href: "/calendar", ariaLabel: "Calendário de Marketing" }
      ]
    },
    {
      label: "Recursos",
      bgColor: "#4F4F5A", 
      textColor: "#fff",
      links: [
        { label: "Modelos de E-mail", href: "/templates", ariaLabel: "Modelos de E-mail" },
        { label: "Agendador", href: "/scheduler", ariaLabel: "Agendador de Postagens" }
      ]
    }
  ];

  const chromaItems = [
    {
      icon: <LayoutDashboard size={48} />,
      title: 'Dashboard de Métricas',
      subtitle: 'Visualize seus dados e performance.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
      url: '/dashboard',
    },
    {
      icon: <Calendar size={48} />,
      title: 'Calendário',
      subtitle: 'Planeje seus conteúdos e campanhas.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
      url: '/calendar',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 3',
      subtitle: 'Descrição da ferramenta 3.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 4',
      subtitle: 'Descrição da ferramenta 4.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
    },
    {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 5',
      subtitle: 'Descrição da ferramenta 5.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
    },
     {
      icon: <Wand2 size={48} />,
      title: 'Ferramenta 6',
      subtitle: 'Descrição da ferramenta 6.',
      borderColor: '#FF8C00',
      gradient: 'linear-gradient(145deg, #2D1A00, #000)',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
       <CardNav
        logo={<Logo />}
        items={items}
        ease="power3.out"
      />
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
              radius={150}
              columns={4}
            />
        </div>
      </main>
    </div>
  );
};

export default Home;
