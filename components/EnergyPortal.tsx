import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const EnergyPortal = () => {
  const portalRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group position={[0, 8, -10]}>
      {/* Main portal */}
      <mesh ref={portalRef}>
        <ringGeometry args={[3, 4, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[4.5, 5, 32]} />
        <meshBasicMaterial
          color="#ec4899"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <ringGeometry args={[2, 3, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Point light for glow effect */}
      <pointLight position={[0, 0, 0]} color="#8b5cf6" intensity={2} distance={20} />
    </group>
  );
};