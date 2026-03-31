import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { useScroll } from '@react-three/drei';

export function HeroSection() {
  const scroll = useScroll();

  const scrollToAbout = () => {
    if (scroll.el) {
      const pageHeight = scroll.el.scrollHeight / 8;
      scroll.el.scrollTo({
        top: pageHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section container" style={{ padding: window.innerWidth < 768 ? '4rem 5% 10rem 5%' : '0 5%', justifyContent: 'center' }}>
      <div style={{ 
        maxWidth: '700px', 
        pointerEvents: 'auto',
        textAlign: window.innerWidth < 768 ? 'center' : 'left',
        margin: window.innerWidth < 768 ? '0 auto' : '0' 
      }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}
        >
          Hello! I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', wordSpacing: '0.15em' }}
        >
          {portfolioData.hero.name.toUpperCase()}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 4vw, 1.8rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}
        >
          <span className="text-gradient font-bold">{portfolioData.hero.roleHighlight}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ 
            display: 'inline-block',
            padding: '1rem 2rem', 
            borderLeft: window.innerWidth < 768 ? 'none' : '4px solid var(--accent-highlight)',
            borderTop: window.innerWidth < 768 ? '4px solid var(--accent-highlight)' : 'none',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: window.innerWidth < 768 ? '10px' : '0 10px 10px 0',
            marginBottom: '3rem',
            textAlign: 'center'
          }}
        >
          <p style={{ fontStyle: 'italic', color: 'var(--accent-highlight)', fontSize: '0.95rem' }}>
            {portfolioData.hero.quote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start',
            flexWrap: 'wrap'
          }}
        >
          <a href={portfolioData.hero.resumeLink} download="Alok_Nawani_Resume.pdf" className="btn btn-primary" style={{textDecoration: 'none'}}>Download Resume</a>
          <button 
            className="btn btn-outline" 
            onClick={scrollToAbout}
            style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}
          >
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
