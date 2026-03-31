import { useSearchParams, useNavigate } from 'react-router-dom';
import { ActivitiesExplorer } from '../components/ExtraSections';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function ActivitiesPage({ onZoomVideo }: { onZoomVideo: (url: string) => void }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTab = searchParams.get('tab') || 'profileSheet';
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-color)', 
      position: 'relative',
      padding: window.innerWidth < 768 ? '1.5rem 1rem' : '2rem 5%',
      overflowX: 'hidden'
    }}>
      {/* Background glow orbs for consistency */}
      <div className="glow-orb glow-orb-1" style={{ top: '10%', left: '10%' }} />
      <div className="glow-orb glow-orb-2" style={{ bottom: '10%', right: '10%' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <header style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: window.innerWidth < 768 ? 'flex-start' : 'center', 
          marginBottom: window.innerWidth < 768 ? '2rem' : '3rem',
          gap: '1.5rem'
        }}>
          <motion.button
            whileHover={{ x: -10 }}
            onClick={() => navigate('/')}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: window.innerWidth < 768 ? '0.6rem 1.2rem' : '0.8rem 1.5rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem'
            }}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </motion.button>

          <h1 className="text-gradient" style={{ 
            fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem', 
            fontWeight: 'bold',
            textAlign: window.innerWidth < 768 ? 'left' : 'right'
          }}>
            Activities Explorer
          </h1>
        </header>

        <ActivitiesExplorer 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onZoomVideo={onZoomVideo}
          onPagesChange={() => {}} // No longer needed for scrolling
          onResetScroll={() => {}} // No longer needed for scrolling
        />
      </div>

      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Alok Nawani. All rights reserved.</p>
      </footer>
    </div>
  );
}
