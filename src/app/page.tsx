import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-[calc(100vh-10rem)] p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">CP Express</h1>
        <p className="text-muted-foreground mt-2">Sua plataforma de marketing integrada.</p>
      </header>
      <div className="flex items-center justify-start">
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
