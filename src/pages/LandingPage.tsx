import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, ContactShadows, Float } from '@react-three/drei';
import { RobotCharacter } from '../components/RobotCharacter';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { WorkSection } from '../components/WorkSection';
import { SkillsSection, InterestsSection, CertificatesSection, ContactSection } from '../components/ExtraSections';
import { useNavigate } from 'react-router-dom';

export function LandingPage({ setZoomedCert }: any) {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <ScrollControls pages={window.innerWidth < 768 ? 12 : 6.5} damping={window.innerWidth < 768 ? 0.1 : 0.2}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <RobotCharacter />
          </Float>
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          <Environment preset="city" />

          <Scroll html style={{ width: '100%' }}>
            <HeroSection />
            <AboutSection onActivitySelect={(id) => { 
                navigate(`/activities?tab=${id}`);
            }} />
            <SkillsSection />
            <InterestsSection />
            <ExperienceSection />
            <WorkSection />
            <CertificatesSection onZoom={setZoomedCert} />
            <ContactSection />
            
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
              <p>&copy; {new Date().getFullYear()} Alok Nawani. All rights reserved.</p>
            </footer>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
