"use client";

import LightRays from "./ui/light-rays";

export function BackgroundEffects() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#FE4900"
        raysSpeed={0.4}
        lightSpread={0.8}
        rayLength={1.0}
        pulsating={true}
        fadeDistance={0.8}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.05}
        distortion={0.05}
      />
    </div>
  );
}
