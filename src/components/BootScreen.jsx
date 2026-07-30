import { useState, useEffect } from 'react';
import styles from './BootScreen.module.css';

const bootLines = [
  "BIOS v9.11 (C) 2001 DATA_SYS INC.",
  "CPU: INTEL 845 @ 1.7GHz",
  "MEMORY TEST: 1GB OK",
  "LOADING KERNEL...",
  "INITIALIZING DISPLAY ADAPTER...",
  "MOUNTING HOME DIRECTORY : /home/ever...",
  "LOADING PROFILE: EVER_RODRIGUEZ.DAT",
  "PARSING SKILLS DATABASE...",
  "I CAN STILL REMEMBER YOU",
  "LOADING PROJECT MANIFESTS...",
  "ESTABLISHING CONNECTIONS...",
  "SYSTEM READY.",
  "",
  "/home/ever$ _",
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
