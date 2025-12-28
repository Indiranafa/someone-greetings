import React from 'react';

export default function NewYearWish() {
  return (
    <section
      id="newyear-wish-section"
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(35,41,70,0.85)',
        color: '#e0e7ef',
        textAlign: 'center',
        padding: 'clamp(32px, 8vw, 80px) clamp(12px, 4vw, 32px)',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100vw',
        borderTop: '1.5px solid #b8c6db33',
        zIndex: 2,
      }}
    >
      <h2 style={{
        fontSize: 'clamp(1.3rem, 4vw, 2.2rem)',
        fontWeight: 700,
        marginBottom: 18,
        letterSpacing: '-0.5px',
        background: 'linear-gradient(90deg, #b8c6db 0%, #6dd5ed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 8px #23294655)'
      }}>
        Harapan & Doa Tahun 2026
      </h2>
      <p style={{
        fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
        maxWidth: 600,
        margin: '0 auto 18px auto',
        color: '#e0e7ef',
        textShadow: '0 1px 8px #23294688',
        fontWeight: 400,
        lineHeight: 1.7,
      }}>
        Semoga di tahun yang baru ini, setiap langkahmu dipenuhi keberanian, setiap harapanmu mendapat jalan, dan setiap doamu dikabulkan. Jadikan setiap momen berarti, teruslah tumbuh, dan jangan pernah berhenti bermimpi. Selamat menjemput masa depan yang lebih cerah!
      </p>
      <div style={{
        marginTop: 18,
        fontSize: '1.1rem',
        color: '#b8c6db',
        fontStyle: 'italic',
      }}>
        "Tahun baru, semangat baru, harapan baru."
      </div>
    </section>
  );
}