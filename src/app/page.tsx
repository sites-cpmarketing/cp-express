"use client";

import BlurText from "@/components/ui/blur-text";
import { ChromaGrid } from "@/components/ui/chroma-grid";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const dashboardItem = {
    image: "https://picsum.photos/seed/dashboard/300/300",
    title: "Acessar o Painel",
    subtitle: "Clique para começar",
    borderColor: "#360FC5",
    gradient: "linear-gradient(145deg, #360FC5, #000)",
    action: () => router.push('/dashboard'),
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <BlurText
        text="BEM VINDO CLIENTE EXPRESS"
        delay={100}
        animateBy="letters"
        className="text-7xl font-black mb-12"
      />
      <div style={{ height: '320px', width: '320px', position: 'relative' }}>
        <ChromaGrid 
          items={[dashboardItem]}
          radius={200}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          columns={1}
          rows={1}
        />
      </div>
    </div>
  );
};

export default Home;
