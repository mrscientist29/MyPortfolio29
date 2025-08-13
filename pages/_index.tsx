import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";
import styles from "./_index.module.css";

import { Navigation } from "../components/Navigation";
import { SpaceBackground } from "../components/SpaceBackground";
import { EnergyPortal } from "../components/EnergyPortal";
import { FloatingTechIcons } from "../components/FloatingTechIcons";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import { SkillsCanvas } from "../components/SkillsCanvas";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Loader } from "../components/Loader";
import { personalInfo } from "../helpers/portfolioData";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} - Fullstack Developer Portfolio</title>
        <meta name="description" content="Fullstack Developer Portfolio - Providing the best project experience in Website, Mobile, and Software development." />
      </Helmet>
      
      <main className={styles.mainLayout}>
        <Navigation />
        <SpaceBackground />
        
        <div className={styles.canvasContainer}>
          <ErrorBoundary>
            <Canvas
              className={styles.canvas}
              camera={{ position: [0, 0, 10], fov: 75 }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                
                <EnergyPortal />
                <FloatingTechIcons />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        </div>

        <div className={styles.contentOverlay}>
          <section className={styles.heroSection}>
            <HeroSection />
          </section>

          <section id="about" className={styles.section}>
            <div className={styles.sectionContent}>
              <AboutSection />
            </div>
          </section>

          <section id="education" className={styles.section}>
            <div className={styles.sectionContent}>
              <EducationSection />
            </div>
          </section>

          <section id="skills" className={styles.section}>
            <div className={styles.sectionContent}>
              <div className={styles.skillsWrapper}>
                <h2 className={styles.skillsHeading}>My Skills</h2>
                <p className={styles.skillsIntro}>
                  Explore my technical expertise through this interactive 3D showcase
                </p>
                <div className={styles.skillsCanvasWrapper}>
                  <SkillsCanvas />
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className={styles.section}>
            <div className={styles.sectionContent}>
              <ProjectsSection />
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <div className={styles.sectionContent}>
              <ContactSection />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default IndexPage;