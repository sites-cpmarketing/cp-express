
"use client";

import BlurText from "@/components/ui/blur-text";
import TiltedCard from "@/components/ui/tilted-card";
import { useRouter } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start h-full p-8 text-center">
      <BlurText
        text="BEM VINDO CLIENTE EXPRESS"
        delay={100}
        animateBy="letters"
        className="text-7xl font-black mb-12"
      />
      <div className="flex flex-wrap justify-center lg:justify-start gap-8 w-full max-w-6xl">
        <div onClick={() => router.push('/dashboard')} style={{ cursor: 'pointer' }}>
          <TiltedCard
            icon={<LayoutDashboard size={64} color="white" />}
            containerHeight="200px"
            containerWidth="200px"
            scaleOnHover={1.1}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex flex-col items-center justify-center h-full text-white p-4">
                <h3 className="text-xl font-bold tilted-card-title">Acessar o Painel</h3>
              </div>
            }
          />
        </div>
        {/* Adicione mais ferramentas aqui */}
      </div>
    </div>
  );
};

export default Home;
