
'use client';

import RippleGrid from './ui/ripple-grid';

export function RippleBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <RippleGrid
        enableRainbow={false}
        gridColor="#FE4900"
        rippleIntensity={0}
        gridSize={30}
        gridThickness={22}
        fadeDistance={1.5}
        vignetteStrength={5}
        glowIntensity={1}
        opacity={0.35}
        gridRotation={0}
        mouseInteraction={true}
        mouseInteractionRadius={0.2}
        spotlightRadius={0.7}
      />
    </div>
  );
}
