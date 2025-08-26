import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full p-8">
      <header className="mb-12 text-center">
        <h1 className="text-7xl font-black tracking-tight text-white animate-fade-in-down">Bem-vindo</h1>
      </header>
      <div className="flex items-center justify-center">
        <Link href="/dashboard">
          <ToolCard 
            color="blue"
            title="Visão Geral"
            description="Acessar o painel"
            progress={0}
            icon={<LayoutDashboard />}
          />
        </Link>
      </div>
    </div>
  )
}
