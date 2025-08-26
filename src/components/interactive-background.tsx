
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RIPPLE_SIZE = 50;

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const ripple = rippleRef.current;
    if (!container || !ripple) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left } = container.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;

      gsap.to(ripple, {
        x: x,
        y: y,
        width: RIPPLE_SIZE,
        height: RIPPLE_SIZE,
        ease: 'power4.out',
        duration: 0.5,
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(ripple, {
        width: 0,
        height: 0,
        ease: 'power4.out',
        duration: 0.5,
      });
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="ripple-grid-background">
      <div ref={rippleRef} className="ripple" />
    </div>
  );
}
