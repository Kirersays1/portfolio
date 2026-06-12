import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import styles from './Hero.module.css';

const phrases = [
  "DATA SCIENTIST",
  "ML ENGINEER",
  "ANALYST",
  "PROBLEM SOLVER",
];

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[phraseIdx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
    }
  }, [displayed, deleting, phraseIdx]);

  return (
    <section className={styles.hero}>
      <div className={styles.terminal}>
        <div className={styles.titleBar}>
          <div className={styles.dots}>
            <span className={styles.dot} style={{background:'#ff5f57'}}/>
            <span className={styles.dot} style={{background:'#ffbd2e'}}/>
            <span className={styles.dot} style={{background:'#28ca41'}}/>
          </div>
          <span className={styles.titleText}>PORTFOLIO.EXE</span>
        </div>
        <div className={styles.body}>
          <div className={styles.promptLine}>
            <span className={styles.prompt}>C:\USER\{personal.name}&gt;</span>
            <span className={styles.cmd}> whoami</span>
          </div>
          <div className={styles.output}>
            <div className={styles.name}>{personal.name}</div>
            <div className={styles.roleRow}>
              <span className={styles.roleLabel}>ROLE: </span>
              <span className={styles.role}>{displayed}</span>
              <span className={styles.cursor}>█</span>
            </div>
            <div className={styles.locationRow}>
              <span className={styles.label}>LOC: </span>
              <span className={styles.val}>{personal.location}</span>
            </div>
          </div>
          <div className={styles.promptLine} style={{marginTop:'32px'}}>
            <span className={styles.prompt}>C:\USER\{personal.name}&gt;</span>
            <span className={styles.cmd}> cat bio.txt</span>
          </div>
          <div className={styles.bio}>{personal.bio}</div>
          <div className={styles.links}>
            <a href={`mailto:${personal.email}`} className={styles.link}>
              [EMAIL]
            </a>
            <a href={`https://${personal.github}`} target="_blank" rel="noreferrer" className={styles.link}>
              [GITHUB]
            </a>
            <a href={`https://${personal.linkedin}`} target="_blank" rel="noreferrer" className={styles.link}>
              [LINKEDIN]
            </a>
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>3+</span>
          <span className={styles.statLabel}>YRS_EXPERIENCE</span>
        </div>
        <div className={styles.statDiv}>//</div>
        <div className={styles.stat}>
          <span className={styles.statNum}>10+</span>
          <span className={styles.statLabel}>MODELS_SHIPPED</span>
        </div>
        <div className={styles.statDiv}>//</div>
        <div className={styles.stat}>
          <span className={styles.statNum}>1K+</span>
          <span className={styles.statLabel}>PREDICTIONS/DAY</span>
        </div>
      </div>
    </section>
  );
}
