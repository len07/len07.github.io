import React from "react";
import styles from "../styles/components/Experience.module.css";
import { experiences } from "./data/portfolioData";

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} fade-in`}>Experience</h2>
        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <div
              key={`exp-${index}`}
              className={`${styles.experienceCard} fade-in`}
            >
              <div className={`${styles.experienceInner} experienceInner`}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3>{exp.title}</h3>
                    <div className={styles.role}>{exp.company}</div>
                  </div>
                  <div className={styles.experienceDate}>{exp.date}</div>
                </div>
                <div className={styles.description}>{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
