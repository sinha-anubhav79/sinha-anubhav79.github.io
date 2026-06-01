import React from 'react';
import styles from './ResumeDocument.module.css';

export default function ResumeDocument({ data }) {
  if (!data) return null;

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.document}>
        
        {/* HEADER */}
        <div className={styles.name}>{data.name}</div>
        <div className={styles.contact}>
          {data.contact[0]} | {data.contact[1]} | <a href={`mailto:${data.contact[2]}`}>{data.contact[2]}</a> | <a href={`https://${data.contact[3]}`} target="_blank" rel="noreferrer">{data.contact[3]}</a> | <a href={`https://${data.contact[4]}`} target="_blank" rel="noreferrer">{data.contact[4]}</a> | <a href={`https://github.com${data.contact[5]}`} target="_blank" rel="noreferrer">{data.contact[5]}</a>
        </div>

        {/* SUMMARY */}
        <div className={styles.sectionTitle}>SUMMARY</div>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: data.summary.replace('Full-Stack Software Engineer', '<b>Full-Stack Software Engineer</b>').replace('Oracle and Microsoft', '<b>Oracle and Microsoft</b>').replace('high-throughput distributed systems', '<b>high-throughput distributed systems</b>').replace('backend-leaning across the stack', '<b>Backend-leaning across the stack</b>').replace('low-latency microservices', '<b>low-latency microservices</b>').replace('performant frontend', '<b>performant frontend</b>').replace('in-memory caching', '<b>in-memory caching</b>') }} />

        {/* EXPERIENCE */}
        <div className={styles.sectionTitle}>EXPERIENCE</div>
        {data.experience.map((exp, expIdx) => (
          <div key={`exp-${expIdx}`} className={styles.entry}>
            <div className={styles.flexBetween}>
              <span className={styles.bold}>{exp.company}</span>
              <span>{exp.location}</span>
            </div>
            {exp.roles.map((role, roleIdx) => (
              <div key={`role-${roleIdx}`}>
                <div className={`${styles.flexBetween} ${styles.entryHeader}`}>
                  <span className={styles.italic}>{role.title}</span>
                  <span className={styles.italic}>{role.dates}</span>
                </div>
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet, bulletIdx) => (
                    <li key={`bullet-${bulletIdx}`} dangerouslySetInnerHTML={{__html: bullet.replace(/([0-9]+%)/g, '<b>$1</b>').replace('Kafka', '<b>Kafka</b>').replace('Helm toggles', '<b>Helm toggles</b>').replace('zero-downtime migration', '<b>zero-downtime migration</b>').replace('protocol translation layer', '<b>protocol translation layer</b>').replace('10k RPS', '<b>10k RPS</b>').replace('5ms latency', '<b>5ms latency</b>').replace('configurable alerting workflows', '<b>configurable alerting workflows</b>').replace('Next.js', '<b>Next.js</b>').replace('RESTful APIs', '<b>RESTful APIs</b>').replace('Oracle Coherence', '<b>Oracle Coherence</b>').replace('runbooks', '<b>runbooks</b>').replace('Java 8-to-21 migration', '<b>Java 8-to-21 migration</b>').replace('Groovy/Spock', '<b>Groovy/Spock</b>').replace('hybrid deployments', '<b>hybrid deployments</b>').replace('sub-50ms latency', '<b>sub-50ms latency</b>').replace('performance regression', '<b>performance regression</b>').replace('round-trip latency', '<b>round-trip latency</b>').replace('people picker component', '<b>people picker component</b>').replace('100% text-editing functionality', '<b>100% text-editing functionality</b>')}} />
                  ))}
                </ul>
                {role.techStack && (
                  <div className={styles.techStack}>Tech Stack — {role.techStack}</div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* SKILLS */}
        <div className={styles.sectionTitle}>SKILLS</div>
        <ul className={styles.bullets}>
          {data.skills.map((skill, idx) => (
            <li key={`skill-${idx}`}>
              <span className={styles.bold}>{skill.category}:</span> {skill.items}
            </li>
          ))}
        </ul>

        {/* PROJECTS */}
        <div className={styles.sectionTitle}>PROJECTS</div>
        {data.projects.map((proj, idx) => (
          <div key={`proj-${idx}`} className={styles.entry}>
            <div className={`${styles.flexBetween} ${styles.entryHeader}`}>
              <span><span className={styles.bold}>{proj.title}</span> <span style={{fontFamily: "sans-serif"}}>github web</span> — <span className={styles.italic}>{proj.techStack}</span></span>
              <span>{proj.dates}</span>
            </div>
            <ul className={styles.bullets}>
              {proj.bullets.map((bullet, bIdx) => (
                <li key={`p-bullet-${bIdx}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* EDUCATION */}
        <div className={styles.sectionTitle}>EDUCATION</div>
        {data.education.map((edu, idx) => (
          <div key={`edu-${idx}`} className={styles.entry}>
            <div className={`${styles.flexBetween} ${styles.entryHeader}`}>
              <span><span className={styles.bold}>{edu.institute}</span> | {edu.location}</span>
              <span className={styles.bold}>{edu.dates}</span>
            </div>
            <div className={styles.flexBetween}>
              <span className={styles.italic}>{edu.degree}</span>
              <span>{edu.gpa}</span>
            </div>
          </div>
        ))}

        {/* ACHIEVEMENTS */}
        <div className={styles.sectionTitle}>ACHIEVEMENTS</div>
        <ul className={styles.bullets}>
          {data.achievements.map((ach, idx) => (
            <li key={`ach-${idx}`} dangerouslySetInnerHTML={{__html: ach.replace('Rated 1800+', '<b>Rated 1800+</b>').replace('700+ LeetCode problems', '<b>700+ LeetCode problems</b>').replace('Global Rank 135', '<b>Global Rank 135</b>')}} />
          ))}
        </ul>
      </div>
    </div>
  );
}
