
"use client";

import { CardNav, type CardNavItem } from '@/components/ui/card-nav';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import ShinyText from '@/components/ui/shiny-text';
import MagicBento from '@/components/ui/magic-bento';

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
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
        </div>
      </main>
    </div>
  );
};

export default Home;
