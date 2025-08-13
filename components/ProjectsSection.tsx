import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styles from "./ProjectsSection.module.css";
import { projects, type Project } from "../helpers/portfolioData";

export const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>My Projects</h2>
      <p className={styles.intro}>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project: Project) => (
          <div className={styles.projectCard} key={project.name}>
            <div className={styles.cardIconContainer} style={{ backgroundColor: project.themeColor }}>
              <img src={project.iconUrl} alt={project.name} className={styles.cardIcon} />
            </div>
            <h3 className={styles.cardTitle}>{project.name}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.cardFooter}>
              <Link to={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                Live Link <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};