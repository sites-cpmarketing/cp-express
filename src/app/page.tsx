import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black tracking-tighter animate-fade-in-down">Bem-vindo ao CP Express</h1>
        <p className="text-muted-foreground mt-2 text-lg">Sua plataforma de marketing integrada. Em breve, novas ferramentas.</p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/dashboard">Acessar Painel</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
