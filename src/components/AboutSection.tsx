import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, User, Gamepad, Clapperboard, Presentation, X } from 'lucide-react';

export function AboutSection({ onActivitySelect }: { onActivitySelect: (id: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'profileSheet', label: 'Profile Sheet', icon: User },
    { id: 'classPresentation', label: 'Class Presentation', icon: Presentation },
    { id: 'movieReview', label: 'Movie Review', icon: Clapperboard },
    { id: 'groupDiscussion', label: 'Group Discussion', icon: Gamepad },
  ];

  return (
    <section id="about" className="section container" style={{ padding: window.innerWidth < 768 ? '10rem 5% 4rem 5%' : '6rem 5%', minHeight: '100vh', justifyContent: 'center' }}>
      <div style={{ 
        display: 'flex', 
        gap: window.innerWidth < 768 ? '2rem' : '4rem', 
        alignItems: 'center', 
        flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
        maxWidth: '1200px',
        width: '100%',
        pointerEvents: 'auto'
      }}>
        {/* Left Side: Space for 3D Character (becomes top space on mobile) */}
        <div style={{ 
          flex: '1', 
          minWidth: window.innerWidth < 768 ? '100%' : '400px',
          height: window.innerWidth < 1024 ? '300px' : 'auto' 
        }} />

        {/* Right Side: Content */}
        <div style={{ flex: '1.2', minWidth: '300px', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: 0, color: 'var(--accent-primary)' }}
              >
                {portfolioData.about.title}
              </motion.h2>

              {/* Hamburger Menu for Activities */}
              <div style={{ position: 'relative', pointerEvents: 'auto' }}>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: window.innerWidth < 768 ? '40px' : '50px',
                    height: window.innerWidth < 768 ? '40px' : '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      style={{
                        position: 'absolute',
                        top: '60px',
                        right: 0,
                        width: window.innerWidth < 480 ? '200px' : '240px',
                        background: 'rgba(15, 15, 20, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '1rem',
                        zIndex: 100,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                      }}
                    >
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1rem', paddingLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Explorer</p>
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        {menuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <motion.button
                              key={item.id}
                              whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                              onClick={() => {
                                onActivitySelect(item.id);
                                setIsMenuOpen(false);
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.8rem 1rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left'
                              }}
                            >
                              <Icon size={18} color="var(--accent-primary)" />
                              <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel"
            style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}
            >
            <p style={{ fontSize: window.innerWidth < 768 ? '0.95rem' : '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {portfolioData.about.description}
            </p>

            <div style={{ 
              display: 'flex', 
              gap: window.innerWidth < 480 ? '2rem' : '3rem', 
              flexWrap: 'nowrap',
              justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start',
            }}>
                {portfolioData.about.stats.map((stat, idx) => (
                <div key={idx} style={{ flex: '0 1 auto', minWidth: 'fit-content', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                    <h3 className="text-gradient" style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: '0.25rem' }}>{stat.value}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</p>
                </div>
                ))}
            </div>
            </motion.div>

            <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
            {portfolioData.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    style={{ 
                    display: 'flex', 
                    flexDirection: window.innerWidth < 480 ? 'column' : 'row',
                    gap: '1rem',
                    alignItems: window.innerWidth < 480 ? 'center' : 'flex-start',
                    textAlign: window.innerWidth < 480 ? 'center' : 'left',
                    padding: '1rem',
                    borderRadius: '15px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <div style={{ 
                    padding: '0.8rem', 
                    borderRadius: '10px', 
                    background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(139,92,246,0.1))'
                    }}>
                    <Icon size={20} color="var(--accent-primary)" />
                    </div>
                    <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem', letterSpacing: '1px' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>{service.description}</p>
                    </div>
                </motion.div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
