import { work } from '../data/portfolio';
import styles from './Work.module.css';

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.title}>WORK_HISTORY.LOG</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home/ever/&gt;</span>
          <span className={styles.cmd}> cat /var/log/career.log | grep -v ERROR</span>
        </div>
        <div className={styles.timeline}>
          {work.map((job, i) => (
            <div key={job.company} className={styles.entry}>
              <div className={styles.timelineLeft}>
                <div className={styles.node} />
                {i < work.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.companyRow}>
                    <span className={styles.company}>{job.company}</span>
                    <span className={styles.location}>{job.location}</span>
                  </div>
                  <div className={styles.roleRow}>
                    <span className={styles.role}>{job.role}</span>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                </div>
                <div className={styles.cardDivider} />
                <p className={styles.desc}>{job.description}</p>
                <div className={styles.achievements}>
                  {job.achievements.map((a, j) => (
                    <div key={j} className={styles.achievement}>
                      <span className={styles.checkmark}>✓</span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
