import { useEffect, useState } from "react";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Next.js, TypeScript, and modern frontend technologies."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Backend Development",
    description: "Developing robust backend systems with Java, Node.js, Express, and database technologies like MySQL and MongoDB."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Data Engineering",
    description: "Working with data processing using Python, Pandas, SQL, and building data-driven applications."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Gen-AI Integration",
    description: "Implementing LLM story pipelines and AI-powered features for interactive applications."
  },
];

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        {/* Introduction */}
        <p>
            👋 Hi, I&apos;m <strong>Lionel Hu</strong>, a passionate software engineer 
            specializing in full-stack and frontend development.  
            I work at <strong>HeartByte (Storio)</strong> on a Gen-AI interactive story web app 
            built with <strong>Next.js + TypeScript + Firebase/Firestore</strong>.
        </p>
        
        <br />

        {/* Education Section */}
        <p>🎓 <strong>Education</strong></p>
        <ul>
            <li>📚 <strong>MSE in Computer and Information Science</strong> – University of Pennsylvania (GPA: 3.90/4.00)</li>
            <li>🎓 <strong>BA in Computer Science</strong> – Rice University (GPA: 3.70/4.00)</li>
        </ul>

        <br />

        {/* Experience Section */}
        <p>🔹 <strong>Work Experience</strong></p>
        <ul>
            <li>🚀 <strong>HeartByte (Storio) | Software Engineer</strong> – Building a Gen-AI interactive story web app with branching visual-novel engine, LLM story pipelines, and production features end-to-end.</li>
            <li>⚡ <strong>Recent Projects</strong> – Built end-to-end web search engine, Gmail/Drive-style suite, and yelpscout business insights app.</li>
        </ul>

        <br />

        {/* Motivation Section */}
        <p>
            💡 I love building scalable web applications and exploring the intersection of AI and software engineering.  
            I&apos;m passionate about creating user experiences that are both functional and engaging.
        </p>

    </section>

      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I&apos;m doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Skills Section */}
        <section className="skills-section">
            <h3 className="h3 skills-title">Skills</h3>

            {/* Languages */}
            <div className="skills-category">
                <h4>Languages</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge" alt="Python" />
                    <img src="https://img.shields.io/badge/Java-007396?logo=java&logoColor=white&style=for-the-badge" alt="Java" />
                    <img src="https://img.shields.io/badge/C-00599C?logo=c&logoColor=white&style=for-the-badge" alt="C" />
                    <img src="https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white&style=for-the-badge" alt="C++" />
                    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3" />
                </div>
            </div>

            {/* Backend & Data Engineering */}
            <div className="skills-category">
                <h4>Backend & Data Engineering</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express" />
                    <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge" alt="Firebase" />
                    <img src="https://img.shields.io/badge/Firestore-FFCA28?logo=firebase&logoColor=black&style=for-the-badge" alt="Firestore" />
                    <img src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white&style=for-the-badge" alt="Pandas" />
                    <img src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white&style=for-the-badge" alt="PyTorch" />
                </div>
            </div>

            {/* Frontend */}
            <div className="skills-category">
                <h4>Frontend</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React" />
                    <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" alt="Next.js" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" alt="Tailwind CSS" />
                    <img src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge" alt="Jest" />
                    <img src="https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white&style=for-the-badge" alt="Cypress" />
                </div>
            </div>

            {/* Databases */}
            <div className="skills-category">
                <h4>Databases</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" alt="MySQL" />
                    <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB" />
                </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="skills-category">
                <h4>Cloud & DevOps</h4>
                <div className="skills-list">
                    <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel" />
                    <img src="https://img.shields.io/badge/AWS-232F3E?logo=amazonaws&logoColor=white&style=for-the-badge" alt="AWS" />
                    <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" alt="Git" />
                    <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub" />
                    <img src="https://img.shields.io/badge/LaTeX-008080?logo=latex&logoColor=white&style=for-the-badge" alt="LaTeX" />
                </div>
            </div>
        </section>


      <section className="achievements">
        <h3 className="h3 achievements-title">Project Highlights</h3>
        <ul>
          <li>🔍 <strong>DocSearch</strong> — End-to-end web search engine (crawler → indexing → TF-IDF + PageRank → ranking UI)</li>
          <li>📧 <strong>Google Suite Copy</strong> — Gmail-style webmail + Drive-style cloud storage (not affiliated with Google)</li>
          <li>🏪 <strong>yelpscout</strong> — Yelp-dataset local business search & insights with Top-100 ranking and recommendations</li>
          <li>👽 <strong>UFOgram</strong> — Social app MVP with real-time feed, profiles, and infinite scroll</li>
        </ul>
      </section>

      <section className="personal-interests">
        <h3 className="h3 interests-title">Outside of Tech</h3>
        <p>
          I love <strong>gym 💪, photography 📷, traveling & the outdoors ⛰️, and reading 📖</strong>.
        </p>
      </section>
    </article>
  );
};

export default About;
