
'use client';

import React from 'react';
import DotGrid from './ui/dot-grid';

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <DotGrid
        dotSize={2}
        gap={25}
        baseColor="#360FC5"
        activeColor="#FE4900"
        proximity={80}
        speedTrigger={100}
        shockRadius={200}
        shockStrength={8}
        maxSpeed={5000}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
