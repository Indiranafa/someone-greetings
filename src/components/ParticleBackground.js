// ParticleBackground.js
import React, { useEffect, useRef } from 'react';

const colors = ['#6dd5ed', '#a18cd1', '#eebbc3', '#fff', '#232946'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

function createParticle(canvas, ctx) {
  const size = randomBetween(2, 5);
  return {
    x: randomBetween(0, canvas.width),
    y: randomBetween(0, canvas.height),
    vx: randomBetween(-0.3, 0.3),
    vy: randomBetween(-0.2, 0.2),
    size,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: randomBetween(0.3, 0.7),
  };
}

const ParticleBackground = () => {
  const canvasRef = useRef();
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    particles.current = Array.from({ length: 38 }, () => createParticle(canvas, ctx));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Move
        p.x += p.vx;
        p.y += p.vy;
        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
