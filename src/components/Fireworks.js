// Fireworks.js
import React, { useEffect, useRef } from 'react';

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function Fireworks() {
  const canvasRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let fireworks = [];
    let particles = [];

    // Tambah variasi warna dan spawn lebih banyak
    function createFirework() {
      const x = randomBetween(width * 0.1, width * 0.9);
      const y = randomBetween(height * 0.08, height * 0.5);
      // Pilihan warna biru, ungu, pink, kuning, putih
      const colorList = [
        '#6dd5ed', '#2193b0', '#a18cd1', '#f7971e', '#ffd200', '#fff', '#ee9ca7', '#42275a', '#00c3ff', '#ffffcc'
      ];
      const color = colorList[Math.floor(Math.random() * colorList.length)];
      fireworks.push({ x, y, color, radius: 0, maxRadius: randomBetween(70, 140) });
    }

    function createParticles(firework) {
      // Partikel lebih banyak dan random
      const count = Math.floor(randomBetween(36, 60));
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = randomBetween(2, 6);
        particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: firework.color,
        });
      }
    }

    let lastFirework = 0;
    function animate(ts) {
      ctx.clearRect(0, 0, width, height);
      // Draw fireworks
      for (let i = fireworks.length - 1; i >= 0; i--) {
        let fw = fireworks[i];
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = fw.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.8;
        ctx.stroke();
        ctx.globalAlpha = 1;
        fw.radius += 3;
        if (fw.radius > fw.maxRadius) {
          createParticles(fw);
          fireworks.splice(i, 1);
        }
      }
      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gravity
        p.alpha -= 0.012;
        if (p.alpha <= 0) particles.splice(i, 1);
      }
      // Launch new fireworks more often (3-4x per detik)
      if (!lastFirework || ts - lastFirework > 350) {
        for (let i = 0; i < Math.floor(randomBetween(1, 3)); i++) {
          createFirework();
        }
        lastFirework = ts;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

export default Fireworks;
