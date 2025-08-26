
"use client";

import { CardNav, type CardNavItem } from '@/components/ui/card-nav';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ShinyText from '@/components/ui/shiny-text';

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
        baseColor="#0D0716"
        menuColor="#fff"
        buttonBgColor="#FE4900"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
        <div className="text-center text-white">
            <ShinyText 
              text="BEM VINDO CLIENTE"
              speed={5}
              className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-down"
              style={{ animationDelay: '0.2s' }}
            />
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-down mb-8" style={{ animationDelay: '0.4s' }}>
              Sua plataforma de marketing integrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/dashboard">
                  Dashboard de Métricas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/calendar">
                  Calendário de Conteúdo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
