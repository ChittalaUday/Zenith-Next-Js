"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "circle" | "square" | "triangle" | "blob";
}

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
  floatingElementsCount?: number;
}

export function ParticleBackground({
  className,
  particleCount = 50,
  floatingElementsCount = 8,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const floatingElementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    // Initialize floating elements
    const initFloatingElements = () => {
      floatingElementsRef.current = [];
      for (let i = 0; i < floatingElementsCount; i++) {
        floatingElementsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 40,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.1 + 0.05,
          type: ["circle", "square", "triangle", "blob"][Math.floor(Math.random() * 4)] as FloatingElement["type"],
        });
      }
    };

    initParticles();
    initFloatingElements();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw floating elements
      floatingElementsRef.current.forEach((element) => {
        element.rotation += element.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = element.opacity;
        ctx.translate(element.x, element.y);
        ctx.rotate((element.rotation * Math.PI) / 180);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.fillStyle = "transparent";

        switch (element.type) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, element.size / 2, 0, Math.PI * 2);
            ctx.stroke();
            break;

          case "square":
            ctx.strokeRect(-element.size / 2, -element.size / 2, element.size, element.size);
            break;

          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -element.size / 2);
            ctx.lineTo(-element.size / 2, element.size / 2);
            ctx.lineTo(element.size / 2, element.size / 2);
            ctx.closePath();
            ctx.stroke();
            break;

          case "blob":
            ctx.beginPath();
            const radius = element.size / 2;
            for (let i = 0; i < 8; i++) {
              const angle = (i / 8) * Math.PI * 2;
              const r = radius + Math.sin(angle * 3 + element.rotation * 0.01) * 10;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, floatingElementsCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-[-1]", className)}
    />
  );
}
