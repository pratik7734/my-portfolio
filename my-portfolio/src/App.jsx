import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Pratik Chopade</h2>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Pratik Chopade</h1>
          <p>Frontend Developer & VIIT Student</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate frontend developer currently studying at VIIT. 
            I love creating beautiful and functional websites using React and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>React E-commerce Website</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Weather App</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Portfolio Website</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">Vite</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <p>Email: pratik.22210601@viit.ac.in</p>
          <p>Location: Pune, India</p>
          <p>Tel No:+918421652325</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Pratik Chopade. All rights reserved.</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;