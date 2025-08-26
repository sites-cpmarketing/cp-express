import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { LayoutDashboard } from "lucide-react";
import { OverlapText } from "@/components/ui/overlap-text";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full p-8">
      <header className="mb-12 text-center">
        <OverlapText type="back">BEM VINDO CLIENTE EXPRESS</OverlapText>
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
