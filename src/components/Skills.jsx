import { useState } from 'react';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.title}>SKILL_TREE.DAT</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home/ever/&gt;</span>
          <span className={styles.cmd}> ls -la /skills/</span>
        </div>
        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`${styles.card} ${activeIdx === i ? styles.active : ''}`}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIdx}>[{String(i).padStart(2,'0')}]</span>
                <span className={styles.cardTitle}>{group.category}</span>
                <span className={styles.cardCount}>{group.items.length}_items</span>
              </div>
              <div className={styles.items}>
                {group.items.map(item => (
                  <span key={item} className={styles.item}>
                    <span className={styles.bullet}>▸</span> {item}
                  </span>
                ))}
              </div>
              <div className={styles.bar}>
                <div className={styles.barFill} style={{ width: `${65 + i * 5}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
