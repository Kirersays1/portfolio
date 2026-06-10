import { articles } from '../data/portfolio';
import styles from './Articles.module.css';

export default function Articles() {
  return (
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.title}>ARTICLES.DB</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>C:\&gt;</span>
          <span className={styles.cmd}> SELECT * FROM articles ORDER BY date DESC;</span>
        </div>
        <div className={styles.tableHeader}>
          <span className={styles.colId}>ID</span>
          <span className={styles.colTitle}>TITLE</span>
          <span className={styles.colDate}>DATE</span>
          <span className={styles.colRead}>READ_TIME</span>
          <span className={styles.colTags}>TAGS</span>
        </div>
        <div className={styles.tableBody}>
          {articles.map((art) => (
            <a key={art.id} href={art.link} className={styles.row}>
              <span className={styles.colId}>{art.id}</span>
              <div className={styles.colTitle}>
                <span className={styles.artTitle}>{art.title}</span>
                <span className={styles.artExcerpt}>{art.excerpt}</span>
              </div>
              <span className={styles.colDate}>{art.date}</span>
              <span className={styles.colRead}>{art.readTime}</span>
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
