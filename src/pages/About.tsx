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
            the "AR/VR and Game Development Lab, DIU" and lead as the president of the 
            "DIU Astrophysics Center" student forum.
          </p>
        </section>

        <section className="about-section">
          <h2>Entrepreneurial & Project Leadership</h2>
          <p>
            As the Team Leader of Halo Horizons, I lead innovative efforts to solve urban pollution through bioengineered moss walls. Our team was a Finalist in both the Hult Prize 2025 and Orange Corners Ideation Challenge 4.0. These experiences allowed me to blend cutting-edge technology with environmental sustainability and social impact, managing high-impact projects from ideation to execution.
          </p>
        </section>

        <section className="about-section">
          <h2>Technical Expertise</h2>
          <p>
            My expertise spans across AI/ML Development, Game Development, and Quantum Computing, 
            complemented by a theoretical foundation in Quantum Physics and Astrophysics.
          </p>
        </section>

        <section className="about-section">
          <h2>Beyond Technology</h2>
          <p>
            Outside the realm of technology, I maintain an active lifestyle through weightlifting 
            and channel my creativity into writing rap lyrics. I'm an avid reader, with favorites 
            including "The Art of War," "The 48 Laws of Power," "The Alchemist," and 
            "Algorithms to Live By." When time allows, I enjoy playing Valorant and following the Joe Rogan podcast.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;