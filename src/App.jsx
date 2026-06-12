import { useState, useCallback } from 'react';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Articles from './components/Articles';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  const [booted, setBooted] = useState(false);

  const handleBoot = useCallback(() => {
    setBooted(true);
  }, []);

 return (
    <>
      <BootScreen onComplete={handleBoot} />
      <div className={`${styles.app} ${booted ? styles.visible : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <div className={styles.sectionWrapper}><Skills /></div>
          <div className={styles.sectionWrapper}><Projects /></div>
          <div className={styles.sectionWrapper}><Work /></div>
          <div className={styles.sectionWrapper}><Articles /></div>
          <div className={styles.sectionWrapper}><Education /></div>
          <div className={styles.sectionWrapper}><Certifications /></div>
          <div className={styles.sectionWrapper}><Hobbies /></div>
          <div className={styles.sectionWrapper}><Contact /></div>
        </main>
        <Footer />
      </div>
    </>
  );
}
