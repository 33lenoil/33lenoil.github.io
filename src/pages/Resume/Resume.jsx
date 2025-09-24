import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';

const Resume = () => {
  return (
    <section className="resume-section">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-header">
          <h3 className="h3">Lionel Hu</h3>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
            <span>Burlingame, CA</span>
            <span>|</span>
            <span>lionelhu33@gmail.com</span>
            <span>|</span>
            <a href="https://github.com/33lenoil" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>GitHub</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/lionel-hu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Pennsylvania"
            degree="Master of Science in Engineering in Computer and Information Science"
            date="August 2023 — May 2025"
            description={[
              "‣ GPA: 3.90/4.0",
              "‣ Philadelphia, PA"
            ]}
          />
          <TimelineItem
            title="Rice University"
            degree="Bachelor of Arts in Computer Science"
            date="August 2019 — May 2023"
            description={[
              "‣ Houston, TX"
            ]}
          />
        </ol>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Skills</h3>
        </div>
        <div className="skills-content">
          <div className="skill-category">
            <h4>Programming & Software Design</h4>
            <p>Python, Java, C, C++, SQL, Object-Oriented Programming, RESTful API</p>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <p>HTML, JavaScript/TypeScript, CSS, React, Node.js, Express.js, Next.js, Tailwind, HeroUI, Figma</p>
          </div>
          <div className="skill-category">
            <h4>Data & Databases</h4>
            <p>Pandas, MongoDB, Firestore, MySQL, Oracle, Neo4j, AWS</p>
          </div>
          <div className="skill-category">
            <h4>Machine Learning & AI</h4>
            <p>ChatGPT, LangChain, PyTorch, Groq, Prompt Engineering, MCP</p>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <p>GitHub, LaTeX, Firebase, Azure DevOps Server, Jest, JUnit, Cypress</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Engineer"
            company="HeartByte Inc | YC Startup for Gen-AI Interactive Story"
            date="June 2025 — Present"
            description={[
              "‣ Built a Gen-AI interactive story web app using React, Next.js, and Firebase serving 10K+ users monthly.",
              "‣ Designed and implemented a production-grade branching visual-novel engine enabling choice-driven narratives, manual and auto save/restore flows, and clean authoring experience, boosted playability for 1k+ stories.",
              "‣ Re-architected 10+ core pages end-to-end with UI revamp, client-side-to-server-side rendering migration, API/data fetching redesign, and database schema redesign, improved usability, efficiency, and core web vitals by 20%.",
              "‣ Designed a numeric stats system personal to each user within each novel for branching logic that enables conditional branching and conditional novel endings, enabling authors to personalize their stories creatively.",
              "‣ Shipped an LLM story-generation pipeline (Groq + prompt engineering) with few-shot examples and JSON schema validation/repair for hallucination prevention; integrated into a multi-step story authoring flow."
            ]}
          />
          <TimelineItem
            title="Software Engineer Intern"
            company="HeartByte Inc | San Francisco CA (Remote)"
            date="May 2024 — Aug 2024; Jan 2025 — May 2025"
            description={[
              "‣ Spearheaded comprehensive Search Engine Optimization (SEO) initiatives, including structured metadata, improved site performance, and keyword targeting, to enhance online visibility and increase organic traffic by 5X.",
              "‣ Developed 10+ full-stack features including story recommendation using TypeScript, React.js, Firebase and Next.js, enhancing product functionality to improve user experience and boost product completeness.",
              "‣ Streamlined and standardized website UI of 15+ pages by standardizing CSS and styling using Tailwind CSS and NextUI components, reducing design inconsistencies and accelerating the development process."
            ]}
          />
          <TimelineItem
            title="Software Engineer"
            company="YelpScout | University of Pennsylvania"
            date="Jan 2024 — May 2024"
            description={[
              "‣ Engineered a local business search & insights web app using React, Node/Express, and MySQL with advanced search filters, single-business analytics pages, and personalized recommendations in a 4-person team.",
              "‣ Designed and implemented the single-business analytics page for 150K+ businesses with weekday popularity, ratings, reservation flag, and customer review keyword extraction powered by RAKE-NLTK preprocessing.",
              "‣ Optimized performance via indexes and cached/intermediate tables, reducing heavy queries from minutes to 1–3s."
            ]}
          />
          <TimelineItem
            title="Software Engineer"
            company="DocSearch | University of Pennsylvania"
            date="Sep 2023 — Dec 2023"
            description={[
              "‣ Built an end-to-end search engine (crawler, distributed KVS, indexer, ranking, web UI, EC2) in a 4-person team.",
              "‣ Implemented a robust and efficient distributed key-value store in Java with concurrent processing and stream-put to store crawl/index/PageRank tables; crawled 400K+ pages and stored information in the KVS.",
              "‣ Engineered the pipeline, including crawling, precomputed TF-IDF + PageRank, ranking, and web deployment.",
              "‣ Implemented crawl frontier policies: allowlist-based token filtering with title-term expansion, depth/size guards and error filtering, and per-domain quotas to boost crawl efficiency and downstream relevance."
            ]}
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
