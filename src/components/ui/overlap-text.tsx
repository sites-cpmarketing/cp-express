"use client";

import React from 'react';

interface OverlapTextProps {
  children: string;
  type: 'front' | 'back' | 'alter';
}

export function OverlapText({ children, type }: OverlapTextProps) {
  return (
    <div overlap-text={type} className="font-bowlby">
      {children.split('').map((char, i) => (
        <span style={{ '--i': i } as React.CSSProperties} key={`${char}-${i}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
