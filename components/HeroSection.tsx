import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { personalInfo } from "../helpers/portfolioData";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  currentStage?: number | null;
}

export const HeroSection = ({ currentStage }: HeroSectionProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <Badge variant="secondary" className={styles.badge}>
            {personalInfo.tagline}
          </Badge>
          
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.gradientText}>{personalInfo.name}</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            {personalInfo.bio}
          </p>
          
          <Button size="lg" className={styles.learnMoreButton}>
            Learn more
          </Button>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.profilePhotoContainer}>
            <div className={styles.profilePhotoWrapper}>
              <img 
                src="https://assets.floot.app/43990730-7b12-477f-bb8e-52191b503a40/ed2dc9b6-6f40-43b6-8c57-660723fc4fc3.jpg" 
                alt={`${personalInfo.name} - Professional Profile Photo`}
                className={styles.profilePhoto}
                loading="eager"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                }}
              />
              <div className={styles.profilePhotoGlow}></div>
              <div className={styles.profilePhotoBorder}></div>
              <div className={styles.particleTrail}>
                <span className={styles.particle}></span>
                <span className={styles.particle}></span>
                <span className={styles.particle}></span>
                <span className={styles.particle}></span>
                <span className={styles.particle}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};