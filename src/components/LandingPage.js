// LandingPage.js
import React from 'react';


function LandingPage({ onScrollToContent }) {
  // Responsif: atur style berdasarkan lebar layar
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600);
  const nama = 'Redafyn Danu Mahardika!';
  const ucapan = 'Semoga tahun ini penuh kebahagiaan, petualangan, dan momen berkesan untukmu!';
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animasi fade-in dihapus sesuai permintaan
  return (
    <section
      style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        color: '#e0e7ef',
        textAlign: 'center',
        padding: isMobile ? '2.5rem 1rem' : '4.5rem 2.5rem',
        borderRadius: 0,
        margin: 0,
        maxWidth: '100vw',
        boxShadow: 'none',
        overflow: 'hidden',
        transition: 'background 0.6s',
      }}
    >
        <h1 style={{
          fontSize: 'clamp(1.7rem, 6vw, 3.4rem)',
          marginBottom: 18,
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: '#e0e7ef',
          textShadow: '0 4px 24px #23294699, 0 1px 0 #b8c6db',
          lineHeight: 1.13,
          background: 'linear-gradient(90deg, #e0e7ef 30%, #b8c6db 70%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 8px #23294655)'
        }}>
        Selamat Tahun Baru 2026,<br />
        <span style={{
          fontWeight: 900,
          background: 'linear-gradient(90deg, #6dd5ed 0%, #b8c6db 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1.5px',
          filter: 'drop-shadow(0 2px 8px #23294655)'
        }}>
          {nama}
        </span>
      </h1>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.35rem)',
          marginBottom: 'clamp(24px, 5vw, 38px)',
          maxWidth: 600,
          color: '#e0e7ef',
          textShadow: '0 1px 8px #23294688',
          fontWeight: 400,
          letterSpacing: '-0.2px',
          lineHeight: 1.6,
          marginLeft: 'auto',
          marginRight: 'auto',
          wordBreak: 'break-word',
        }}>
        {ucapan}
      </p>
      {/* Input dinamis dihapus sesuai permintaan */}
        <button
          onClick={onScrollToContent}
          style={{
            padding: 'clamp(8px, 2vw, 14px) clamp(24px, 8vw, 44px)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            borderRadius: 28,
            border: 'none',
            background: '#232946',
            color: '#e0e7ef',
            fontWeight: 600,
            boxShadow: '0 2px 12px #23294633',
            cursor: 'pointer',
            marginTop: 8,
            transition: 'background 0.2s',
            minWidth: 100,
            maxWidth: '90vw',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#313866'}
          onMouseOut={e => e.currentTarget.style.background = '#232946'}
        >
          Mulai
        </button>

    </section>
  );
}

export default LandingPage;
