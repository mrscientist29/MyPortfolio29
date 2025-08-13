import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { techStack } from "../helpers/portfolioData";

const TechIcon = ({ 
  position, 
  tech, 
  index 
}: { 
  position: [number, number, number]; 
  tech: typeof techStack[0];
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 + index;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.5;
    }
    if (textRef.current) {
      textRef.current.rotation.x = state.clock.elapsedTime * 0.5 + index;
      textRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index;
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Icon background sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color={tech.color}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      
      {/* Icon text */}
      <Text
        ref={textRef}
        fontSize={0.8}
        color={tech.color}
        anchorX="center"
        anchorY="middle"
      >
        {tech.icon}
      </Text>
      
      {/* Glow effect */}
      <pointLight color={tech.color} intensity={0.5} distance={5} />
    </group>
  );
};

const WireframeConnections = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const points = [];
    const positions = [
      [8, 2, -5], [6, -1, -3], [-8, 1, -4], [-6, -2, -6],
      [4, 3, -2], [-4, 2, -8], [2, -3, -1], [-2, 0, -7]
    ];
    
    // Create connections between nearby points
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = new THREE.Vector3(...positions[i]).distanceTo(new THREE.Vector3(...positions[j]));
        if (dist < 8) {
          points.push(...positions[i], ...positions[j]);
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
    </lineSegments>
  );
};

const WireframeGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={globeRef} position={[0, -1, -5]}>
      <sphereGeometry args={[3, 16, 16]} />
      <meshBasicMaterial
        color="#ec4899"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
};

export const FloatingTechIcons = () => {
  const iconPositions: [number, number, number][] = [
    [8, 2, -5],   // React
    [6, -1, -3],  // JavaScript
    [-8, 1, -4],  // TypeScript
    [-6, -2, -6], // AWS
    [4, 3, -2],   // GitHub
    [-4, 2, -8],  // Node.js
    [2, -3, -1],  // Python
    [-2, 0, -7],  // Docker
  ];

  return (
    <group>
      {techStack.map((tech, index) => (
        <TechIcon
          key={tech.name}
          position={iconPositions[index]}
          tech={tech}
          index={index}
        />
      ))}
      <WireframeConnections />
      <WireframeGlobe />
    </group>
  );
};