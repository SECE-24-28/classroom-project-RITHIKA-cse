import React from "react";
import "./portfolio-style.css";

const PortfolioComponent = () => {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1>Rithika V I</h1>
        <p>B.E. CSE Student | Aspiring Developer</p>
      </header>

      {/* Education */}
      <section className="section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <div className="edu-left">
            <h3>B.E. CSE - Sri Eshvar College Of Engineering</h3>
            <p>CGPA (upto sem 1st)</p>
          </div>
          <span className="year">2024-2028</span>
        </div>
        <div className="education-item">
          <div className="edu-left">
            <h3>HSC - GRD Public School</h3>
            <p>73%</p>
          </div>
          <span className="year">2022-2024</span>
        </div>
        <div className="education-item">
          <div className="edu-left">
            <h3>SSLC - GRD Public School</h3>
            <p>74.5%</p>
          </div>
          <span className="year">2021-2022</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>PROJECTS</h2>
        <div className="item-row">
          <span>PROJECT 1</span>
          <a href="#">PROJECT LINK-1</a>
          <span className="date">DEC 2025</span>
        </div>
        <div className="item-row">
          <span>PROJECT 2</span>
          <a href="#">PROJECT LINK-1</a>
          <span className="date">MAY 2025</span>
        </div>
        <div className="item-row">
          <span>PROJECT 3</span>
          <a href="#">PROJECT LINK-1</a>
          <span className="date">JAN 2025</span>
        </div>
      </section>

      {/* Internships */}
      <section className="section">
        <h2>INTERNSHIPS</h2>
        <div className="item-row">
          <span>INTERNSHIP-1</span>
          <span className="date">DEC 2025</span>
        </div>
        <div className="item-row">
          <span>INTERNSHIP-2</span>
          <span className="date">FEB 2025</span>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <strong>Languages:</strong>
            <span>C | C++</span>
          </div>
          <div className="skill-item">
            <strong>Tools:</strong>
            <span>VS Code | Canva | Figma</span>
          </div>
          <div className="skill-item">
            <strong>Technologies/Framework:</strong>
            <span>HTML | CSS | JavaScript</span>
          </div>
          <div className="skill-item">
            <strong>Database:</strong>
            <span>-</span>
          </div>
          <div className="skill-item">
            <strong>Core Concepts:</strong>
            <span>-</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2>CERTIFICATIONS</h2>
        <div className="list-items">
          <div className="list-row"><span>Certificate 1</span><span>2025</span></div>
          <div className="list-row"><span>Certificate 2</span><span>2025</span></div>
          <div className="list-row"><span>Certificate 3</span><span>2025</span></div>
          <div className="list-row"><span>Certificate 4</span><span>2025</span></div>
          <div className="list-row"><span>Certificate 5</span><span>2024</span></div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <h2>ACHIEVEMENTS</h2>
        <div className="list-items">
          <div className="list-row"><span>Achievement 1</span><span>2025</span></div>
          <div className="list-row"><span>Achievement 2</span><span>2025</span></div>
          <div className="list-row"><span>Achievement 3</span><span>2025</span></div>
          <div className="list-row"><span>Achievement 4</span><span>2025</span></div>
          <div className="list-row"><span>Achievement 5</span><span>2024</span></div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section className="section">
        <h2>CODING PROFILES</h2>
        <div className="profiles">
          <a href="#">Leetcode: Rithika V I</a>
          <a href="#">Codechef: Rithika V I</a>
          <a href="#">Sololearn: Rithika V I</a>
          <a href="#">Hackerrank: Rithika V I</a>
          <a href="#">Skillrack: Rithika V I</a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioComponent;

