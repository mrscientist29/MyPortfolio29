import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface IslandProps {
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
  setCurrentStage: (stage: number | null) => void;
  [key: string]: any;
}

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}: IslandProps) {
  const islandRef = useRef<THREE.Group>(null);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating && islandRef.current) {
      const clientX = e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (islandRef.current) {
      if (e.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
      } else if (e.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.0125;
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (islandRef.current) {
      if (!isRotating) {
        rotationSpeed.current *= dampingFactor;
        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }
        islandRef.current.rotation.y += rotationSpeed.current;
      } else {
        const rotation = islandRef.current.rotation.y;
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Create materials
  const grassMaterial = new THREE.MeshStandardMaterial({ color: "#4a7c59" });
  const dirtMaterial = new THREE.MeshStandardMaterial({ color: "#8b4513" });
  const treeMaterial = new THREE.MeshStandardMaterial({ color: "#2d5016" });
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: "#654321" });
  const rockMaterial = new THREE.MeshStandardMaterial({ color: "#696969" });

  return (
    <a.group ref={islandRef} {...props}>
      {/* Main island base */}
      <mesh position={[0, -2, 0]} material={grassMaterial}>
        <sphereGeometry args={[4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
      
      {/* Dirt layer */}
      <mesh position={[0, -2.5, 0]} material={dirtMaterial}>
        <sphereGeometry args={[3.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>

      {/* Trees */}
      {/* Tree 1 */}
      <group position={[-1.5, 0, 1]}>
        <mesh position={[0, -0.5, 0]} material={trunkMaterial}>
          <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
        </mesh>
        <mesh position={[0, 0.5, 0]} material={treeMaterial}>
          <sphereGeometry args={[0.8, 8, 6]} />
        </mesh>
      </group>

      {/* Tree 2 */}
      <group position={[2, 0, -0.5]}>
        <mesh position={[0, -0.3, 0]} material={trunkMaterial}>
          <cylinderGeometry args={[0.08, 0.12, 0.8, 8]} />
        </mesh>
        <mesh position={[0, 0.4, 0]} material={treeMaterial}>
          <sphereGeometry args={[0.6, 8, 6]} />
        </mesh>
      </group>

      {/* Tree 3 */}
      <group position={[0.5, 0, 2]}>
        <mesh position={[0, -0.4, 0]} material={trunkMaterial}>
          <cylinderGeometry args={[0.12, 0.18, 1.2, 8]} />
        </mesh>
        <mesh position={[0, 0.6, 0]} material={treeMaterial}>
          <sphereGeometry args={[1, 8, 6]} />
        </mesh>
      </group>

      {/* Rocks */}
      <mesh position={[-2, -1, -1]} material={rockMaterial}>
        <boxGeometry args={[0.5, 0.3, 0.4]} />
      </mesh>
      <mesh position={[1.5, -1.2, 1.5]} material={rockMaterial}>
        <boxGeometry args={[0.3, 0.4, 0.3]} />
      </mesh>
      <mesh position={[-0.5, -1.5, -2]} material={rockMaterial}>
        <boxGeometry args={[0.4, 0.2, 0.5]} />
      </mesh>

      {/* Small decorative elements */}
      <mesh position={[1, -1, 0]} material={grassMaterial}>
        <cylinderGeometry args={[0.2, 0.3, 0.1, 6]} />
      </mesh>
      <mesh position={[-1, -1.2, 0.5]} material={grassMaterial}>
        <cylinderGeometry args={[0.15, 0.25, 0.08, 6]} />
      </mesh>
    </a.group>
  );
}