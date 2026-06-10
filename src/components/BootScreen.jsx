import { useState, useEffect } from 'react';
import styles from './BootScreen.module.css';

const bootLines = [
  "BIOS v2.31 (C) 2001 DATA_SYS INC.",
  "CPU: INTEL 8086 @ 4.77MHz",
  "MEMORY TEST: 640K OK",
  "LOADING KERNEL...",
  "INITIALIZING DISPLAY ADAPTER...",
  "MOUNTING /dev/portfolio...",
  "LOADING PROFILE: EVER_RODRIGUEZ.DAT",
  "PARSING SKILLS DATABASE...",
  "LOADING PROJECT MANIFESTS...",
  "ESTABLISHING CONNECTIONS...",
  "SYSTEM READY.",
  "",
  "C:\\> _",
];

export default function BootScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines(prev => [...prev, bootLines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, 110);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`${styles.boot} ${done ? styles.fadeOut : ''}`}>
      <div className={styles.screen}>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>{line}</div>
        ))}
      </div>
    </div>
  );
}
