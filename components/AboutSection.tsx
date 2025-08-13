import React from "react";
import styles from "./AboutSection.module.css";
import { personalInfo, skills, experiences, type Skill, type Experience } from "../helpers/portfolioData";

export const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.intro}>
        {personalInfo.bio}
      </p>

      <div className={styles.skills}>
        <h3 className={styles.subheading}>My Skills</h3>
        <div className={styles.skillsGrid}>
          {skills.map((skill: Skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillIconWrapper} style={{ backgroundColor: skill.themeColor }}>
                <img src={skill.imageUrl} alt={skill.name} className={styles.skillIcon} />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.experience}>
        <h3 className={styles.subheading}>Work Experience</h3>
        <div className={styles.timeline}>
          {experiences.map((exp: Experience, index: number) => (
            <div key={`exp-${index}`} className={styles.timelineItem}>
              <div className={styles.timelineIconWrapper}>
                <div className={styles.timelineIcon}>
                  <img src={exp.icon} alt={exp.company_name} />
                </div>
              </div>
              <div className={styles.timelineContent}>
                <h4>{exp.title}</h4>
                <p className={styles.companyName}>{exp.company_name} | {exp.location}</p>
                <p className={styles.date}>{exp.date}</p>
                <ul className={styles.points}>
                  {exp.points.map((point: string, i: number) => (
                    <li key={`point-${i}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};