```markdown
// src/pages/poems.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './poems.css';

const poems = [
  {
    id: 1,
    title: "Poetic Stoic",
    description: "A collection of poems exploring stoicism and the art of poetic expression.",
    pdfUrl: "/assets/Poetry/Poetic Stoic.pdf"
  }
  // Add more poems here as needed
];

const Poems: React.FC = () => {
  const handlePDFView = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="poems-container">
      <header className="poems-header">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <h1>Poems</h1>
        <a
          href="/assets/Poetry/Poetic Stoic.pdf"
          className="poem-download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download "Poetic Stoic" (PDF)
        </a>
      </header>
      <section className="poems-list">
        {poems.map((poem) => (
          <article key={poem.id} className="poem-item">
            <h2 className="poem-title">{poem.title}</h2>
            <p>{poem.description}</p>
            <div className="poem-actions">
              <button
                onClick={() => handlePDFView(poem.pdfUrl)}
                className="poem-read-btn"
                style={{ marginRight: 10 }}
              >
                📄 Read PDF
              </button>
              <a
                href={poem.pdfUrl}
                download={`${ poem.title.replace(/\s+/g, '-').toLowerCase() }.pdf`}
                className="poem-download-btn"
              >
                ⬇️ Download PDF
              </a>
              <Link
                to="/poems-aside"
                className="poem-aside-btn"
                style={{ marginLeft: 10 }}
              >
                📝 Poems Aside
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Poems;
```