
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/layout/user-nav';
import { InteractiveBackground } from '@/components/interactive-background';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Newspaper, Calendar, Settings, PencilRuler, BotMessageSquare, FileText, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Painel' },
  { href: '/content-generator', icon: BotMessageSquare, label: 'Gerador de Conteúdo' },
  { href: '/scheduler', icon: Calendar, label: 'Agendador' },
  { href: '/templates', icon: PencilRuler, label: 'Modelos' },
  { href: '/forms', icon: FileText, label: 'Formulários' },
  { href: '/calendar', icon: Share2, label: 'Calendário' },
  { href: '/reports', icon: Newspaper, label: 'Relatórios' },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <InteractiveBackground />
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                <span>Configurações</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6 lg:px-8">
            <SidebarTrigger className="md:hidden" />
            <div className="flex items-center gap-4 ml-auto">
                <UserNav />
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
