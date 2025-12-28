import React from 'react';

const playlist = [
  {
    title: 'Nadhif Basalamah - bergema sampai selamanya',
    file: '/assets/music/Nadhif Basalamah - bergema sampai selamanya.mp3',
  },
  {
    title: 'Luthfi Aulia - Langit Favorit',
    file: '/assets/music/Luthfi Aulia - Langit Favorit.mp3',
  },
  {
    title: 'Pamungkas - Monolog',
    file: '/assets/music/Pamungkas - Monolog.mp3',
  },
  {
    title: 'Halstage - terima kasih',
    file: '/assets/music/Halstage-terima kasih.mp3',
  },
  {
    title: 'Virgoun – Orang Yang Sama',
    file: '/assets/music/Virgoun – Orang Yang Sama.mp3',
  },
];

export default function PlaylistSection() {
  const [activeIdx, setActiveIdx] = React.useState(null);
  const audioRefs = React.useRef([]);

  // Pause all except the one being played
  const handlePlay = idx => {
    setActiveIdx(idx);
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== idx) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <section
      id="playlist-section"
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
        background: 'linear-gradient(90deg, #b8c6db 0%, #6dd5ed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 8px #23294655)'
      }}>
        Melodi di Antara Bintang
      </h2>
      <div style={{
        marginBottom: 22,
        color: '#e0e7efcc',
        fontSize: '1.13rem',
        fontWeight: 500,
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.5,
        fontStyle: 'italic',
      }}>
        "Langit favoritku, tempatku menaruh semua rindu dan harapan baru."<br/>
        <span style={{fontSize: '0.98rem', color: '#b8c6db', fontStyle: 'normal'}}>— Luthfi Aulia, Langit Favorit</span>
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '0 auto',
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}>
        {playlist.map((song, idx) => (
          <li key={song.title} style={{
            background: 'rgba(184,198,219,0.10)',
            borderRadius: 14,
            padding: '14px 18px',
            boxShadow: '0 1px 8px #23294622',
            transition: 'background 0.18s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(109,213,237,0.18)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(184,198,219,0.10)'}
          >
            <span style={{ fontWeight: 600, fontSize: '1.08rem', color: '#6dd5ed', marginBottom: 6 }}>{idx + 1}. {song.title}</span>
            <audio
              controls
              style={{ width: '100%' }}
              ref={el => (audioRefs.current[idx] = el)}
              onPlay={() => handlePlay(idx)}
            >
              <source src={song.file} type="audio/mpeg" />
              Browser tidak mendukung audio.
            </audio>
          </li>
        ))}
      </ul>
    </section>
  );
}