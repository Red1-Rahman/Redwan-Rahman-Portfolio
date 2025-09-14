import React from 'react';
import { Link } from 'react-router-dom';
import './DomainPages.css';

const GameDeveloper: React.FC = () => {
  return (
    <div className="domain-container">
      <header className="domain-header">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <div className="domain-title">
          <span className="domain-icon">🎮</span>
          <h1>Game Developer</h1>
        </div>
        <p className="domain-subtitle">Advanced Game Programming & Interactive Experience Design</p>
      </header>

      <div className="domain-content">
        <section className="experience">
          <h2>Experience</h2>
          <div className="cert-list">
            <div className="cert-item experience-item">
              <div className="experience-content">
                <h3>Mentor, Former General Secretary and Vice-President<br/>AR/VR and Game Development Lab_DIU</h3>
              </div>
              <img 
                src="/assets/Banners/ARVR banner.jpg" 
                alt="AR/VR and Game Development Lab Banner" 
                className="experience-banner"
              />
            </div>
          </div>
        </section>

        <section className="expertise-overview">
          <h2>Expertise Overview</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Game Programming</h3>
              <p>Core gameplay mechanics, physics simulation, AI systems, and performance optimization for interactive experiences.</p>
            </div>
            <div className="expertise-card">
              <h3>Engine Development</h3>
              <p>Unreal Engine and Unity development, custom tools creation, and engine-specific optimizations.</p>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Programming Languages</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">C#</span>
                <span className="tech-tag primary">C++</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Blueprint</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Game Engines</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">Unreal Engine 5</span>
                <span className="tech-tag primary">Unity</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Specializations</h3>
              <div className="tech-tags">
                <span className="tech-tag">Game Design</span>
                <span className="tech-tag">3D Programming</span>
                <span className="tech-tag">Physics Systems</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Development Areas</h3>
              <div className="tech-tags">
                <span className="tech-tag">Game Ideation</span>
                <span className="tech-tag">Prototyping</span>
                <span className="tech-tag">Game Testing</span>
                <span className="tech-tag">Optimization</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Featured Game Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <h3>DraQ: Astro-Escape</h3>
              <p>Quantum-inspired space exploration game developed for Quantum GameJam 2025 using Unreal Engine 5. Currently under development with innovative quantum mechanics integration.</p>
              <div className="project-stats">
                <span className="stat">🏆 Quantum GameJam 2025 • Under Development</span>
                <span className="tech-used">Unreal Engine 5 • Blueprint • C++ • Quantum Concepts</span>
              </div>
              <a 
                href="https://itch.io/jam/quantum-game-jam-2025/rate/3867893" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View on itch.io →
              </a>
            </div>
            <div className="project-card">
              <h3>Some Board Games with AI Opponents</h3>
              <p>Collection of interactive board games featuring intelligent AI opponents using advanced game theory and reinforcement learning algorithms.</p>
              <div className="project-stats">
                <span className="tech-used">Unity • C# • Game AI • Reinforcement Learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications & Learning</h2>
          <div className="cert-list">
            <div className="cert-item">
              <h3>Intro to Game AI and Reinforcement Learning</h3>
              <p>Kaggle</p>
            </div>
            <div className="cert-item">
              <h3>Intro to C++ Game Programming</h3>
              <p>Game Development Fundamentals</p>
            </div>
            <div className="cert-item">
              <h3>Unreal Engine 5 Complete Tutorials</h3>
              <p>Comprehensive UE5 Development</p>
            </div>
          </div>
        </section>

        <section className="game-design-philosophy">
          <h2>Game Design Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>🧠 Educational Gaming</h3>
              <p>Creating games that teach complex concepts like quantum mechanics and astrophysics through interactive experiences.</p>
            </div>
            <div className="philosophy-card">
              <h3>🔬 Science-Based Design</h3>
              <p>Incorporating real scientific principles and accurate simulations into engaging gameplay mechanics.</p>
            </div>
            <div className="philosophy-card">
              <h3>🎯 Player-Centric Approach</h3>
              <p>Focusing on intuitive controls, clear feedback systems, and meaningful player progression.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameDeveloper;