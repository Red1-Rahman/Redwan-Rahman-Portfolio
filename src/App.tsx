import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { generateRandomColors } from './utils/randomColors';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Lazy load pages for better performance
const preloadAbout = () => import('./pages/About');
const About = React.lazy(preloadAbout);
const preloadArticles = () => import('./pages/Articles');
const Articles = React.lazy(preloadArticles);
const preloadPoems = () => import('./pages/poems');
const Poems = React.lazy(preloadPoems);
const preloadAiMlDeveloper = () => import('./pages/AiMlDeveloper');
const AiMlDeveloper = React.lazy(preloadAiMlDeveloper);
const preloadGameDeveloper = () => import('./pages/GameDeveloper');
const GameDeveloper = React.lazy(preloadGameDeveloper);
const preloadQuantumProgrammer = () => import('./pages/QuantumProgrammer');
const QuantumProgrammer = React.lazy(preloadQuantumProgrammer);

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function MainContent() {
  const [showMessage, setShowMessage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const handleCVDownload = useCallback((type: string) => {
  setIsDropdownOpen(false);

  if (type === 'quantum') {
    try {
      const link = document.createElement('a');
      link.href = '/assets/CV/Redwan Rahman Quantum CV.pdf';
      link.download = 'Redwan Rahman Quantum CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  } else if (type === 'aiml') {
    try {
      const link = document.createElement('a');
      link.href = '/assets/CV/Redwan Rahman AIML CV.pdf';
      link.download = 'Redwan Rahman AIML CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  } else {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  }
}, []);


  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.cv-dropdown-container');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="App">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* CV Dropdown Button */}
      <div className="cv-dropdown-container">
        <button 
          className="cv-dropdown-button" 
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          Download CV
          <span style={{ 
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ▼
          </span>
        </button>
        
        {isDropdownOpen && (
          <div className="cv-dropdown-menu" role="menu">
            <button 
              className="cv-dropdown-item" 
              onClick={() => handleCVDownload('aiml')}
              role="menuitem"
            >
              AI/ML Developer
            </button>
            <button 
              className="cv-dropdown-item" 
              onClick={() => handleCVDownload('quantum')}
              role="menuitem"
            >
              Quantum Developer
            </button>
            <button 
              className="cv-dropdown-item" 
              onClick={() => handleCVDownload('game')}
              role="menuitem"
            >
              Game Developer
            </button>
          </div>
        )}
      </div>

      {/* Message Overlay */}
      {showMessage && (
        <div className="message-overlay" onClick={() => setShowMessage(false)}>
          <div className="message-content" onClick={(e) => e.stopPropagation()}>
            Content has not uploaded yet
          </div>
        </div>
      )}

      <header className="hero">
        <div className="profile-container">
          <img
            src="/assets/images/My Formal Pic.jpg"
            alt="Redwan Rahman"
            className="profile-picture"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <h1>Redwan Rahman</h1>
        <p>AI/ML Developer | Game Developer | Quantum Programmer</p>
        <div className="hero-buttons">
          <Link to="/about" className="about-button" onMouseEnter={preloadAbout}>About Me</Link>
          <Link to="/articles" className="articles-button" onMouseEnter={preloadArticles}>My Articles</Link>
          <a href="mailto:rahman22205101127@diu.edu.bd" className="poems-button">Email</a>
        </div>
      </header>

      <section className="section" id="skills">
        <h2>My Expertise</h2>
        <p className="section-subtitle">Explore my specialized domains</p>
        
        <div className="domain-navigation">
          <Link to="/ai-ml" className="domain-nav-card ai-ml" onMouseEnter={preloadAiMlDeveloper}>
            <div className="domain-icon">🤖</div>
            <h3>AI/ML Developer</h3>
            <p>Machine Learning • Deep Learning • Data Science</p>
            <div className="nav-arrow">→</div>
          </Link>
          
          <Link to="/game-dev" className="domain-nav-card game-dev" onMouseEnter={preloadGameDeveloper}>
            <div className="domain-icon">🎮</div>
            <h3>Game Developer</h3>
            <p>Unreal Engine • Unity • Interactive Experiences</p>
            <div className="nav-arrow">→</div>
          </Link>
          
          <Link to="/quantum" className="domain-nav-card quantum" onMouseEnter={preloadQuantumProgrammer}>
            <div className="domain-icon">⚛️</div>
            <h3>Quantum Programmer</h3>
            <p>Quantum Computing • QML • Astrophysics Research</p>
            <div className="nav-arrow">→</div>
          </Link>
        </div>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <ul>
          <li>Mentor: QBangladesh</li>
          <li>Mentor: AR/VR and Game Development Lab_DIU</li>
          <li>President: DIU Astrophysics Center (Student Forum)</li>
        </ul>
      </section>


      <section className="section" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://itch.io/jam/quantum-game-jam-2025/rate/3867893"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DraQ: Astro-Escape (under development)
            </a>
            <br />
            <span className="project-badge">Quantum GameJam</span>
            <span className="project-badge">Unreal Engine 5</span>
          </li>
          <li>
            <strong>Gradio-Based MBTI Personality Prediction Web App Using an Ensemble Model</strong>
            <br />
            <span className="project-accuracy">91.05% Accuracy</span>
          </li>
          <li>ML based astronomical object classifier</li>
          <li>
            <strong>MRI-Based Brain Tumor Diagnosis Using YOLOv8 for Detection and DenseNet201 for Classification</strong>
            <br />
            <span className="project-accuracy">mAP50: 88.2%, Accuracy: 86.05%</span>
          </li>
          <li>
            <a
              href="https://quantum-galton-board-generator.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Quantum Galton Board Generator
            </a>
          </li>
          <li>
            <a
              href="https://connect-4-with-ai-opponent.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Some board games with AI opponents
            </a>
          </li>
        </ul>
      </section>

<section className="section" id="certificates">
  <h2>Certificates</h2>
  <ul>
    <li>
      <a
        href="https://coursera.org/share/74044cdebfe2d219bd2848b9e2131dd1"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Data Science Math Skills by Duke University
      </a>
    </li>
    <li>
      <a
        href="https://coursera.org/share/3ec38798eb25b6d1fd4f02318a7c9564"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Python Basics by University of Michigan
      </a>
    </li>
    <li>
      <a
        href="https://coursera.org/share/6466ec5da646189a9c0be0a282599bcb"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Machine Learning with Python by IBM
      </a>
    </li>
    <li>AWS Academy Graduate - AWS Academy Machine Learning Foundations by Amazon Web Services (AWS)</li>
    <li>
      <a
        href="https://www.kaggle.com/learn/certification/redwanrahman1127/intro-to-machine-learning"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Intro to Machine Learning by Kaggle
      </a>
    </li>
    <li>
      <a
        href="https://www.kaggle.com/learn/certification/redwanrahman1127/intro-to-game-ai-and-reinforcement-learning"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Intro to Game AI and Reinforcement Learning by Kaggle
      </a>
    </li>
    <li>
      <a
        href="https://cursa.app/en/my-certificate/cert0b72aa6bd33ff447f2a2d3a10a4058e2"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Intro to C++ Game Programming
      </a>
    </li>
    <li>
      <a
        href="https://cursa.app/en/my-certificate/cert19bec9533d2b4e0aee65ca50cf316ba9"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Unreal Engine 5 Complete Tutorials
      </a>
    </li>
    <li>
      <a
        href="https://coursera.org/share/bbd7cc45b7923ab8aebe6590a6d46db1"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Deep Learning with Keras and TensorFlow by IBM
      </a>
    </li>
    <li>
      <a
        href="https://coursera.org/share/18e299932ad4ef3b99c044574f155265"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        Feature Engineering by Google Cloud
      </a>
    </li>
    <li>Industry Project Certificate: Quantum Walks and Monte Carlo by The Washington Institute for STEM, Entrepreneurship and Research</li>
    <li>QWorld QBronze - Quantum Computing Fundamentals</li>
    <li>QURECA Basic Rules of Quantum Physics - Quantum Physics Foundation</li>
    <li>QURECA Quantum Myths - Quantum Misconceptions & Facts</li>
    <li>
      <a
        href="https://pennylane.ai/profile/Redwan_Rahman?certificate=pennylane-certificate-womanium-wiser-lcu-2025"
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        PennyLane LCU Challenge at the Womanium & Wiser Quantum Program 2025
      </a>
    </li>
    <li>GALACTIC PROBLEM SOLVER by NASA International Space Apps Challenge</li>
    <li>Finalist, Unlock The Algorithm Spring 2024 by Daffodil International University</li>
    <li>Finalist, Take Off programming contest 2022 by Daffodil International University</li>
  </ul>
</section>

      <section className="section" id="scholarships">
        <h2>Scholarships</h2>
        <ul>
          <li>UNDP FutureNation – Frontier Tech Scholarship</li>
          <li>Scholar: WISER & Womanium Quantum Solvers: Algorithms for the World's Hardest Problems</li>
        </ul>
      </section>

      <section className="section" id="patents">
        <h2>Research Datasets</h2>
        <ul>
          <li>
            <a
              href="https://data.mendeley.com/datasets/m7w55sw88b/1"
              target="_blank"
              rel="noopener noreferrer"
              className="patent-link"
            >
              PMRAM: Bangladeshi Brain Cancer - MRI Dataset
            </a>
            <p className="doi">DOI: 10.17632/m7w55sw88b.1</p>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <a href="https://www.linkedin.com/in/redwan-rahman-13098a34b/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link">
          Connect with me on LinkedIn
        </a>
        <a href="https://github.com/Red1-Rahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link">
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

function App() {
  useEffect(() => {
    const updateBackground = () => {
      document.body.style.background = generateRandomColors();
    };

    updateBackground();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/ai-ml" element={<AiMlDeveloper />} />
              <Route path="/game-dev" element={<GameDeveloper />} />
              <Route path="/quantum" element={<QuantumProgrammer />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
