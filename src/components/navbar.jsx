import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navItems = ['SKILLS', 'PROJECTS', 'WORK', 'ARTICLES'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = navItems.map(id => document.getElementById(id.toLowerCase()));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.toUpperCase()); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoText}>DATA.SYS</span>
        <span className={styles.cursor}>█</span>
      </div>
      <div className={styles.links}>
        {navItems.map(item => (
          <button
            key={item}
            className={`${styles.link} ${active === item ? styles.active : ''}`}
            onClick={() => scrollTo(item)}
          >
            {active === item && <span className={styles.prompt}>&gt; </span>}
            {item}
          </button>
        ))}
      </div>
      <div className={styles.clock}>{time}</div>
    </nav>
  );
}
