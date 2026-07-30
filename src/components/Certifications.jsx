import { useState, useEffect, useRef } from 'react';
import { certifications } from '../data/portfolio';
import styles from './Certifications.module.css';

const levelColor = {
  PROFESSIONAL: '#33FF33',
  SPECIALTY: '#FF9500',
  ASSOCIATE: '#66aaff',
  FUNDAMENTALS: '#aa88ff',
};

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function VerifyBadge({ active }) {
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = (e) => {
    e.stopPropagation();
    if (verified) return;
    setScanning(true);
    setTimeout(() => { setScanning(false); setVerified(true); }, 1400);
  };

  return (
    <button className={`${styles.verifyBtn} ${scanning ? styles.scanning : ''} ${verified ? styles.verified : ''}`} onClick={handleVerify}>
      {scanning ? 'SCANNING...' : verified ? '✓ VERIFIED' : '[ VERIFY ]'}
    </button>
  );
}

function CertCard({ cert, index }) {
  const [flipped, setFlipped] = useState(false);
  const [ref, inView] = useInView();
  const isExpired = cert.expires && new Date(cert.expires) < new Date();

  return (
    <div
      ref={ref}
      className={`${styles.cardOuter} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ''}`} onClick={() => setFlipped(v => !v)}>
        {/* FRONT */}
        <div className={styles.cardFront}>
          <div className={styles.certHeader}>
            <span className={styles.certId}>{cert.id}</span>
            <span
              className={styles.levelBadge}
              style={{ color: levelColor[cert.level], borderColor: levelColor[cert.level] + '44' }}
            >
              {cert.level}
            </span>
          </div>
          <div className={styles.certName}>{cert.name}</div>
          <div className={styles.certIssuer}>{cert.issuer}</div>
          <div className={styles.certDates}>
            <span className={styles.certDate}>ISS: {cert.date}</span>
            <span className={`${styles.certExpiry} ${isExpired ? styles.expired : ''}`}>
              {cert.expires ? `EXP: ${cert.expires}` : 'NO_EXPIRY'}
            </span>
          </div>
          <div className={styles.flipHint}>[ TAP TO VERIFY ]</div>
        </div>

        {/* BACK */}
        <div className={styles.cardBack}>
          <div className={styles.backTitle}>CREDENTIAL_DATA</div>
          <div className={styles.backDivider} />
          <div className={styles.backRow}>
            <span className={styles.backLabel}>CERT_ID:</span>
            <span className={styles.backVal}>{cert.credentialId}</span>
          </div>
          <div className={styles.backRow}>
            <span className={styles.backLabel}>ISSUER:</span>
            <span className={styles.backVal}>{cert.issuer}</span>
          </div>
          <div className={styles.backRow}>
            <span className={styles.backLabel}>STATUS:</span>
            <span className={styles.backVal} style={{ color: isExpired ? '#ff4444' : '#33FF33' }}>
              {isExpired ? 'EXPIRED' : 'ACTIVE'}
            </span>
          </div>
          <VerifyBadge />
          <div className={styles.flipHint}>[ TAP TO CLOSE ]</div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [filter, setFilter] = useState('ALL');
  const levels = ['ALL', ...new Set(certifications.map(c => c.level))];
  const filtered = filter === 'ALL' ? certifications : certifications.filter(c => c.level === filter);

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.title}>CERTS.REGISTRY</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home/&gt;</span>
          <span className={styles.cmd}> query credentials --status=active --sort=date</span>
        </div>

        {/* Filter bar */}
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>FILTER_BY:</span>
          {levels.map(lvl => (
            <button
              key={lvl}
              className={`${styles.filterBtn} ${filter === lvl ? styles.filterActive : ''}`}
              style={filter === lvl && lvl !== 'ALL' ? { color: levelColor[lvl], borderColor: levelColor[lvl] + '66' } : {}}
              onClick={() => setFilter(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerText}>
            RECORDS_FOUND: {filtered.length} / {certifications.length} &nbsp;|&nbsp; TAP_CARD: FLIP FOR CREDENTIAL ID
          </span>
        </div>
      </div>
    </section>
  );
}
