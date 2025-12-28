import React, { useEffect, useRef } from 'react';

const CONFETTI_COUNT = 60;
const COLORS = ['#6dd5ed', '#b8c6db', '#fffbe7', '#f7b267', '#e0e7ef', '#f4845f'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Confetti({ trigger }) {
  const ref = useRef();

  useEffect(() => {
    if (!trigger) return;
    const confettiEls = ref.current.querySelectorAll('.confetti-piece');
    confettiEls.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = `translateY(0) rotate(0deg)`;
      const x = random(-40, 40);
      const y = random(60, 120);
      const r = random(-180, 180);
      const t = random(1.8, 2.7);
      setTimeout(() => {
        el.style.transition = `transform ${t}s cubic-bezier(.2,0,.2,1), opacity 0.7s`;
        el.style.transform = `translate(${x}vw, ${y}vh) rotate(${r}deg)`;
        el.style.opacity = 0;
      }, 30);
    });
  }, [trigger]);

  return (
    <div
      ref={ref}
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99,
      }}
    >
      {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            position: 'absolute',
            left: `${random(10, 90)}vw`,
            top: '-4vh',
            width: random(7, 14),
            height: random(14, 22),
            background: COLORS[i % COLORS.length],
            borderRadius: random(2, 7),
            opacity: 0,
            transform: 'translateY(0) rotate(0deg)',
            boxShadow: '0 1px 6px #23294622',
          }}
        />
      ))}
    </div>
  );
}
