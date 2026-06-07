'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { useUiStore } from '@/store/ui-store';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  alpha: number;
  hue: 'sand' | 'copper';
}

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: Math.min(120, Math.floor(width / 13)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.6,
    speed: Math.random() * 0.28 + 0.08,
    drift: Math.random() * 0.55 - 0.22,
    alpha: Math.random() * 0.34 + 0.12,
    hue: Math.random() > 0.76 ? 'copper' : 'sand'
  }));
}

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useUiStore((state) => state.prefersReducedMotion);
  useReducedMotionPreference();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = createParticles(innerWidth, innerHeight);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      const rayGradient = context.createLinearGradient(width * 0.1, 0, width * 0.68, height);
      rayGradient.addColorStop(0, 'rgba(247, 245, 240, 0.18)');
      rayGradient.addColorStop(0.42, 'rgba(232, 221, 203, 0.08)');
      rayGradient.addColorStop(1, 'rgba(168, 121, 69, 0)');
      context.fillStyle = rayGradient;
      context.beginPath();
      context.moveTo(width * 0.06, 0);
      context.lineTo(width * 0.28, 0);
      context.lineTo(width * 0.63, height);
      context.lineTo(width * 0.4, height);
      context.closePath();
      context.fill();

      for (let trail = 0; trail < 4; trail += 1) {
        const y = height * (0.18 + trail * 0.18) + Math.sin(frame * 0.01 + trail) * 18;
        const gradient = context.createLinearGradient(0, y, width, y + 70);
        gradient.addColorStop(0, 'rgba(232, 221, 203, 0)');
        gradient.addColorStop(0.5, 'rgba(232, 221, 203, 0.055)');
        gradient.addColorStop(1, 'rgba(232, 221, 203, 0)');
        context.strokeStyle = gradient;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(width * -0.05, y);
        context.bezierCurveTo(width * 0.25, y - 42, width * 0.55, y + 54, width * 1.05, y - 12);
        context.stroke();
      }

      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.x += particle.drift + Math.sin((frame + particle.y) * 0.01) * 0.12;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        context.beginPath();
        context.fillStyle =
          particle.hue === 'copper'
            ? `rgba(168, 121, 69, ${particle.alpha})`
            : `rgba(247, 245, 240, ${particle.alpha})`;
        context.shadowColor =
          particle.hue === 'copper' ? 'rgba(168, 121, 69, 0.5)' : 'rgba(247, 245, 240, 0.45)';
        context.shadowBlur = 12;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      });

      frame += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 h-full w-full" aria-hidden="true" />;
}
