// About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Link to="/" className="back-button">← Back to Portfolio</Link>
      
      <div className="about-content">
        <h1>About Me</h1>

        <section className="about-section">
          <h2>Academic & Leadership</h2>
          <p>
            I am Redwan Rahman, pursuing a Bachelor of Science in Computer Science and Engineering 
            at Daffodil International University. I currently serve as the General Secretary of 
            the "AR/VR and Game Development Lab, DIU" and lead as the President of the 
            "DIU Astrophysics Center" student forum. Additionally, I am honored to serve as a 
            Mentor/Coordinator of QBangladesh (QCousin of QWorld), where I contribute to advancing 
            quantum education and research initiatives in Bangladesh.
          </p>
        </section>

        <section className="about-section">
          <h2>Professional Experience & Impact</h2>
          <p>
            As the Team Leader of Halo Horizons, I spearhead innovative urban pollution solutions 
            through bioengineered moss wall technology. Our team achieved Finalist status in both 
            the prestigious Hult Prize 2025 and Orange Corners Ideation Challenge 4.0, demonstrating 
            our commitment to environmental sustainability and social entrepreneurship. This experience 
            has honed my ability to lead cross-functional teams, manage complex projects from conception 
            to implementation, and bridge the gap between cutting-edge technology and real-world impact.
          </p>
        </section>

        <section className="about-section">
          <h2>Technical Expertise & Research</h2>
          <p>
            My technical proficiency encompasses AI/ML Development with proven results in ensemble 
            models and computer vision (91%+ accuracy rates), Game Development using industry-standard 
            engines like Unreal Engine 5, and Quantum Computing research and education. This expertise 
            is underpinned by a solid theoretical foundation in Quantum Physics and Astrophysics, 
            enabling me to approach complex problems with both practical and theoretical perspectives.
          </p>
        </section>

        <section className="about-section">
          <h2>Personal Philosophy & Interests</h2>
          <p>
            I maintain a balanced approach to personal development through physical fitness via 
            weightlifting and creative expression through rap lyric composition. My intellectual 
            curiosity is fed by strategic and philosophical literature, including "The Art of War", 
            "The 48 Laws of Power", "The Alchemist", and "Algorithms to Live By". I stay connected 
            to contemporary culture through gaming (Valorant) and thoughtful discourse via the 
            Joe Rogan podcast, always seeking diverse perspectives to inform my worldview.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;