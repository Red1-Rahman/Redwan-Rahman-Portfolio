import React from 'react';
import { Link } from 'react-router-dom';
import './DomainPages.css';

const QuantumProgrammer: React.FC = () => {
  return (
    <div className="domain-container">
      <header className="domain-header">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <div className="domain-title">
          <span className="domain-icon">⚛️</span>
          <h1>Quantum Programmer</h1>
        </div>
        <p className="domain-subtitle">Exploring Quantum Computing & Quantum Machine Learning</p>
      </header>

      <div className="domain-content">
        <section className="experience">
          <h2>Experience</h2>
          <div className="cert-list">
            <div className="cert-item experience-item">
              <div className="experience-content">
                <h3>Mentor at QBAngladesh</h3>
                <p>Quantum Computing Community Mentorship</p>
              </div>
              <img 
                src="/assets/Banners/Qbangladesh Banner.jpg" 
                alt="QBangladesh Banner" 
                className="experience-banner"
              />
            </div>
          </div>
        </section>

        <section className="expertise-overview">
          <h2>Expertise Overview</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Quantum Computing</h3>
              <p>Quantum algorithms, quantum gates, quantum circuits, and quantum computing fundamentals.</p>
            </div>
            <div className="expertise-card">
              <h3>Quantum Machine Learning</h3>
              <p>Hybrid quantum-classical algorithms, quantum neural networks, and quantum optimization.</p>
            </div>
            <div className="expertise-card">
              <h3>Quantum Physics</h3>
              <p>Understanding quantum mechanics principles, superposition, entanglement, and quantum phenomena.</p>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Quantum Frameworks</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">Qiskit</span>
                <span className="tech-tag primary">PennyLane</span>
                <span className="tech-tag">Cirq</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Programming Languages</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">Python</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Quantum Applications</h3>
              <div className="tech-tags">
                <span className="tech-tag">Quantum ML</span>
                <span className="tech-tag">Optimization</span>
                <span className="tech-tag">Simulation</span>
                <span className="tech-tag">Cryptography</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Research Areas</h3>
              <div className="tech-tags">
                <span className="tech-tag">Astrophysics</span>
                <span className="tech-tag">Quantum Algorithms</span>
                <span className="tech-tag">NISQ Computing</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Quantum Projects & Challenges</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <h3>DraQ: Astro-Escape</h3>
              <p>Quantum-inspired space exploration game developed for Quantum GameJam 2025, integrating quantum mechanics concepts into interactive gameplay.</p>
              <div className="project-stats">
                <span className="stat">🏆 Quantum GameJam 2025 • Under Development</span>
                <span className="tech-used">Unreal Engine 5 • Quantum Concepts • Game Development</span>
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
              <h3>Quantum Galton Board Generator</h3>
              <p>Quantum simulation of the classical Galton board demonstrating quantum interference and probability distributions in quantum systems.</p>
              <div className="project-stats">
                <span className="tech-used">Qiskit • Python • Quantum Simulation • Probability</span>
              </div>
            </div>
            <div className="project-card">
              <h3>PennyLane LCU Challenge</h3>
              <p>Linear Combination of Unitaries challenge completed during the Womanium & Wiser Quantum Program 2025.</p>
              <div className="project-stats">
                <span className="stat">🏆 Womanium & Wiser Quantum Program 2025</span>
                <span className="tech-used">PennyLane • Quantum Algorithms • LCU</span>
              </div>
            </div>
            <div className="project-card">
              <h3>PennyLane A Simple Trotterization Challenge</h3>
              <p>Advanced quantum algorithm implementation focusing on Trotterization techniques for quantum simulation.</p>
              <div className="project-stats">
                <span className="stat">🏆 Womanium & Wiser Quantum Program 2025</span>
                <span className="tech-used">PennyLane • Trotterization • Quantum Simulation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="research-section">
          <h2>Articles & Publications</h2>
          <div className="research-grid">
            <div className="research-card featured">
              <h3>Quantum Advantage in Astrophysics and Astronomy</h3>
              <p>Exploring how quantum computing can revolutionize astrophysics through faster simulations and enhanced data analysis.</p>
              <div className="research-stats">
                <span className="stat">2025 Article</span>
                <span className="topics">Quantum Computing • Astrophysics • Simulation</span>
              </div>
              <Link to="/articles" className="research-link">
                Read Full Article →
              </Link>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications & Learning</h2>
          <div className="cert-list">
            <div className="cert-item">
              <h3>Industry Project Certificate: Quantum Walks and Monte Carlo</h3>
              <p>The Washington Institute for STEM, Entrepreneurship and Research</p>
            </div>
            <div className="cert-item">
              <h3>QWorld QBronze</h3>
              <p>Quantum Computing Fundamentals</p>
            </div>
            <div className="cert-item">
              <h3>QURECA Basic Rules of Quantum Physics</h3>
              <p>Quantum Physics Foundation</p>
            </div>
            <div className="cert-item">
              <h3>QURECA Quantum Myths</h3>
              <p>Quantum Misconceptions & Facts</p>
            </div>
          </div>
        </section>

        <section className="scholar-section">
          <h2>Scholar Programs</h2>
          <div className="scholar-grid">
            <div className="scholar-card featured">
              <h3>WISER & Womanium Quantum Solvers: Algorithms for the World's Hardest Problems</h3>
              <p>Prestigious quantum computing scholarship program focusing on advanced quantum algorithms and real-world problem solving.</p>
              <div className="scholar-stats">
                <span className="stat">🎓 Scholar 2025</span>
                <span className="topics">Quantum Algorithms • Problem Solving • Research</span>
              </div>
            </div>
          </div>
        </section>

        <section className="quantum-concepts">
          <h2>Key Quantum Concepts</h2>
          <div className="concepts-grid">
            <div className="concept-card">
              <h3>🌀 Superposition</h3>
              <p>Quantum bits can exist in multiple states simultaneously, enabling parallel computation.</p>
            </div>
            <div className="concept-card">
              <h3>🔗 Entanglement</h3>
              <p>Quantum particles can be correlated in ways that classical physics cannot explain.</p>
            </div>
            <div className="concept-card">
              <h3>🎯 Quantum Interference</h3>
              <p>Quantum amplitudes can interfere constructively or destructively to bias outcomes.</p>
            </div>
            <div className="concept-card">
              <h3>⚡ Quantum Speedup</h3>
              <p>Certain algorithms can achieve exponential speedup over classical counterparts.</p>
            </div>
          </div>
        </section>

        <section className="applications">
          <h2>Real-World Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>🌌 Astrophysics Simulations</h3>
              <p>Using quantum computers to simulate complex astrophysical phenomena and many-body quantum systems.</p>
            </div>
            <div className="application-card">
              <h3>🔍 Optimization Problems</h3>
              <p>Solving complex optimization problems in logistics, finance, and scientific research.</p>
            </div>
            <div className="application-card">
              <h3>🧠 Machine Learning Enhancement</h3>
              <p>Accelerating machine learning algorithms and exploring quantum neural networks.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuantumProgrammer;