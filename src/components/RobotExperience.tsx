import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function RobotExperience() {
  const group = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();
    const s = scroll.offset;

    // Positioned on the right side
    // We want it to be mostly visible after the Hero section
    const appearance = Math.min(s * 5, 1);
    group.current.position.x = THREE.MathUtils.lerp(10, 4, appearance); // Slide in from right
    
    // Vertical Scrolling Logic (matching the first humanoid's exit)
    // It stays fixed until s=0.35, then scrolls away
    const exitOffset = 0.35;
    const scrollY = s > exitOffset ? (s - exitOffset) * state.viewport.height * 12 : 0;
    group.current.position.y = (Math.sin(t * 2) * 0.2) + scrollY;

    // Follow mouse
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.1);
  });

  return (
    <group ref={group} scale={1.2} position={[10, 0, 0]}>
      {/* Drone-like Robot Body */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#4a5568" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Glowing "Eye" */}
      <mesh position={[0, 0, 0.35]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#14b8a6" />
      </mesh>

      {/* Side Rotors / Wings */}
      <group position={[-0.5, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>
      </group>
      <group position={[0.5, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>
      </group>

      {/* Bottom Sensors */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 0.2, 4]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
    </group>
  );
}
