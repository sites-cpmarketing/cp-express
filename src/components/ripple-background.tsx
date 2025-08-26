
'use client';

import RippleGrid from './ui/ripple-grid';

export function RippleBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <RippleGrid
        enableRainbow={false}
        gridColor="#FE4900"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      />
    </div>
  );
}
