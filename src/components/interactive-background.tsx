
'use client';

import React from 'react';
import DotGrid from './ui/dot-grid';

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#2A2F45"
        activeColor="#FE4900"
        proximity={180}
        speedTrigger={100}
        shockRadius={250}
        shockStrength={5}
        maxSpeed={5000}
        resistance={750}
        returnDuration={4}
      />
    </div>
  );
}
