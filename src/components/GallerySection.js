import React from 'react';

const images = [
  '/assets/images/1.jpeg',
  '/assets/images/2.jpeg',
  '/assets/images/3.jpeg',
  '/assets/images/4.jpeg',
  '/assets/images/5.jpeg',
  '/assets/images/6.jpeg',
  '/assets/images/7.jpeg',
  '/assets/images/8.jpeg',
  '/assets/images/9.jpeg',
  '/assets/images/10.jpeg',
  '/assets/images/11.jpeg',
  '/assets/images/12.jpeg',
];

export default function GallerySection() {
  return (
    <section
      id="gallery-section"
      style={{
        minHeight: '60vh',
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
      {/* Judul kecil dihapus sesuai permintaan */}
      <h2 style={{
        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
        fontWeight: 700,
        marginBottom: 10,
        letterSpacing: '-0.5px',
        background: 'linear-gradient(90deg, #b8c6db 0%, #6dd5ed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 8px #23294655)'
      }}>
        Galeri Kenangan Tahun Lalu
      </h2>
      <div style={{
        marginBottom: 22,
        color: '#e0e7efcc',
        fontSize: '1.08rem',
        fontWeight: 400,
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.5,
      }}>
        Setiap foto adalah cerita, tawa, dan momen berharga yang mewarnai perjalanan tahun lalu. Semoga kenangan ini menjadi penyemangat untuk melangkah ke tahun yang baru.
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '14px',
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {images.map((src, idx) => (
          <FadeInDiv key={src} delay={idx * 80}>
            <img
              src={src}
              alt={`Kenangan ${idx + 1}`}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                display: 'block',
                borderRadius: 12,
                boxShadow: '0 1px 8px #23294622',
                transition: 'transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)',
                cursor: 'pointer',
              }}
              className="gallery-img"
              loading="lazy"
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.07)';
                e.currentTarget.style.boxShadow = '0 6px 32px #6dd5ed55';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 1px 8px #23294622';
              }}
            />
          </FadeInDiv>
        ))}
      </div>
    </section>
  );
}

// Komponen animasi fade-in
function FadeInDiv({ children, delay = 0 }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = 0;
      ref.current.style.transform = 'translateY(24px)';
      setTimeout(() => {
        ref.current.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
        ref.current.style.opacity = 1;
        ref.current.style.transform = 'translateY(0)';
      }, delay);
    }
  }, [delay]);
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(24px)' }}>
      {children}
    </div>
  );
}