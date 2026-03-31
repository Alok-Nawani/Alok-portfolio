import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function WorkSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeProject = portfolioData.projects[activeIdx];

  return (
    <section className="section container" style={{ padding: '4rem 5%', minHeight: 'auto', justifyContent: 'center', alignItems: 'stretch' }}>
      <div style={{ width: '100%', pointerEvents: 'auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: '2.5rem', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
        >
          My <span style={{ color: 'var(--accent-primary)' }}>Featured Projects</span>
        </motion.h2>

        {/* Featured Project Area - THE SLIDER PART */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <motion.div 
            key={activeIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'flex', 
              gap: window.innerWidth < 768 ? '2rem' : '3rem', 
              alignItems: 'center',
              flexDirection: window.innerWidth < 1024 ? 'column-reverse' : 'row',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '25px',
              padding: window.innerWidth < 768 ? '1.5rem' : '3rem',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ flex: 1, minWidth: window.innerWidth < 768 ? '100%' : '300px', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 'bold', background: 'rgba(20,184,166,0.1)', padding: '0.3rem 0.8rem', borderRadius: '15px' }}>
                  Project {activeProject.id}
                </span>
              </div>
              <h3 style={{ 
                fontSize: window.innerWidth < 768 ? '1.8rem' : '2.5rem', 
                marginBottom: '1rem', 
                fontWeight: '800',
                textAlign: window.innerWidth < 768 ? 'center' : 'left' 
              }}>
                {activeProject.title}
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: '1.5rem',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {activeProject.tech.split(',').map((t, idx) => (
                  <span key={idx} style={{ 
                    fontSize: '0.65rem', 
                    padding: '0.2rem 0.6rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '5px',
                    color: 'var(--text-secondary)',
                    letterSpacing: '1px'
                  }}>
                    {t.trim()}
                  </span>
                ))}
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7, 
                fontSize: window.innerWidth < 768 ? '0.9rem' : '1.05rem', 
                marginBottom: '2rem',
                textAlign: window.innerWidth < 768 ? 'center' : 'left'
              }}>
                {activeProject.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start' }}>
                <button className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Live Demo</button>
                <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>GitHub</a>
              </div>
            </div>

            <div style={{ flex: 1.2, minWidth: window.innerWidth < 768 ? '100%' : '350px', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    background: 'rgba(255,255,255,0.02)'
                  }}
               >
                 <img 
                   src={`${import.meta.env.BASE_URL}${activeProject.image}`} 
                   alt={activeProject.title} 
                   style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                   onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(45deg, #1a202c, #2d3748);color:rgba(255,255,255,0.2);font-weight:bold">ALOK PROJECT PREVIEW</div>'; }}
                 />
               </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Project Grid Area - THE GRID PART */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ 
            fontSize: '0.9rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '1.5rem', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            Exploration Hub
          </h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 480 ? '1fr 1fr' : 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1rem' 
          }}>
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                onClick={() => {
                  setActiveIdx(idx);
                }}
                whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                style={{
                  background: idx === activeIdx ? 'rgba(20,184,166,0.1)' : 'var(--glass-bg)',
                  border: `1px solid ${idx === activeIdx ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                  borderRadius: '12px',
                  padding: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>{project.id}</div>
                <h5 style={{ fontSize: '0.95rem', margin: 0, fontWeight: '700' }}>{project.title === 'Alok Portfolio' ? 'Portfolio' : project.title}</h5>
                <div style={{ height: '2px', width: '20px', background: 'var(--accent-primary)', borderRadius: '2px' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
