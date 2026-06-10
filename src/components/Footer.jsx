import styles from './Footer.module.css';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.logo}>DATA.SYS</span>
        <span className={styles.name}>{personal.name}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} // BUILT_WITH: REACT + VITE + ♥
        </span>
        <span className={styles.uptime}>
          UPTIME: {Math.floor(performance.now() / 1000)}s
        </span>
      </div>
    </footer>
  );
}
