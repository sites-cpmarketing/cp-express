
"use client";

import BlurText from "@/components/ui/blur-text";
import { useRouter } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <BlurText
        text="BEM VINDO CLIENTE EXPRESS"
        delay={100}
        animateBy="letters"
        className="text-7xl font-black mb-12"
      />
       <Button onClick={() => router.push('/dashboard')} size="lg">
          <LayoutDashboard className="mr-2" />
          Acessar o Painel
        </Button>
    </div>
  );
};

export default Home;
