import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Quantum Advantage in Astrophysics and Astronomy",
      description: "An exploration of how quantum computing can revolutionize astrophysics and astronomy through faster simulations, solving many-body problems, and enhanced data analysis capabilities.",
      date: "2025",
      pdfUrl: "/assets/documents/quantum-advantage-in-astrophysics.pdf",
      tags: ["Quantum Computing", "Astrophysics", "Space Technology", "Simulation"]
    },
    {
      id: 2,
      title: "Seize the Moment, or Can You Repeat It?",
      description: "A philosophical and scientific examination of why no moment can truly be repeated, exploring concepts from quantum mechanics, thermodynamics, and human psychology.",
      date: "2025",
      pdfUrl: "/assets/documents/seize-the-moment.pdf",
      tags: ["Philosophy", "Quantum Mechanics", "Time", "Physics"]
    }
  ];

  const handlePDFView = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="articles-container">
      <header className="articles-header">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <h1>My Articles</h1>
        <p className="articles-subtitle">Exploring the intersection of quantum computing, astrophysics, and philosophy</p>
      </header>

      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-date">{article.date}</p>
              <p className="article-description">{article.description}</p>
              
              <div className="article-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="article-actions">
              <button 
                onClick={() => handlePDFView(article.pdfUrl, article.title)}
                className="pdf-button"
              >
                📄 Read Article
              </button>
              <a 
                href={article.pdfUrl} 
                download={`${article.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                className="download-button"
              >
                ⬇️ Download PDF
              </a>
            </div>
          </article>
        ))}
      </div>

      <footer className="articles-footer">
        <p>More articles coming soon...</p>
      </footer>
    </div>
  );
};

export default Articles;
