import { useState, useEffect } from 'react';
import AgeForm from './components/AgeForm';
import AgeResult from './components/AgeResult';
import Countdown from './components/Countdown';
import ZodiacSign from './components/ZodiacSign';
import './styles/app.css';

function App() {
  const [dob, setDob] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <h1>🧮 Age Calculator</h1>
        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
        </button>
      </div>

      {/* Extra Content */}
      <div className="intro-text">
        <p style={{ fontSize: '1.1rem', color: 'var(--text-primary, #333)' }  }>
          Enter your date of birth to instantly calculate your exact age, see your next birthday countdown, and discover your zodiac sign!
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary, #666)' }}>
          This tool is free, private, and works on any device.
        </p>
      </div>

      <AgeForm onDateChange={setDob} />
      {dob && (
        <>
          <AgeResult dob={dob} />
          <div className="side-by-side-container">
            <div className="side-card">
              <Countdown dob={dob} />
            </div>
            <div className="side-card">
              <ZodiacSign dob={dob} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;