

import React from 'react';
import './styles/main.css';
import LandingPage from './components/LandingPage';
import ParticleBackground from './components/ParticleBackground';
import Fireworks from './components/Fireworks';
import NewYearWish from './components/NewYearWish';
import GallerySection from './components/GallerySection';
import PlaylistSection from './components/PlaylistSection';
import BirthdayWishSection from './components/BirthdayWishSection';

function App() {
  // Scroll ke section berikutnya dengan efek interaktif
  const handleScrollToContent = () => {
    const nextSection = document.getElementById('newyear-wish-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      // Efek highlight dan bounce
      nextSection.classList.add('section-highlight');
      setTimeout(() => {
        nextSection.classList.remove('section-highlight');
      }, 700);
    }
  };
  return (
    <div className="App" style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      <ParticleBackground />
      <Fireworks />
      <LandingPage onScrollToContent={handleScrollToContent} />
      <NewYearWish />
      <GallerySection />
      <PlaylistSection />
      <BirthdayWishSection />
      <div style={{textAlign: 'center', color: '#b8c6db', fontSize: '1.2rem', marginTop: 16}}>
        ~and done~
      </div>
      <footer style={{
        width: '100%',
        textAlign: 'center',
        padding: '18px 0 12px 0',
        color: '#b8c6db',
        fontSize: '1rem',
        background: 'none',
        borderTop: '1.5px solid #b8c6db22',
        letterSpacing: '0.2px',
        marginTop: 24,
        zIndex: 1,
      }}>
        &copy; {new Date().getFullYear()} indiranafa &mdash; All rights reserved.
      </footer>
      <style>{`
        .section-highlight {
          animation: sectionBounceShake 0.38s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 0 0 6px #6dd5ed55;
        }
        @keyframes sectionBounceShake {
          0% { transform: scale(1) translateX(0); }
          15% { transform: scale(1.08) translateX(-8px); }
          30% { transform: scale(0.97) translateX(8px); }
          45% { transform: scale(1.04) translateX(-4px); }
          60% { transform: scale(0.99) translateX(4px); }
          75% { transform: scale(1.02) translateX(-2px); }
          100% { transform: scale(1) translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
