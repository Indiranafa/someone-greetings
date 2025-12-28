
import React from 'react';

export default function BirthdayWishSection() {

  return (
    <section
      id="birthday-wish-section"
      style={{
        minHeight: '40vh',
        width: '100%',
        background: 'none',
        color: '#e0e7ef',
        textAlign: 'center',
        padding: 'clamp(32px, 8vw, 80px) clamp(8px, 2vw, 24px)',
        boxSizing: 'border-box',
        borderTop: '1.5px solid #b8c6db33',
        zIndex: 2,
      }}
    >
      <h2 style={{
        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
        fontWeight: 700,
        marginBottom: 10,
        letterSpacing: '-0.5px',
        background: 'linear-gradient(90deg, #6dd5ed 0%, #b8c6db 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 8px #23294655)'
      }}>
        Pesan Hangat untuk Hari Bahagia
      </h2>
      <div style={{
        marginBottom: 22,
        color: '#e0e7efcc',
        fontSize: '1.13rem',
        fontWeight: 500,
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.7,
        fontStyle: 'italic',
      }}>
          "Selamat ulang tahun! Terima kasih sudah jadi inspirasi dan teman terbaik Indira. Semoga setiap langkahmu penuh berkah, kebahagiaan, dan cinta kasih tuhan. Untuk ibumu yang luar biasa, semoga selalu sehat, bahagia, dan bangga melihat Redafyn tumbuh menjadi pribadi yang hebat. Doa terbaikku selalu menyertai."
      </div>
      <div style={{
        marginTop: 18,
        color: '#b8c6db',
        fontSize: '1.05rem',
        fontStyle: 'normal',
      }}>
        15 Januari 2026
      </div>
    </section>
  );
}