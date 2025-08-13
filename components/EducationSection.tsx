import React from "react";
import { GraduationCap } from "lucide-react";
import { education, type Education } from "../helpers/portfolioData";
import styles from "./EducationSection.module.css";

export const EducationSection = () => {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationGrid}>
        {education.map((edu: Education, index: number) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <GraduationCap className={styles.icon} />
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>
                  {edu.institution}, {edu.location}
                </p>
              </div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.date}>{edu.date}</p>
              {edu.status && <span className={styles.status}>{edu.status}</span>}
            </div>
            {edu.focus && <p className={styles.focus}>Focus: {edu.focus}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};