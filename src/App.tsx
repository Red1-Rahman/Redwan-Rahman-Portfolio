import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import { generateRandomColors } from './utils/randomColors';
import './App.css';

function MainContent() {
  return (
    <div className="App">
      <header className="hero">
        <div className="profile-container">
          <img 
            src="/assets/images/My Formal Pic.jpg" 
            alt="Redwan Rahman" 
            className="profile-picture"
          />
        </div>
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
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
