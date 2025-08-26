"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { LayoutDashboard, Calendar, FileText, Bot, Mail, MessageSquare, BarChart2 } from 'lucide-react';
import { Logo } from '../logo';

const navItems = [
  { href: '/dashboard', label: 'Painel', icon: LayoutDashboard },
  { href: '/calendar', label: 'Calendário', icon: Calendar },
  { href: '/scheduler', label: 'Agendador', icon: MessageSquare },
  { href: '/reports', label: 'Relatórios', icon: BarChart2 },
];

const toolsItems = [
  { href: '/content-generator', label: 'Gerador de Conteúdo', icon: Bot },
  { href: '/forms', label: 'Formulários', icon: FileText },
  { href: '/templates', label: 'Modelos de E-mail', icon: Mail },
]

export function SidebarNav() {
  const pathname = usePathname();

  const isNavItemActive = (href: string) => {
    return pathname === href;
  }

  return (
    <>
      <SidebarHeader className="p-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isNavItemActive(item.href)}
                  tooltip={item.label}
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Ferramentas</SidebarGroupLabel>
          <SidebarMenu>
            {toolsItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isNavItemActive(item.href)}
                  tooltip={item.label}
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}
