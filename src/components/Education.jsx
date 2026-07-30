import { useState, useEffect, useRef } from 'react';
import { education } from '../data/portfolio';
import styles from './Education.module.css';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function EduCard({ edu, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''} ${expanded ? styles.expanded : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Card header — always visible */}
      <button className={styles.cardToggle} onClick={() => setExpanded(v => !v)} aria-expanded={expanded}>
        <div className={styles.cardLeft}>
          <span className={styles.eduId}>{edu.id}</span>
          <div className={styles.titleGroup}>
            <span className={styles.degree}>{edu.degree}</span>
            <span className={styles.institution}>{edu.institution}</span>
          </div>
        </div>
        <div className={styles.cardRight}>
          <span className={styles.period}>{edu.period}</span>
          <span className={styles.chevron}>{expanded ? '▲' : '▼'}</span>
        </div>
      </button>

      {/* Expandable body */}
      <div className={`${styles.cardBody} ${expanded ? styles.open : ''}`}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>LOCATION:</span>
            <span className={styles.metaVal}>{edu.location}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>GPA:</span>
            <span className={styles.metaVal} style={{ color: 'var(--green)' }}>{edu.gpa}</span>
          </div>
        </div>

        <div className={styles.thesisBlock}>
          <span className={styles.thesisLabel}>THESIS_FILE:</span>
          <span className={styles.thesisText}>"{edu.thesis}"</span>
        </div>

        <div className={styles.highlightList}>
          <span className={styles.hlLabel}>NOTABLE.LOG</span>
          {edu.highlights.map((h, i) => (
            <div key={i} className={styles.hlItem}>
              <span className={styles.hlMarker}>[{String(i + 1).padStart(2, '0')}]</span>
              <span className={styles.hlText}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.title}>EDUCATION.DAT</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home/ever&gt;</span>
          <span className={styles.cmd}> find /education -name "*.degree" -exec cat {'{}' } \;</span>
        </div>
        <div className={styles.cards}>
          {education.map((edu, i) => (
            <EduCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
