import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function RobotCharacter() {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Mesh>(null);
  const rightArm = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (!group.current || !head.current) return;

    const t = state.clock.getElapsedTime();
    const s = scroll.offset; // 0 to 1
    const isMobile = window.innerWidth < 768;

    // Responsive scaling and positioning
    group.current.scale.setScalar(isMobile ? 1.0 : 1.6);
    
    // Move character based on scroll
    // On mobile, we want it more centered but still dynamic
    const startX = isMobile ? 0 : 3;
    const endX = isMobile ? 0 : -4;
    const moveRange = Math.min(s * 8, 1); 
    group.current.position.x = THREE.MathUtils.lerp(startX, endX, moveRange);
    group.current.position.z = THREE.MathUtils.lerp(0, -1, moveRange);
    
    // Section 0 (Hero) starts at s=0
    // Section 1 (About) starts at s = 1/pages
    // We want to "un-stick" and scroll away smoothly alongside Skills
    const pages = isMobile ? 12 : 8.5;
    const exitOffset = (2 / pages) - 0.005; 
    const scrollFactor = isMobile ? 15 : 20; // Slower, smoother exit to keep character visible longer
    const scrollY = s > exitOffset ? (s - exitOffset) * state.viewport.height * scrollFactor : 0;
    
    // Original floating animation + vertical scroll away
    group.current.position.y = (isMobile ? -0.7 : -0.5) + (Math.sin(t * 1.5) * 0.1) + scrollY;

    // Follow mouse
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX + (moveRange * 0.4), 0.1);
    
    // Head looks at mouse
    head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetX * 1.5, 0.1);
    head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -targetY, 0.1);

    // Normal Typing animation
    if (leftArm.current && rightArm.current) {
        leftArm.current.rotation.x = -1 + Math.sin(t * 4) * 0.05;
        rightArm.current.rotation.x = -1 + Math.cos(t * 4) * 0.05;
    }
  });

  return (
    <group ref={group} scale={1.6} position={[3, -1, 0]}>
      {/* 3D Chair */}
      <group position={[0, 0.2, -0.3]}>
        {/* Seat */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.1, 0.7]} />
            <meshStandardMaterial color="#1a202c" />
        </mesh>
        {/* Backrest */}
        <mesh position={[0, 0.5, -0.35]}>
            <boxGeometry args={[0.7, 0.8, 0.1]} />
            <meshStandardMaterial color="#1a202c" />
        </mesh>
        {/* Base / Stem */}
        <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8]} />
            <meshStandardMaterial color="#2d3748" />
        </mesh>
      </group>

      {/* Humanoid Character */}
      <group position={[0, 0.3, 0]}>
        {/* Torso */}
        <mesh position={[0, 0.6, 0]} rotation={[-0.1, 0, 0]}>
            <boxGeometry args={[0.7, 0.9, 0.4]} />
            <meshStandardMaterial color="#2d3748" roughness={0.5} />
        </mesh>
        
        {/* Head Group */}
        <group ref={head} position={[0, 1.25, 0.05]}>
            <mesh>
                <boxGeometry args={[0.5, 0.5, 0.45]} />
                <meshStandardMaterial color="#fbd38d" />
            </mesh>
            <mesh position={[0, 0.25, 0]}>
                <boxGeometry args={[0.55, 0.15, 0.5]} />
                <meshStandardMaterial color="#4a2c2a" />
            </mesh>
            {/* Glasses */}
            <group position={[0, 0.05, 0.23]}>
                <mesh position={[-0.15, 0, 0]}>
                    <torusGeometry args={[0.08, 0.015, 8, 32]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                    <torusGeometry args={[0.08, 0.015, 8, 32]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.1, 0.02, 0.01]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </group>
        </group>

        {/* Arms - Posed for typing */}
        <mesh ref={leftArm} position={[-0.45, 0.7, 0.2]} rotation={[-1, 0, 0.2]}>
            <boxGeometry args={[0.15, 0.6, 0.15]} />
            <meshStandardMaterial color="#2d3748" />
        </mesh>
        <mesh ref={rightArm} position={[0.45, 0.7, 0.2]} rotation={[-1, 0, -0.2]}>
            <boxGeometry args={[0.15, 0.6, 0.15]} />
            <meshStandardMaterial color="#2d3748" />
        </mesh>

        {/* Legs - Sitting Position */}
        <mesh position={[-0.2, 0.15, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <boxGeometry args={[0.2, 0.7, 0.2]} />
            <meshStandardMaterial color="#1a202c" />
        </mesh>
        <mesh position={[0.2, 0.15, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <boxGeometry args={[0.2, 0.7, 0.2]} />
            <meshStandardMaterial color="#1a202c" />
        </mesh>
      </group>
      
      {/* 3D Desk */}
      <group position={[0, 0, 0.7]}>
        <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[1.5, 0.05, 0.8]} />
            <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.2} />
        </mesh>
        {/* Glowing Edge */}
        <mesh position={[0, 0.41, 0.38]}>
            <boxGeometry args={[1.5, 0.02, 0.02]} />
            <meshBasicMaterial color="#14b8a6" />
        </mesh>
        
        {/* 3D Laptop */}
        <group position={[0, 0.45, 0]} rotation={[0, 0, 0]}>
            <mesh position={[0, -0.01, 0.1]}>
                <boxGeometry args={[0.6, 0.03, 0.4]} />
                <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0, 0.2, -0.1]} rotation={[Math.PI / 4, 0, 0]}>
                <boxGeometry args={[0.6, 0.03, 0.4]} />
                <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Screen Glow */}
            <mesh position={[0, 0.2, -0.08]} rotation={[Math.PI / 4, 0, 0]}>
                <planeGeometry args={[0.55, 0.35]} />
                <meshBasicMaterial color="#3182ce" />
            </mesh>
        </group>
      </group>
    </group>
  );
}
