import { useState, useEffect, useRef } from 'react';
import { contact } from '../data/portfolio';
import styles from './Contact.module.css';

const FIELDS = [
  { key: 'name', label: 'YOUR_NAME', placeholder: 'John_Doe', type: 'text' },
  { key: 'email', label: 'YOUR_EMAIL', placeholder: 'you@domain.com', type: 'email' },
  { key: 'subject', label: 'SUBJECT', placeholder: 'Collaboration_Proposal', type: 'text' },
  { key: 'message', label: 'MESSAGE', placeholder: 'Type your message here...', type: 'textarea' },
];

const SOCIAL = [
  { label: 'GITHUB', value: contact.github, icon: '⌥', href: `https://${contact.github}` },
  { label: 'LINKEDIN', value: contact.linkedin, icon: '◈', href: `https://${contact.linkedin}` },
  { label: 'EMAIL', value: contact.email, icon: '✉', href: `mailto:${contact.email}` },
];

function MatrixChar() {
  const chars = '01アイウエオABCDEFGHIJKLMNOP!@#$%^&*';
  const [ch, setCh] = useState('0');
  useEffect(() => {
    const id = setInterval(() => setCh(chars[Math.floor(Math.random() * chars.length)]), 80);
    return () => clearInterval(id);
  }, []);
  return <span className={styles.matrixChar}>{ch}</span>;
}

function StatusLine({ label, value, color }) {
  return (
    <div className={styles.statusLine}>
      <span className={styles.statusLabel}>{label}:</span>
      <span className={styles.statusDots}>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={styles.dot} style={{ background: color, animationDelay: `${i * 0.3}s` }} />
        ))}
      </span>
      <span className={styles.statusVal} style={{ color }}>{value}</span>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [log, setLog] = useState([]);
  const logRef = useRef(null);

  const addLog = (msg, color = '#666') => {
    setLog(prev => [...prev, { msg, color, id: Date.now() + Math.random() }]);
  };

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const handleChange = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }));
  };

  const handleFocus = (key) => {
    setActiveField(key);
    addLog(`> FIELD_FOCUS: ${key.toUpperCase()}`, '#444');
  };

  const handleSubmit = () => {
    const empty = FIELDS.filter(f => !form[f.key]);
    if (empty.length) {
      addLog(`> ERROR: Missing fields: ${empty.map(f => f.key).join(', ')}`, '#ff4444');
      return;
    }
    setSending(true);
    addLog('> INITIALIZING TRANSMISSION...', '#FF9500');
    const steps = [
      ['> ENCRYPTING PAYLOAD...', '#FF9500'],
      ['> ROUTING TO MAIL', '#FF9500'],
      ['> HANDSHAKE_OK — MESSAGE DELIVERED ✓', '#33FF33'],
    ];
    steps.forEach(([msg, color], i) => {
      setTimeout(() => {
        addLog(msg, color);
        if (i === steps.length - 1) { setSending(false); setSubmitted(true); }
      }, (i + 1) * 700);
    });
  };

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setLog([]);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.title}>CONTACT.SH</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.prompt}>
          <span className={styles.green}>/home/ever/&gt;</span>
          <span className={styles.cmd}> ./contact.sh --init-session --encrypt</span>
        </div>

        <div className={styles.layout}>
          {/* Left: form terminal */}
          <div className={styles.formPanel}>
            <div className={styles.termBar}>
              <div className={styles.termDots}>
                <span style={{background:'#ff5f57'}} className={styles.termDot}/>
                <span style={{background:'#ffbd2e'}} className={styles.termDot}/>
                <span style={{background:'#28ca41'}} className={styles.termDot}/>
              </div>
              <span className={styles.termTitle}>COMPOSE_MESSAGE.SH</span>
            </div>

            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successTitle}>TRANSMISSION_COMPLETE</div>
                <div className={styles.successText}>Message delivered to <span className={styles.green2}>{contact.email}</span></div>
                <div className={styles.successText}>Expected response: <span style={{color:'#FF9500'}}>{contact.responseTime}</span></div>
                <button className={styles.resetBtn} onClick={handleReset}>&gt; COMPOSE_NEW.SH</button>
              </div>
            ) : (
              <div className={styles.formBody}>
                {FIELDS.map(field => (
                  <div key={field.key} className={`${styles.fieldRow} ${activeField === field.key ? styles.fieldActive : ''}`}>
                    <label className={styles.fieldLabel}>
                      <span className={styles.promptChar}>&gt;</span> {field.label}:
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        className={styles.fieldInput}
                        rows={4}
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        onChange={e => handleChange(field.key, e.target.value)}
                        onFocus={() => handleFocus(field.key)}
                        onBlur={() => setActiveField(null)}
                      />
                    ) : (
                      <input
                        className={styles.fieldInput}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        onChange={e => handleChange(field.key, e.target.value)}
                        onFocus={() => handleFocus(field.key)}
                        onBlur={() => setActiveField(null)}
                      />
                    )}
                  </div>
                ))}
                <button
                  className={`${styles.submitBtn} ${sending ? styles.sending : ''}`}
                  onClick={handleSubmit}
                  disabled={sending}
                >
                  {sending ? (
                    <><MatrixChar /><MatrixChar /> TRANSMITTING... <MatrixChar /><MatrixChar /></>
                  ) : (
                    '>> SEND_MESSAGE.EXE'
                  )}
                </button>
              </div>
            )}

            {/* Log output */}
            {log.length > 0 && (
              <div className={styles.logBox} ref={logRef}>
                {log.map(l => (
                  <div key={l.id} className={styles.logLine} style={{ color: l.color }}>{l.msg}</div>
                ))}
              </div>
            )}
          </div>

          {/* Right: status + socials */}
          <div className={styles.infoPanel}>
            <div className={styles.statusBlock}>
              <div className={styles.blockTitle}>SYS_STATUS</div>
              <StatusLine label="AVAILABILITY" value={contact.availability} color="#33FF33" />
              <StatusLine label="RESPONSE_TIME" value={contact.responseTime} color="#FF9500" />
              <StatusLine label="LOCATION" value={contact.location} color="#66aaff" />
            </div>

            <div className={styles.socialBlock}>
              <div className={styles.blockTitle}>NETWORK_LINKS</div>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialItem}>
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialLabel}>{s.label}</span>
                    <span className={styles.socialVal}>{s.value}</span>
                  </div>
                  <span className={styles.socialArrow}>→</span>
                </a>
              ))}
            </div>

            <div className={styles.encodingBlock}>
              <div className={styles.blockTitle}>TRANSMISSION_INFO</div>
              <div className={styles.encRow}><span className={styles.encKey}>PROTOCOL:</span><span className={styles.encVal}>SMTP_SECURE</span></div>
              <div className={styles.encRow}><span className={styles.encKey}>ENCODING:</span><span className={styles.encVal}>UTF-8</span></div>
              <div className={styles.encRow}><span className={styles.encKey}>ENCRYPT:</span><span className={styles.encVal} style={{color:'#33FF33'}}>TLS_1.3 ✓</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
