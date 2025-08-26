"use client";

import BlurText from "@/components/ui/blur-text";
import TiltedCard from "@/components/ui/tilted-card";
import { useRouter } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

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
      <div onClick={() => router.push('/dashboard')} style={{ cursor: 'pointer' }}>
        <TiltedCard
          icon={<LayoutDashboard size={80} color="white" />}
          captionText="Acessar o Painel"
          containerHeight="300px"
          containerWidth="300px"
          scaleOnHover={1.1}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="flex flex-col items-center justify-center h-full text-white p-4">
              <h3 className="text-2xl font-bold">Acessar o Painel</h3>
              <p className="text-sm mt-2">Clique para começar</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Home;
