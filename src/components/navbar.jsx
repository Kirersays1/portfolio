import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navItems = ['SKILLS', 'PROJECTS', 'WORK', 'PUBLICATIONS', 'EDUCATION', 'CERTS', 'HOBBIES', 'CONTACT'];
const sectionIds = ['skills', 'projects', 'work', 'publications', 'education', 'certifications', 'hobbies', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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
    const sections = sectionIds.map(id => document.getElementById(id));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.toUpperCase()); });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoText}>DATA.SYS</span>
          <span className={styles.cursor}>█</span>
        </div>

        {/* Desktop links */}
        <div className={styles.links}>
          {navItems.map((item, i) => {
            const sid = sectionIds[i];
            const isActive = active === item || (item === 'CERTS' && active === 'CERTIFICATIONS');
            return (
              <button
                key={item}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={() => scrollTo(sid)}
              >
                {isActive && <span className={styles.prompt}>&gt; </span>}
                {item}
              </button>
            );
          })}
        </div>

        <div className={styles.right}>
          <div className={styles.clock}>{time}</div>
          {/* Hamburger for mobile */}
          <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span className={styles.hLine} />
            <span className={styles.hLine} />
            <span className={styles.hLine} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerPrompt}>C:\&gt; SELECT_SECTION</span>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        {navItems.map((item, i) => {
          const sid = sectionIds[i];
          const isActive = active === item || (item === 'CERTS' && active === 'CERTIFICATIONS');
          return (
            <button
              key={item}
              className={`${styles.drawerItem} ${isActive ? styles.drawerActive : ''}`}
              onClick={() => scrollTo(sid)}
            >
              <span className={styles.drawerIdx}>[{String(i + 1).padStart(2,'0')}]</span>
              <span>{item}</span>
              {isActive && <span className={styles.drawerDot}>●</span>}
            </button>
          );
        })}
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}
