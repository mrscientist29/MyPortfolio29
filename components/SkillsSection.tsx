import React from "react";
import styles from "./SkillsSection.module.css";
import { skills, type Skill } from "../helpers/portfolioData";

export const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>My Skills</h2>
      <p className={styles.intro}>
        Technologies and tools I use to bring ideas to life
      </p>
      <div className={styles.skillsContainer}>
        {skills.map((skill: Skill) => (
          <div className={styles.skill} key={skill.name}>
            <div className={styles.skillIconWrapper} style={{ backgroundColor: skill.themeColor }}>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className={styles.skillIcon}
              />
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};