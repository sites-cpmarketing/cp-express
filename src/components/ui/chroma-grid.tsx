
"use client";

import React from "react";
import { gsap } from "gsap";
import "./chroma-grid.css";

export interface ChromaItem {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  action?: () => void;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  columns = 3,
  rows = 2,
}) => {
  const data = items || [];

  const handleCardClick = (item: ChromaItem) => {
    if (item.action) {
      item.action();
    } else if (item.url) {
      window.location.href = item.url;
    }
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  };

  const handleCardLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget as HTMLElement;
    gsap.to(card, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1, 0.75)",
    });
  };

  return (
    <div
      className={`chroma-grid ${className}`}
      style={
        {
          "--cols": columns,
          "--rows": rows,
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          onClick={() => handleCardClick(c)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              "--spotlight-color": 'rgba(255, 255, 255, 0.2)',
              cursor: c.url || c.action ? "pointer" : "default",
            } as React.CSSProperties
          }
        >
          <footer className="chroma-info">
             <div className="chroma-icon-wrapper">
              {c.icon ? c.icon : c.image && <img src={c.image} alt={c.title} loading="lazy" />}
            </div>
            <h3 className="name">{c.title}</h3>
            <p className="role">{c.subtitle}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;