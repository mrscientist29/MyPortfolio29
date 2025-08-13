import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface SkillIconProps {
  imageUrl: string;
  fallbackUrl?: string;
  position: [number, number, number];
  skillName: string;
}

// Create a professional-looking text-based fallback texture
const createFallbackTexture = (skillName: string) => {
  const canvas = document.createElement('canvas');
  const size = 128; // Increased size for better text quality
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#1e293b'); // Slate-800
    gradient.addColorStop(1, '#334155'); // Slate-700
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Add a subtle border
    ctx.strokeStyle = '#475569'; // Slate-600
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, size - 2, size - 2);
    
    // Calculate optimal font size based on text length
    const textLength = skillName.length;
    let fontSize = 16;
    if (textLength <= 3) fontSize = 24;
    else if (textLength <= 6) fontSize = 20;
    else if (textLength <= 10) fontSize = 16;
    else fontSize = 12;
    
    // Set up text styling
    ctx.fillStyle = '#f1f5f9'; // Slate-100
    ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add text shadow for better readability
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2;
    
    // Handle long text by wrapping it
    const maxWidth = size - 20; // Leave some padding
    const words = skillName.split(' ');
    let line1 = '';
    let line2 = '';
    
    if (words.length === 1) {
      line1 = skillName;
    } else if (words.length === 2) {
      line1 = words[0];
      line2 = words[1];
    } else {
      // For more complex cases, try to split evenly
      const midPoint = Math.ceil(words.length / 2);
      line1 = words.slice(0, midPoint).join(' ');
      line2 = words.slice(midPoint).join(' ');
    }
    
    // Draw the text
    if (line2) {
      ctx.fillText(line1, size / 2, size / 2 - fontSize / 2);
      ctx.fillText(line2, size / 2, size / 2 + fontSize / 2);
    } else {
      ctx.fillText(line1, size / 2, size / 2);
    }
    
    // Add a subtle tech-like accent
    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = '#3b82f6'; // Blue-500
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.strokeRect(8, 8, size - 16, size - 16);
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const SkillIcon = ({ imageUrl, fallbackUrl, position, skillName }: SkillIconProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  // Create fallback texture with skill name
  const fallbackTexture = useMemo(() => createFallbackTexture(skillName), [skillName]);

  // Determine which texture to load - this is now stable and won't change during renders
  const textureUrl = useMemo(() => imageUrl, [imageUrl]);

  // Load texture with simplified error handling
  let texture;
  try {
    texture = useLoader(TextureLoader, textureUrl);
    console.log(`Successfully loaded texture for ${skillName}`);
  } catch (error) {
    console.warn(`Failed to load primary texture for ${skillName}: ${textureUrl}`, error);
    
    // Try fallback URL if available
    if (fallbackUrl) {
      try {
        texture = useLoader(TextureLoader, fallbackUrl);
        console.log(`Successfully loaded fallback texture for ${skillName}`);
      } catch (fallbackError) {
        console.warn(`Failed to load fallback texture for ${skillName}: ${fallbackUrl}`, fallbackError);
        texture = fallbackTexture;
        console.log(`Using text-based fallback for ${skillName}`);
      }
    } else {
      texture = fallbackTexture;
      console.log(`Using text-based fallback for ${skillName}`);
    }
  }

  const randomRotationSpeed = useMemo(() => (Math.random() - 0.5) * 0.01, []);
  const randomFloatSpeed = useMemo(() => 0.1 + Math.random() * 0.1, []);
  const randomFloatOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Floating animation
      ref.current.position.y = position[1] + Math.sin(t * randomFloatSpeed + randomFloatOffset) * 0.2;

      // Rotation animation
      const targetRotation = hovered ? 0.02 : randomRotationSpeed;
      ref.current.rotation.y += targetRotation;
      ref.current.rotation.x += targetRotation / 2;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide}
        alphaTest={0.1}
      />
    </mesh>
  );
};