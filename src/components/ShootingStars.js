import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 12;
const STAR_COLORS = ['#e0e7ef', '#b8c6db', '#6dd5ed', '#fffbe7'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ShootingStars() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let running = true;
    const stars = Array.from(container.children);

    function animateStar(star) {
      if (!running) return;
      const duration = random(2.5, 4.5);
      const delay = random(0, 3);
      const top = random(0, 80);
      const left = random(0, 100);
      const scale = random(0.7, 1.2);
      star.style.transition = 'none';
      star.style.opacity = 0;
      star.style.transform = `translate(0, 0) scale(${scale})`;
      star.style.top = `${top}vh`;
      star.style.left = `${left}vw`;
      setTimeout(() => {
        if (!running) return;
        star.style.transition = `transform ${duration}s linear, opacity 0.7s`;
        star.style.opacity = 1;
        star.style.transform = `translate(30vw, 30vh) scale(${scale})`;
        setTimeout(() => {
          star.style.opacity = 0;
          setTimeout(() => animateStar(star), 700);
        }, duration * 1000);
      }, delay * 1000);
    }

    stars.forEach(star => animateStar(star));
    return () => { running = false; };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 2,
            height: random(60, 90),
            background: `linear-gradient(90deg, ${STAR_COLORS[i % STAR_COLORS.length]} 0%, transparent 100%)`,
            borderRadius: 2,
            opacity: 0,
            boxShadow: '0 0 8px 2px #fffbe7cc',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
}
