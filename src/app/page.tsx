import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h1 className="text-6xl font-bold mb-8">
        BEM VINDO CLIENTE EXPRESS
      </h1>
      <Link href="/dashboard">
        <Button size="lg">
          Acessar o Painel
        </Button>
      </Link>
    </div>
  )
}
