import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code2, Globe } from 'lucide-react';

export function InterestsSection() {
  return (
    <section className="section container" style={{ padding: '4rem 5%', minHeight: window.innerWidth < 768 ? 'auto' : '100vh', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ 
          fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', 
          marginBottom: '2rem', 
          color: 'var(--accent-secondary)', 
          textAlign: window.innerWidth < 768 ? 'center' : 'right' 
        }}
      >
        Personal <span style={{ color: 'white' }}>Interests</span>
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: window.innerWidth < 640 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {(portfolioData as any).interests.map((interest: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel"
            style={{ 
              padding: '1.2rem', 
              borderLeft: window.innerWidth < 640 ? 'none' : '4px solid var(--accent-secondary)',
              borderTop: window.innerWidth < 640 ? '4px solid var(--accent-secondary)' : 'none' 
            }}
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--accent-secondary)' }}>{interest.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section container" style={{ padding: '4rem 5%', minHeight: window.innerWidth < 768 ? 'auto' : '100vh', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: '2rem', color: 'var(--accent-primary)', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
      >
        My <span style={{ color: 'white' }}>Skills</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {portfolioData.skills.map((skill: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel"
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>▹</div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'white' }}>{skill.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CertificatesSection({ onZoom }: { onZoom: (cert: any) => void }) {
  return (
    <section className="section container" style={{ padding: '4rem 5%', minHeight: window.innerWidth < 768 ? 'auto' : '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: window.innerWidth < 768 ? '1.8rem' : '2rem', marginBottom: '2.5rem', textAlign: 'center' }}
      >
        <span style={{ color: 'var(--accent-primary)' }}>Certificates</span> & Achievements
      </motion.h2>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1.5rem', 
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '0 auto' 
      }}>
        {portfolioData.certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            onPointerDown={() => onZoom(cert)}
            className="glass-panel"
            style={{ 
              width: window.innerWidth < 480 ? '100%' : '180px', 
              flexShrink: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              padding: '0.75rem',
              borderRadius: '15px',
              cursor: 'zoom-in',
              pointerEvents: 'auto',
              zIndex: 10
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ 
                width: '100%', 
                aspectRatio: '1.4', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '10px', 
                marginBottom: '0.8rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                pointerEvents: 'none'
              }}
            >
                <img src={`/${cert.img}`} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '5px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color:var(--text-secondary);font-weight:bold;font-size:0.6rem">ALOK</span>'; }} />
            </motion.div>
            <h3 style={{ fontSize: '0.85rem', marginBottom: '0.3rem', color: 'var(--accent-highlight)', lineHeight: 1.2, pointerEvents: 'none' }}>{cert.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', margin: 0, lineHeight: 1.3, pointerEvents: 'none' }}>{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ActivitiesExplorer({ 
  activeTab,
  onTabChange,
  onZoomVideo, 
  onPagesChange, 
  onResetScroll 
}: { 
  activeTab: string,
  onTabChange: (id: string) => void,
  onZoomVideo: (url: string) => void, 
  onPagesChange: (pages: number) => void,
  onResetScroll: () => void
}) {
  const tabs = [
    { id: 'profileSheet', label: 'Profile Sheet' },
    { id: 'classPresentation', label: 'Class Presentation' },
    { id: 'movieReview', label: 'Movie Review' },
    { id: 'groupDiscussion', label: 'Group Discussion' }
  ];

  const handleTabChange = (id: string) => {
    onTabChange(id);
    
    // 1. Update total scroll length based on content complexity
    const pageMap: Record<string, number> = {
      movieReview: 10, 
      classPresentation: 10.4, 
      groupDiscussion: 10.8, 
      profileSheet: 15.6
    };
    
    if (pageMap[id]) {
      onPagesChange(pageMap[id]);
    }

    // 2. Smoothly reset scroll position to the top of the section
    // Use setTimeout(0) to wait for the page height re-calculation to finish
    setTimeout(() => {
      onResetScroll();
    }, 0);
  };

  return (
    <section className="section container" style={{ padding: window.innerWidth < 768 ? '2rem 1rem' : '6rem 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ fontSize: window.innerWidth < 768 ? '1.8rem' : '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Extracurricular <span className="text-gradient">Explorer</span>
      </motion.h2>

      {/* Premium Tabs Navigation */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '0.5rem', 
        marginBottom: window.innerWidth < 768 ? '2rem' : '4rem',
        padding: '0.5rem',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '15px',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        width: '100%'
      }}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: window.innerWidth < 768 ? '0.6rem 1rem' : '0.8rem 1.5rem',
              borderRadius: '10px',
              border: activeTab === tab.id ? '1px solid var(--accent-primary)' : '1px solid transparent',
              background: activeTab === tab.id ? 'rgba(138, 75, 238, 0.2)' : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: window.innerWidth < 768 ? '0.8rem' : '0.95rem',
              fontWeight: 500,
              flex: window.innerWidth < 768 ? '1 1 45%' : 'none',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === tab.id ? '0 0 20px rgba(138, 75, 238, 0.3)' : 'none'
            }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Explorer Content */}
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
             {activeTab === 'profileSheet' ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '1rem' 
              }}>
                {portfolioData.profileSheetQA.map((qa, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '1rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--accent-highlight)' }}>{qa.question}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1 }}>{qa.answer}</p>
                    {qa.vimeoSrc && (
                      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', marginTop: '1rem' }}>
                        <iframe 
                          src={qa.vimeoSrc} 
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                          frameBorder="0" allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '30px' }}>
                {portfolioData.activities.find(act => act.id === activeTab) && (() => {
                  const act = portfolioData.activities.find(a => a.id === activeTab);
                  if (!act) return null;
                  
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: '2.5rem',
                        alignItems: 'start',
                        textAlign: 'left'
                      }}>
                        {/* Left Side: Info */}
                        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                          <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', margin: 0 }}>
                            {act.title}
                          </h3>
                          
                          {act.details ? (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                              {act.details.map((detail: any, i: number) => (
                                <li key={i} style={{ display: 'flex', gap: '0.8rem', lineHeight: 1.6 }}>
                                  <span style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.3rem' }}>•</span>
                                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    <strong style={{ color: 'white' }}>{detail.label}:</strong> {detail.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                              {act.desc}
                            </p>
                          )}
                        </div>

                        {/* Right Side: Video & Links */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                          <div style={{ 
                            display: act.videos && act.videos.length > 1 ? 'grid' : 'block',
                            gridTemplateColumns: act.videos && act.videos.length > 1 ? '1fr 1fr' : '1fr',
                            gap: '1rem',
                            width: '100%'
                          }}>
                            {(act.videos || [act.video]).map((vSrc: string, vIdx: number) => (
                              vSrc && (
                                <motion.div 
                                  key={vIdx}
                                  initial={{ scale: 0.95, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: vIdx * 0.1 }}
                                  style={{ 
                                    width: '100%',
                                    borderRadius: '20px', 
                                    overflow: 'hidden', 
                                    border: '1px solid rgba(255,255,255,0.1)', 
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                    aspectRatio: '9/16',
                                    maxHeight: '600px',
                                    background: '#000',
                                    position: 'relative'
                                  }}
                                >
                                  <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                                    <source src={vSrc} type="video/mp4" />
                                  </video>
                                </motion.div>
                              )
                            ))}
                          </div>

                          {/* Specific Action Buttons for Video Side */}
                          {act.link && (
                            <motion.a
                              href={act.link}
                              target="_blank"
                              rel="noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '12px',
                                background: 'rgba(138, 75, 238, 0.8)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 10px 20px rgba(138, 75, 238, 0.3)'
                              }}
                            >
                              View Presentation (PPT)
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Full-width Action Button (like for GD) */}
                      {activeTab === 'groupDiscussion' && (
                        <motion.button
                          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 198, 255, 0.4)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onZoomVideo("https://player.vimeo.com/video/1081241819?h=85f4b0e43c")}
                          style={{
                            width: '100%',
                            padding: '1.2rem',
                            borderRadius: '15px',
                            border: 'none',
                            background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                            color: 'var(--bg-color)',
                            fontSize: '1.1rem',
                            fontWeight: '800',
                            cursor: 'pointer',
                            marginTop: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}
                        >
                          Watch Full GD
                        </motion.button>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section container" style={{ padding: '4rem 5%', minHeight: '70vh', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-panel"
        style={{ textAlign: 'center', maxWidth: '800px', width: '100%', padding: window.innerWidth < 768 ? '1.5rem' : '2rem' }}
      >
        <h2 style={{ fontSize: window.innerWidth < 768 ? '2rem' : '3rem', marginBottom: '1rem' }}>Get In <span className="text-gradient">Touch</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: window.innerWidth < 768 ? '0.9rem' : '1.1rem' }}>
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href={portfolioData.socialLinks.email} className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: window.innerWidth < 480 ? '100%' : 'auto' }}>
            <Mail size={18} color="var(--accent-primary)" /> Gmail
          </a>
          <a href={portfolioData.socialLinks.instagram} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: window.innerWidth < 480 ? '100%' : 'auto' }}>
            <Globe size={18} color="#e1306c" /> Insta
          </a>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', width: '100%' }}>
            <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: window.innerWidth < 768 ? '1 1 40%' : 'none' }}>
              <Globe size={18} /> GitHub
            </a>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: window.innerWidth < 768 ? '1 1 40%' : 'none' }}>
              <Globe size={18} color="#0077b5" /> LinkedIn
            </a>
            <a href={portfolioData.socialLinks.leetcode} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: window.innerWidth < 768 ? '1 1 40%' : 'none' }}>
              <Code2 size={18} color="#f89f1b" /> LeetCode
            </a>
            <a href={portfolioData.socialLinks.codechef} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: window.innerWidth < 768 ? '1 1 40%' : 'none' }}>
              <Code2 size={18} color="#5B4638" /> CodeChef
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
