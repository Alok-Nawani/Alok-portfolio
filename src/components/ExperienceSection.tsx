import { portfolioData } from '../data';
import { motion } from 'framer-motion';

export function ExperienceSection() {
  return (
    <section className="section container" style={{ padding: '6rem 5%', minHeight: 'auto', justifyContent: 'center' }}>
      <div style={{ width: '100%', pointerEvents: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: '2rem', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
            My career & <br />
            <span style={{ color: 'var(--accent-primary)' }}>experience</span>
          </h2>
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 1024 ? '2rem' : '3rem', 
            alignItems: 'flex-start', 
            flexDirection: window.innerWidth < 1024 ? 'column-reverse' : 'row', 
            width: '100%', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ 
              flex: 1.5, 
              position: 'relative', 
              marginTop: window.innerWidth < 768 ? '2rem' : '4rem', 
              paddingLeft: window.innerWidth < 768 ? '1.5rem' : '2.5rem', 
              width: '100%'
            }}>
              {/* Timeline Line */}
              <div style={{ 
                position: 'absolute', 
                left: window.innerWidth < 768 ? '2px' : '0', 
                top: 0, 
                bottom: 0, 
                width: '2px', 
                background: 'linear-gradient(to bottom, var(--accent-primary), rgba(20,184,166,0))' 
              }} />

              {portfolioData.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  style={{ 
                    position: 'relative', 
                    marginBottom: window.innerWidth < 768 ? '2.5rem' : '4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ paddingRight: '1rem' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      position: 'absolute',
                      left: window.innerWidth < 768 ? '-1.45rem' : '-2.4rem',
                      top: '0.35rem',
                      border: '3px solid var(--bg-color)',
                      zIndex: 1
                    }} />
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{exp.role}</h3>
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover-accent"
                      style={{ 
                        color: 'var(--accent-primary)', 
                        margin: '0.2rem 0 0.5rem 0', 
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      {exp.company}
                    </a>
                  </div>

                  <div className="glass-panel text-secondary" style={{ padding: '0.5rem' }}>
                    <p style={{ margin: 0, padding: '0.8rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              style={{ 
                flex: 1, 
                width: '100%',
                display: 'flex', 
                justifyContent: window.innerWidth < 1024 ? 'center' : 'flex-end',
                marginTop: window.innerWidth < 1024 ? '0' : '4rem'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-panel" style={{ padding: '0.6rem', borderRadius: '25px', overflow: 'hidden', border: '2px solid var(--accent-primary)', width: 'fit-content' }}>
                <img 
                  src="assets/images/user-photo.jpg" 
                  alt="Alok Nawani" 
                  style={{ 
                    width: 'auto', 
                    height: window.innerWidth < 768 ? '300px' : '450px', 
                    objectFit: 'cover', 
                    borderRadius: '20px', 
                    display: 'block' 
                  }} 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
