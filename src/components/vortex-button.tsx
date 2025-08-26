"use client";

import React, { useRef, useEffect } from 'react';
import styles from './vortex-button.module.css';
import { LayoutDashboard, Users, BarChart3, Wallet, TrendingUp, Calendar, FileText, Settings, PenSquare, Mail, Megaphone, LineChart } from 'lucide-react';


export function VortexButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const easingActive = useRef(false);

  const easeOutQuad = (t: number) => t * (2 - t);

  const animateEasing = (
    startX: number, startY: number, 
    endX: number, endY: number, 
    duration: number
  ) => {
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentX = startX + (endX - startX) * easedProgress;
      const currentY = startY + (endY - startY) * easedProgress;
      
      if (containerRef.current) {
        containerRef.current.style.setProperty("--xv", `${currentY}`);
        containerRef.current.style.setProperty("--yv", `${-currentX}`);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        easingActive.current = false;
      }
    };
    
    easingActive.current = true;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    const ct = containerRef.current;
    if (!ct) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (easingActive.current) return;
      const rect = ct.getBoundingClientRect();
      const se = 42;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y / rect.height - 0.5) * se;
      const rotateY = (x / rect.width - 0.5) * se;
      
      const currentX = parseFloat(getComputedStyle(ct).getPropertyValue("--xv")) || 0;
      const currentY = parseFloat(getComputedStyle(ct).getPropertyValue("--yv")) || 0;
      
      animateEasing(currentY, currentX, rotateY, rotateX, 100);
    };

    const handleMouseLeave = () => {
      const currentX = parseFloat(getComputedStyle(ct).getPropertyValue("--xv")) || 0;
      const currentY = parseFloat(getComputedStyle(ct).getPropertyValue("--yv")) || 0;
      animateEasing(currentY, currentX, 0, 0, 200);
    };

    ct.addEventListener("mousemove", handleMouseMove);
    ct.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ct.removeEventListener("mousemove", handleMouseMove);
      ct.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);


  const icons = [
    { icon: <LayoutDashboard size={32} />, name: "Dashboard" },
    { icon: <TrendingUp size={32} />, name: "Analytics" },
    { icon: <Calendar size={32} />, name: "Calendar" },
    { icon: <PenSquare size={32} />, name: "Content" },
    { icon: <Mail size={32} />, name: "Email" },
    { icon: <Megaphone size={32} />, name: "Campaigns" },
  ];

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.vortex}>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 297.81">
          <ellipse cx="251.32" cy="130.01" rx="248.36" ry="125.82" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '2px'}} />
          <ellipse cx="251.73" cy="150.5" rx="160.66" ry="81.39" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '1.6px'}} />
          <ellipse cx="251.43" cy="186.57" rx="107.6" ry="54.51" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m123.45,22.63c52.05,62.7,97.93,131.45,114.34,213.52.41,2.05,1.23,5.33,1.23,5.33,4.92,18.85,7.79,35.66,10.88,54.9" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m248.86,4.6c2.05,97.95,6.15,194.67,9.31,291.95" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m35.75,67.71c6.15,2.05,11.89,5.33,17.62,8.61,21.31,13.11,40.16,24.59,59.84,40.16,33.61,26.23,56.97,49.59,82.38,84.02,2.46,3.28,6.97,10.25,8.61,13.52,18.03,26.23,31.15,52.46,37.22,82.46" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m5.42,127.55c19.35,2.86,38.36,7.77,56.78,14.33,18.57,6.62,36.53,14.92,53.8,24.41,17.83,9.79,34.96,20.69,50.32,34.09,13.95,12.16,26.41,26.36,36.86,41.65,10.26,14.99,18.58,31.3,24.51,48.48.74,2.15,1.45,4.31,2.11,6.49" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m33.29,190.66c47.95-12.7,102.05-4.51,143.85,27.46,27.05,20.49,45.9,47.54,56.53,78.63" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m137.39,241.48c11.89-12.7,29.1-22.54,46.31-19.26,36.07,5.74,50.82,43.44,61.11,73.93" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m458.7,61.16c-46.31,23.36-84.84,58.61-119.26,98.77-10.66,13.11-18.85,25.41-27.05,39.34-17.21,31.15-31.15,63.11-36.91,98.23" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m495.58,115.25c-42.21,8.61-80.74,25.82-117.62,52.05-31.97,22.13-58.2,46.72-75.41,81.15-.82.82-2.05,3.69-2.87,4.51-8.2,14.75-13.52,28.28-18.2,44.71" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m479.19,180.01c-18.21-1.09-36.54-.34-54.6,2.23-18.1,2.57-35.95,6.98-53.15,13.19-17.54,6.34-34.66,14.39-49.94,25.16-12.74,8.98-24.38,19.6-34.01,31.88-9.22,11.75-16.53,25.03-21.02,39.3-.57,1.8-1.09,3.61-1.56,5.44" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m384.93,236.57c-14.34-13.52-34.84-25-55.33-16.8-31.97,13.11-50,45.9-60.17,77.81" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="3.37" cy="127.14" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <path d="m378.37,21.81c-33.2,38.93-57.79,84.02-77.46,131.56-18.85,45.9-31.15,94.26-36.16,143.74" style={{fill: 'none', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="36.16" cy="67.3" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="33.7" cy="191.07" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="136.16" cy="242.71" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="384.52" cy="236.16" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="479.6" cy="180.42" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="497.63" cy="114.84" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="459.11" cy="60.75" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="377.96" cy="22.22" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="249.27" cy="3.37" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
          <circle cx="123.04" cy="22.22" r="2.87" style={{fill: '#fff', stroke: '#fff', strokeMiterlimit: 10}} />
        </svg>
      </div>

      <div className={styles.mist}></div>

      <div className={styles.orbs}>
        {icons.map((item, index) => (
          <div key={index} className={styles.orb}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.iconWrapper}>{item.icon}</div>
          </div>
        ))}
        <div className={styles.hideOrb}></div>
      </div>
      
      <div className={styles.tilt}>
        <span className={styles.tag}>CP Express</span>
        <h2>Acessar o <br /> Painel</h2>
        <p>Clique para gerenciar suas <span>campanhas e marketing</span>.</p>
      </div>
    </div>
  );
}
