import { HashRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

function App() {
  const [zoomedCert, setZoomedCert] = useState<any>(null);
  const [zoomedVideo, setZoomedVideo] = useState<string | null>(null);

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage setZoomedCert={setZoomedCert} setZoomedVideo={setZoomedVideo} />} 
        />
        <Route 
          path="/activities" 
          element={<ActivitiesPage onZoomVideo={setZoomedVideo} />} 
        />
      </Routes>

      {/* Global Overlays (Shared across all pages) */}
      <AnimatePresence>
        {zoomedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(20px)',
              padding: '40px'
            }}
          >
            <button 
              onClick={() => setZoomedCert(null)}
              style={{
                position: 'absolute',
                top: window.innerWidth < 768 ? '20px' : '40px',
                right: window.innerWidth < 768 ? '20px' : '40px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                zIndex: 10000
              }}
            >
              <X size={32} />
            </button>

            <motion.div
              layoutId={`cert-${zoomedCert.id}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '900px', 
                aspectRatio: window.innerWidth < 768 ? '1' : '1.414',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                boxShadow: '0 0 50px rgba(20,184,166,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <img 
                src={`/${zoomedCert.img}`} 
                alt={zoomedCert.title} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', color: 'white', background: 'rgba(20,184,166,0.8)', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', fontSize: window.innerWidth < 768 ? '0.8rem' : '1rem', whiteSpace: 'nowrap', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 10 }}>
                {zoomedCert.title}
              </div>
            </motion.div>
          </motion.div>
        )}

        {zoomedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                backdropFilter: 'blur(20px)',
                padding: '40px'
              }}
            >
              <button 
                onClick={() => setZoomedVideo(null)}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  zIndex: 10000
                }}
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                style={{ width: '100%', maxWidth: '1200px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 0 100px rgba(0,0,0,1)' }}
              >
                {zoomedVideo.includes('vimeo') ? (
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe 
                      src={`${zoomedVideo}&autoplay=1`} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen 
                    />
                  </div>
                ) : (
                  <video controls autoPlay style={{ width: '100%', borderRadius: '20px' }}>
                    <source src={zoomedVideo} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
