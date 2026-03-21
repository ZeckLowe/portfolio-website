"use client";

import { useState, useEffect, useRef } from "react";

// ASCII Background Animation
export function AsciiBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const patterns = {
      matrix: "01",
      symbols: "∆◊○●□■◇◆★☆⚡",
      code: "{}[]<>/\\|=&#@",
      japanese: "アイウエオカキクケコ",
      arrows: "→←↑↓↗↘↙↖",
    };

    const allChars = Object.values(patterns).join("");
    const columns: {
      el: HTMLSpanElement;
      y: number;
      speed: number;
      char: string;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      const el = document.createElement("span");
      el.className =
        "absolute text-[10px] font-mono text-orange-400 select-none transition-all duration-1000";
      el.style.left = `${i * 2}%`;
      el.style.opacity = `${0.015 + Math.random() * 0.025}`;
      el.style.textShadow = "0 0 2px rgba(249, 115, 22, 0.3";
      containerRef.current?.appendChild(el);

      columns.push({
        el,
        y: Math.random() * 100,
        speed: 0.2 + Math.random() * 0.4,
        char: allChars[Math.floor(Math.random() * allChars.length)],
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      columns.forEach((col, i) => {
        col.y += col.speed;
        if (col.y > 105) {
          col.y = -5;
          col.char = allChars[Math.floor(Math.random() * allChars.length)];
        }

        col.el.style.transform = `translateY(${col.y}vh)`;
        col.el.textContent = col.char;

        if (frame % 20 === i % 20) {
          col.char = allChars[Math.floor(Math.random() * allChars.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-64 h-64 rounded-full transition-opacity duration-300"
      style={{
        left: position.x - 128,
        top: position.y - 128,
        background:
          "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0) 70%)",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
