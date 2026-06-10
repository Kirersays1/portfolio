import { useState } from 'react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

const statusColor = { DEPLOYED: '#33FF33', ACTIVE: '#FF9500', ARCHIVED: '#555' };

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.title}>PROJECT_MANIFEST.LST</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>C:\&gt;</span>
          <span className={styles.cmd}> dir /projects/*.exe</span>
        </div>
        <div className={styles.layout}>
          <div className={styles.list}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`${styles.listItem} ${selected === i ? styles.selected : ''}`}
                onClick={() => setSelected(i)}
              >
                <span className={styles.itemId}>{p.id}</span>
                <span className={styles.itemName}>{p.name}</span>
                <span
                  className={styles.itemStatus}
                  style={{ color: statusColor[p.status] }}
                >
                  {p.status}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.detail}>
            <div className={styles.detailHeader}>
              <span className={styles.detailId}>{proj.id}</span>
              <span className={styles.detailStatus} style={{ color: statusColor[proj.status], borderColor: statusColor[proj.status] }}>
                ● {proj.status}
              </span>
              <span className={styles.detailYear}>{proj.year}</span>
            </div>
            <h3 className={styles.detailName}>{proj.name}</h3>
            <div className={styles.detailDivider} />
            <p className={styles.detailDesc}>{proj.description}</p>
            <div className={styles.tags}>
              {proj.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href={proj.link} className={styles.detailBtn}>
              &gt;&gt; VIEW_SOURCE.CMD
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
