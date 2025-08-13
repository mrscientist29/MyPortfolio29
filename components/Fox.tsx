import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FoxProps {
  currentAnimation: string;
  [key: string]: any;
}

export function Fox({ currentAnimation, ...props }: FoxProps) {
  const foxRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);
  const animationTime = useRef(0);

  useFrame((_, delta) => {
    animationTime.current += delta;
    
    if (currentAnimation === "walk" && foxRef.current) {
      // Walking animation - slight bobbing
      foxRef.current.position.y = Math.sin(animationTime.current * 8) * 0.02;
      foxRef.current.rotation.z = Math.sin(animationTime.current * 4) * 0.05;
    }
    
    if (currentAnimation === "run" && foxRef.current) {
      // Running animation - more pronounced movement
      foxRef.current.position.y = Math.sin(animationTime.current * 12) * 0.05;
      foxRef.current.rotation.z = Math.sin(animationTime.current * 6) * 0.1;
    }
    
    // Tail wagging
    if (tailRef.current) {
      const wagIntensity = currentAnimation === "idle" ? 0.3 : 0.6;
      tailRef.current.rotation.y = Math.sin(animationTime.current * 4) * wagIntensity;
    }
    
    // Ear twitching
    if (leftEarRef.current && rightEarRef.current) {
      const earTwitch = Math.sin(animationTime.current * 6) * 0.1;
      leftEarRef.current.rotation.z = earTwitch;
      rightEarRef.current.rotation.z = -earTwitch;
    }
  });

  const foxMaterial = new THREE.MeshStandardMaterial({ color: "#ff6b35" });
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" });
  const blackMaterial = new THREE.MeshStandardMaterial({ color: "#2c2c2c" });
  const pinkMaterial = new THREE.MeshStandardMaterial({ color: "#ff69b4" });

  return (
    <group ref={foxRef} {...props}>
      {/* Body */}
      <mesh material={foxMaterial}>
        <capsuleGeometry args={[0.3, 0.8, 4, 8]} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 0.1, 0.6]} material={foxMaterial}>
        <sphereGeometry args={[0.25, 8, 6]} />
      </mesh>
      
      {/* Snout */}
      <mesh position={[0, -0.05, 0.8]} material={foxMaterial}>
        <capsuleGeometry args={[0.08, 0.15, 4, 8]} />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, -0.02, 0.87]} material={blackMaterial}>
        <sphereGeometry args={[0.03, 6, 4]} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[0.08, 0.05, 0.75]} material={blackMaterial}>
        <sphereGeometry args={[0.03, 6, 4]} />
      </mesh>
      <mesh position={[-0.08, 0.05, 0.75]} material={blackMaterial}>
        <sphereGeometry args={[0.03, 6, 4]} />
      </mesh>
      
      {/* Ears */}
      <mesh 
        ref={leftEarRef}
        position={[0.12, 0.25, 0.55]} 
        material={foxMaterial}
      >
        <coneGeometry args={[0.08, 0.15, 6]} />
      </mesh>
      <mesh 
        ref={rightEarRef}
        position={[-0.12, 0.25, 0.55]} 
        material={foxMaterial}
      >
        <coneGeometry args={[0.08, 0.15, 6]} />
      </mesh>
      
      {/* Inner ears */}
      <mesh position={[0.12, 0.22, 0.58]} material={pinkMaterial}>
        <coneGeometry args={[0.04, 0.08, 6]} />
      </mesh>
      <mesh position={[-0.12, 0.22, 0.58]} material={pinkMaterial}>
        <coneGeometry args={[0.04, 0.08, 6]} />
      </mesh>
      
      {/* Chest/belly */}
      <mesh position={[0, -0.15, 0.2]} material={whiteMaterial}>
        <sphereGeometry args={[0.18, 8, 6]} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[0.15, -0.4, 0.3]} material={foxMaterial}>
        <cylinderGeometry args={[0.05, 0.06, 0.3, 8]} />
      </mesh>
      <mesh position={[-0.15, -0.4, 0.3]} material={foxMaterial}>
        <cylinderGeometry args={[0.05, 0.06, 0.3, 8]} />
      </mesh>
      <mesh position={[0.15, -0.4, -0.2]} material={foxMaterial}>
        <cylinderGeometry args={[0.05, 0.06, 0.3, 8]} />
      </mesh>
      <mesh position={[-0.15, -0.4, -0.2]} material={foxMaterial}>
        <cylinderGeometry args={[0.05, 0.06, 0.3, 8]} />
      </mesh>
      
      {/* Paws */}
      <mesh position={[0.15, -0.58, 0.3]} material={blackMaterial}>
        <sphereGeometry args={[0.06, 6, 4]} />
      </mesh>
      <mesh position={[-0.15, -0.58, 0.3]} material={blackMaterial}>
        <sphereGeometry args={[0.06, 6, 4]} />
      </mesh>
      <mesh position={[0.15, -0.58, -0.2]} material={blackMaterial}>
        <sphereGeometry args={[0.06, 6, 4]} />
      </mesh>
      <mesh position={[-0.15, -0.58, -0.2]} material={blackMaterial}>
        <sphereGeometry args={[0.06, 6, 4]} />
      </mesh>
      
      {/* Tail */}
      <mesh 
        ref={tailRef}
        position={[0, 0.1, -0.5]} 
        material={foxMaterial}
      >
        <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
      </mesh>
      
      {/* Tail tip */}
      <mesh position={[0, 0.15, -0.8]} material={whiteMaterial}>
        <sphereGeometry args={[0.06, 6, 4]} />
      </mesh>
    </group>
  );
}