import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SkillIcon } from './SkillIcon';
import { SkillIconErrorBoundary } from './SkillIconErrorBoundary';
import { skillsData } from '../helpers/skillsData';
import styles from './SkillsCanvas.module.css';

export const SkillsCanvas = () => {
  const gridWidth = 12;
  const gridHeight = 5;
  const spacing = 2.5;

  const getPosition = (rowIndex: number, itemIndex: number, totalItems: number) => {
    const x = (itemIndex - (totalItems - 1) / 2) * spacing;
    const y = (gridHeight / 2 - rowIndex) * spacing;
    const z = (Math.random() - 0.5) * 2;
    return [x, y, z] as [number, number, number];
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 50 }}
      className={styles.canvas}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        {skillsData.map((row, rowIndex) =>
          row.map((skill, itemIndex) => (
            <SkillIconErrorBoundary key={`${rowIndex}-${itemIndex}`}>
              <SkillIcon
                imageUrl={skill.imageUrl}
                fallbackUrl={skill.fallbackUrl}
                position={getPosition(rowIndex, itemIndex, row.length)}
                skillName={skill.name}
              />
            </SkillIconErrorBoundary>
          ))
        )}
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};