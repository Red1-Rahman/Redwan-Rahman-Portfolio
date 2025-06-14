import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import './App.css';

function MainContent() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Redwan Rahman</h1>
        <p>AI/ML Developer | Game Developer | Quantum Programmer</p>
        <Link to="/about" className="about-button">About Me</Link>
      </header>

      <section className="section" id="skills">
        <h2>Skills</h2>
        
        <div className="skill-category">
          <h3>AI/ML Development</h3>
          <p>Machine Learning, Deep Learning, Data Science, Apache Beam, Dataflow, Feature Engineering</p>
          <h4>Tech Stack:</h4>
          <p>Python, Pandas, TensorFlow, PyTorch, Scikit-learn, Matplotlib, Seaborn, Django, Pickle, Keras</p>
        </div>

        <div className="skill-category">
          <h3>Game Development</h3>
          <p>Game Ideation, Brainstorming, Game Programming (C#, C++, Python), Game Testing, UE Blueprint, Niagara VFX</p>
          <h4>Engines:</h4>
          <p>Unreal Engine, Unity</p>
        </div>

        <div className="skill-category">
          <h3>Quantum Programming</h3>
          <p>Quantum Computing, Quantum Programming, Quantum Machine Learning (QML), Basics of Quantum Physics</p>
          <h4>Tools:</h4>
          <p>Qiskit, PennyLane</p>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>ML based astronomical object classifier</li>
          <li>ML based MRI brain tumor detector</li>
          <li>Some board games with AI opponents</li>
        </ul>
      </section>

      <section className="section" id="certificates">
        <h2>Certificates</h2>
        <ul>
          <li>Data Science Math Skills by Duke University</li>
          <li>Python Basics by University of Michigan</li>
          <li>Machine Learning with Python by IBM</li>
          <li>Intro to Machine Learning by Kaggle</li>
          <li>Deep Learning with Keras and TensorFlow by IBM</li>
          <li>Feature Engineering by Google Cloud</li>
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

      <footer className="footer">
        <a href="https://www.linkedin.com/in/redwan-rahman-13098a34b/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="linkedin-link">
          Connect on LinkedIn
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
