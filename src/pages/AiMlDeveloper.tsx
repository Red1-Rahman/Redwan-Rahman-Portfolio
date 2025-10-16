import React from 'react';
import { Link } from 'react-router-dom';
import './DomainPages.css';

const AiMlDeveloper: React.FC = () => {
  return (
    <div className="domain-container">
      <header className="domain-header">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <div className="domain-title">
          <span className="domain-icon">🤖</span>
          <h1>AI/ML Developer</h1>
        </div>
        <p className="domain-subtitle">Expert in Machine Learning, Deep Learning & Data Science</p>
      </header>

      <div className="domain-content">
        <section className="expertise-overview">
          <h2>Expertise Overview</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Machine Learning</h3>
              <p>Supervised and unsupervised learning algorithms, feature engineering, model optimization, and performance evaluation.</p>
            </div>
            <div className="expertise-card">
              <h3>Deep Learning</h3>
              <p>Neural networks, CNNs, RNNs, transformers, and advanced architectures for complex problem solving.</p>
            </div>
            <div className="expertise-card">
              <h3>Data Science</h3>
              <p>Data analysis, visualization, statistical modeling, and extracting insights from large datasets.</p>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Programming Languages</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">Python</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>ML/DL Frameworks</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">TensorFlow</span>
                <span className="tech-tag primary">PyTorch</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Keras</span>
                <span className="tech-tag">XGBoost</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Data Processing</h3>
              <div className="tech-tags">
                <span className="tech-tag primary">Pandas</span>
                <span className="tech-tag primary">NumPy</span>
                <span className="tech-tag">Apache Beam</span>
                <span className="tech-tag">Dataflow</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Explainable AI (XAI)</h3>
              <div className="tech-tags">
                <span className="tech-tag">SHAP</span>
                <span className="tech-tag">LIME</span>
                <span className="tech-tag">ELI5</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Visualization & Analysis</h3>
              <div className="tech-tags">
                <span className="tech-tag">Matplotlib</span>
                <span className="tech-tag">Seaborn</span>
                <span className="tech-tag">Plotly</span>
                <span className="tech-tag">Jupyter</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Featured AI/ML Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
              <h3>Gradio-Based MBTI Personality Prediction Web App Using an Ensemble Model</h3>
              <p>Advanced personality prediction system using ensemble machine learning models with an intuitive Gradio interface.</p>
              <div className="project-stats">
                <span className="stat">91.05% Accuracy</span>
                <span className="tech-used">Python • Scikit-learn • Gradio • Ensemble Methods</span>
              </div>
            </div>
            <div className="project-card">
              <h3>MRI-Based Brain Tumor Diagnosis Using YOLOv8 for Detection and DenseNet201 for Classification</h3>
              <p>Comprehensive medical imaging solution combining object detection and classification for accurate brain tumor diagnosis.</p>
              <div className="project-stats">
                <span className="stat">mAP50: 88.2% • 86.05% Accuracy</span>
                <span className="tech-used">YOLOv8 • DenseNet201 • PyTorch • Medical Imaging</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Astro AI</h3>
              <p>AI-powered astronomy application for astronomical analysis and insights using machine learning.</p>
              <div className="project-stats">
                <span className="tech-used">Python • Streamlit • Machine Learning • Astronomy</span>
              </div>
              <a 
                href="https://r3ns-astro-ai.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Application →
              </a>
            </div>
            <div className="project-card">
              <h3>ML Based Astronomical Object Classifier</h3>
              <p>Machine learning model for classifying astronomical objects from telescope data with high precision and automated feature extraction.</p>
              <div className="project-stats">
                <span className="tech-used">Python • TensorFlow • Astronomy Data • Feature Engineering</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Some Board Games with AI Opponents</h3>
              <p>Interactive board games featuring intelligent AI opponents using game theory and reinforcement learning algorithms.</p>
              <div className="project-stats">
                <span className="tech-used">Python • Game AI • Reinforcement Learning • Strategy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications & Learning</h2>
          <div className="cert-list">
            <div className="cert-item">
              <h3>AWS Academy Graduate - AWS Academy Machine Learning Foundations</h3>
              <p>Amazon Web Services (AWS)</p>
            </div>
            <div className="cert-item">
              <h3>Data Science Math Skills</h3>
              <p>Duke University</p>
            </div>
            <div className="cert-item">
              <h3>Python Basics</h3>
              <p>University of Michigan</p>
            </div>
            <div className="cert-item">
              <h3>Machine Learning with Python</h3>
              <p>IBM</p>
            </div>
            <div className="cert-item">
              <h3>Intro to Machine Learning</h3>
              <p>Kaggle</p>
            </div>
            <div className="cert-item">
              <h3>Intro to Game AI and Reinforcement Learning</h3>
              <p>Kaggle</p>
            </div>
            <div className="cert-item">
              <h3>Deep Learning with Keras and TensorFlow</h3>
              <p>IBM</p>
            </div>
            <div className="cert-item">
              <h3>Feature Engineering</h3>
              <p>Google Cloud</p>
            </div>
          </div>
        </section>

        <section className="datasets-section">
          <h2>Datasets & Contributions</h2>
          <div className="datasets-grid">
            <div className="dataset-card">
              <h3>PMRAM: Bangladeshi Brain Cancer - MRI Dataset</h3>
              <p>Comprehensive MRI dataset for brain cancer research focused on Bangladeshi patient data for medical AI applications.</p>
              <div className="project-stats">
                <span className="tech-used">Medical Imaging • Dataset Curation • Research</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiMlDeveloper;
