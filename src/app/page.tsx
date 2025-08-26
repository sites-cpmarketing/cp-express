import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <BlurText
        text="BEM VINDO CLIENTE EXPRESS"
        delay={100}
        animateBy="letters"
        className="text-7xl font-black mb-8"
      />
      <Link href="/dashboard">
        <Button size="lg">
          Acessar o Painel
        </Button>
      </Link>
    </div>
  )
}
