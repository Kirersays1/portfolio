import { publications } from '../data/portfolio';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.title}>publications.DB</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home&gt;</span>
          <span className={styles.cmd}> SELECT * FROM publications ORDER BY date DESC;</span>
        </div>
        <div className={styles.tableHeader}>
          <span className={styles.colId}>ID</span>
          <span className={styles.colTitle}>TITLE</span>
          <span className={styles.colDate}>DATE</span>
          <span className={styles.colTags}>TAGS</span>
        </div>
        <div className={styles.tableBody}>
          {publications.map((art) => (
            <a key={art.id} href={art.link} className={styles.row}>
              <span className={styles.colId}>{art.id}</span>
              <div className={styles.colTitle}>
                <span className={styles.artTitle}>{art.title}</span>
                <span className={styles.artExcerpt}>{art.excerpt}</span>
              </div>
              <span className={styles.colDate}>{art.date}</span>
              <div className={styles.colTags}>
                {art.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
