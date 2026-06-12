import { useState, useEffect, useRef } from 'react';
import { hobbies } from '../data/portfolio';
import styles from './Hobbies.module.css';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function ProgressBar({ level, inView, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(t);
    }
  }, [inView, level, delay]);

  const blocks = Math.round((width / 100) * 20);
  const bar = '█'.repeat(blocks) + '░'.repeat(20 - blocks);

  return (
    <div className={styles.progressWrap}>
      <span className={styles.barChars}>{bar}</span>
      <span className={styles.barPct}>{width}%</span>
    </div>
  );
}

function HobbyCard({ hobby, index, inView }) {
  const [active, setActive] = useState(false);
  const [outputLines, setOutputLines] = useState([]);

  const runCommand = () => {
    if (active) { setActive(false); setOutputLines([]); return; }
    setActive(true);
    setOutputLines([]);
    const lines = [
      `> LOADING ${hobby.id}...`,
      `> TAGS: ${hobby.tags.join(', ')}`,
      `> ${hobby.description}`,
      `> PROFICIENCY: ${hobby.level}%`,
      '> STATUS: ACTIVE',
    ];
    lines.forEach((line, i) => {
      setTimeout(() => setOutputLines(prev => [...prev, line]), i * 160);
    });
  };

  return (
    <div
      className={`${styles.card} ${inView ? styles.visible : ''} ${active ? styles.active : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button className={styles.cardBtn} onClick={runCommand}>
        <div className={styles.cardTop}>
          <div className={styles.nameGroup}>
            <span className={styles.hobbyId}>{hobby.id}</span>
            <span className={styles.hobbyName}>{hobby.name}</span>
          </div>
          <span className={styles.execHint}>{active ? '[CLOSE]' : '[RUN]'}</span>
        </div>
        <ProgressBar level={hobby.level} inView={inView} delay={index * 120 + 300} />
      </button>

      {/* Terminal output on expand */}
      <div className={`${styles.output} ${active ? styles.outputOpen : ''}`}>
        {outputLines.map((line, i) => (
          <div key={i} className={styles.outputLine}>{line}</div>
        ))}
        {active && outputLines.length > 0 && (
          <div className={styles.tags}>
            {hobby.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hobbies() {
  const [ref, inView] = useInView();

  return (
    <section id="hobbies" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.title}>HOBBIES.EXE</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>C:\&gt;</span>
          <span className={styles.cmd}> ps aux | grep "interests" --color</span>
        </div>
        <div className={styles.hint}>
          <span className={styles.hintTxt}>// Click any process to inspect</span>
        </div>
        <div className={styles.list}>
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
