
"use client";

import React, { useRef, useEffect } from "react";
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
  radius = 300,
  columns = 3,
  rows = 2,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const data = items || [];

  useEffect(() => {
    const grid = rootRef.current;
    if (!grid) return;

    const handleMouseMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const rect = grid.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      grid.style.setProperty("--x", `${x}px`);
      grid.style.setProperty("--y", `${y}px`);
    };
    
    grid.addEventListener("pointermove", handleMouseMove);

    return () => {
      grid.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);


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
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
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
          onClick={() => handleCardClick(c)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url || c.action ? "pointer" : "default",
            } as React.CSSProperties
          }
        >
          <div className="chroma-content-wrapper">
            <div className="chroma-icon-wrapper">
              {c.icon ? c.icon : c.image && <img src={c.image} alt={c.title} loading="lazy" />}
            </div>
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            <p className="role">{c.subtitle}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
