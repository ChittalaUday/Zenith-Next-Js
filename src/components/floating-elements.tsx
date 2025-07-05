"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "circle" | "square" | "triangle" | "diamond";
  color: string;
}

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

export function FloatingElements({ className, count = 12 }: FloatingElementsProps) {
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Initialize floating elements
    elementsRef.current = [];
    for (let i = 0; i < count; i++) {
      elementsRef.current.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 80 + 40,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.08 + 0.02,
        type: ["circle", "square", "triangle", "diamond"][Math.floor(Math.random() * 4)] as FloatingElement["type"],
        color: ["primary", "secondary", "accent", "muted"][Math.floor(Math.random() * 4)],
      });
    }

    // Animation loop
    const animate = () => {
      elementsRef.current.forEach((element) => {
        element.rotation += element.rotationSpeed;
        
        // Slow drift movement
        element.x += Math.sin(element.rotation * 0.01) * 0.2;
        element.y += Math.cos(element.rotation * 0.01) * 0.2;

        // Wrap around screen
        if (element.x < -element.size) element.x = window.innerWidth + element.size;
        if (element.x > window.innerWidth + element.size) element.x = -element.size;
        if (element.y < -element.size) element.y = window.innerHeight + element.size;
        if (element.y > window.innerHeight + element.size) element.y = -element.size;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);

  const renderShape = (element: FloatingElement) => {
    const baseClasses = "absolute pointer-events-none transition-all duration-1000 border-2";
    const colorClasses = {
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      muted: "border-muted",
    };
    
    const style = {
      left: `${element.x}px`,
      top: `${element.y}px`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      transform: `rotate(${element.rotation}deg)`,
      opacity: element.opacity,
      backgroundColor: "transparent",
    };

    switch (element.type) {
      case "circle":
        return (
          <div
            key={element.id}
            className={cn(baseClasses, "rounded-full", colorClasses[element.color as keyof typeof colorClasses])}
            style={style}
          />
        );

      case "square":
        return (
          <div
            key={element.id}
            className={cn(baseClasses, "rounded-lg", colorClasses[element.color as keyof typeof colorClasses])}
            style={style}
          />
        );

      case "triangle":
        return (
          <div
            key={element.id}
            className={cn(baseClasses, "clip-triangle", colorClasses[element.color as keyof typeof colorClasses])}
            style={style}
          />
        );

      case "diamond":
        return (
          <div
            key={element.id}
            className={cn(baseClasses, "rotate-45 rounded-lg", colorClasses[element.color as keyof typeof colorClasses])}
            style={style}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn("fixed inset-0 pointer-events-none z-0", className)}>
      {elementsRef.current.map(renderShape)}
    </div>
  );
} 