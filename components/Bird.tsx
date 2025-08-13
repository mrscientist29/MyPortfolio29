import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export function Bird() {
  const birdRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      // Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      // Check if the bird reached a certain endpoint relative to the camera
      if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction to fly back
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to fly forward
        birdRef.current.rotation.y = 0;
      }

      // Update the X and Z positions based on the direction
      if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }

      // Animate wings
      const wingFlap = Math.sin(clock.elapsedTime * 10) * 0.5;
      if (leftWingRef.current) {
        leftWingRef.current.rotation.z = wingFlap;
      }
      if (rightWingRef.current) {
        rightWingRef.current.rotation.z = -wingFlap;
      }
    }
  });

  const birdMaterial = new THREE.MeshStandardMaterial({ color: "#4a4a4a" });
  const beakMaterial = new THREE.MeshStandardMaterial({ color: "#ffa500" });

  return (
    <group ref={birdRef} position={[-5, 2, 1]} scale={[0.5, 0.5, 0.5]}>
      {/* Bird body */}
      <mesh material={birdMaterial}>
        <sphereGeometry args={[0.3, 8, 6]} />
      </mesh>
      
      {/* Bird head */}
      <mesh position={[0.25, 0.1, 0]} material={birdMaterial}>
        <sphereGeometry args={[0.15, 8, 6]} />
      </mesh>
      
      {/* Beak */}
      <mesh position={[0.35, 0.05, 0]} material={beakMaterial}>
        <coneGeometry args={[0.03, 0.1, 4]} />
      </mesh>
      
      {/* Left wing */}
      <mesh 
        ref={leftWingRef}
        position={[-0.1, 0, 0.2]} 
        material={birdMaterial}
      >
        <boxGeometry args={[0.4, 0.05, 0.2]} />
      </mesh>
      
      {/* Right wing */}
      <mesh 
        ref={rightWingRef}
        position={[-0.1, 0, -0.2]} 
        material={birdMaterial}
      >
        <boxGeometry args={[0.4, 0.05, 0.2]} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[-0.4, 0, 0]} material={birdMaterial}>
        <boxGeometry args={[0.2, 0.05, 0.15]} />
      </mesh>
    </group>
  );
}