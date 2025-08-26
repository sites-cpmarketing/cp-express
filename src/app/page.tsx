import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
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
  )
}
