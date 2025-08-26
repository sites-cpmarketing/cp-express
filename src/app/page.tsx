
"use client";

import { CardNav, type CardNavItem } from '@/components/ui/card-nav';
import { Logo } from '@/components/logo';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
       <div className="absolute inset-0 w-full h-full bg-black -z-10" />
      <CardNav
        logo={<Logo className="text-white" />}
        items={items}
        baseColor="#0D0716"
        menuColor="#fff"
        buttonBgColor="#FE4900"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <div className="text-center text-white p-8 mt-[200px] md:mt-0">
          <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            CP Express
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
            Sua plataforma de marketing integrada.
          </p>
      </div>
    </div>
  );
};

export default Home;
