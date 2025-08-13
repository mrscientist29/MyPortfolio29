import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlaneProps {
  isRotating: boolean;
  [key: string]: any;
}

export function Plane({ isRotating, ...props }: PlaneProps) {
  const planeRef = useRef<THREE.Group>(null);
  const propellerRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (propellerRef.current && isRotating) {
      propellerRef.current.rotation.z += 0.5;
    }
  });

  const planeMaterial = new THREE.MeshStandardMaterial({ color: "#ff6b6b" });
  const wingMaterial = new THREE.MeshStandardMaterial({ color: "#4ecdc4" });
  const propellerMaterial = new THREE.MeshStandardMaterial({ color: "#45b7d1" });

  return (
    <group {...props} ref={planeRef}>
      {/* Main fuselage */}
      <mesh material={planeMaterial}>
        <cylinderGeometry args={[0.1, 0.05, 1.5, 8]} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.1, 0.3]} material={planeMaterial}>
        <sphereGeometry args={[0.15, 8, 6]} />
      </mesh>
      
      {/* Main wings */}
      <mesh position={[0, -0.05, 0]} material={wingMaterial}>
        <boxGeometry args={[1.8, 0.05, 0.3]} />
      </mesh>
      
      {/* Tail wings */}
      <mesh position={[0, 0, -0.6]} material={wingMaterial}>
        <boxGeometry args={[0.6, 0.05, 0.15]} />
      </mesh>
      
      {/* Vertical tail */}
      <mesh position={[0, 0.2, -0.6]} material={wingMaterial}>
        <boxGeometry args={[0.05, 0.4, 0.15]} />
      </mesh>
      
      {/* Propeller */}
      <mesh ref={propellerRef} position={[0, 0, 0.75]} material={propellerMaterial}>
        <boxGeometry args={[0.6, 0.02, 0.02]} />
      </mesh>
      
      {/* Propeller hub */}
      <mesh position={[0, 0, 0.75]} material={propellerMaterial}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
      </mesh>
      
      {/* Landing gear */}
      <mesh position={[0.3, -0.2, 0.2]} material={planeMaterial}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 6]} />
      </mesh>
      <mesh position={[-0.3, -0.2, 0.2]} material={planeMaterial}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 6]} />
      </mesh>
      <mesh position={[0, -0.15, -0.4]} material={planeMaterial}>
        <cylinderGeometry args={[0.02, 0.02, 0.15, 6]} />
      </mesh>
    </group>
  );
}