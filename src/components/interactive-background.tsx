'use client';

import React, { useState, useEffect } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    '--cursor-x': `${mousePosition.x}px`,
    '--cursor-y': `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    <div style={style} className="pointer-events-none fixed inset-0 z-[-1]">
      <div className="interactive-grid-background" />
      <div className="spotlight" />
    </div>
  );
}
