'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Luis Bezerra</h1>
              <p className={styles.role}>Software Engineer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Maceió, Brazil
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/joseluisbezerra" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a software engineer passionate about building tools that solve 
                real problems and make people's lives easier. My work focuses on back-end development and 
                artificial intelligence, where I build scalable APIs, intelligent systems, and practical 
                AI-powered solutions.
              </p>
              
              <p className={styles.paragraph}>
                I started my journey in software engineering in 2016, exploring 
                programming, systems, and technology more deeply. 
                Since 2020, I have been working professionally in the field, 
                gaining hands-on experience building real-world software solutions.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>July 2025 - Present</span>
                </div>
                <h3 className={styles.expRole}>AI Engineer</h3>
                <p className={styles.expCompany}>Teddy Open Finance</p>
                <ul className={styles.expList}>
                  <li>
                    Developed an end-to-end RAG-based application to support compliance processes 
                    related to FEBRABAN audits, covering everything from dataset preparation and 
                    API development to authentication and the implementation of security layers.
                  </li>
                  <li>
                    Restructured the SAM Docs AI microservice, evolving the solution from a 
                    monolithic agent into an architecture featuring multiple specialized 
                    agents orchestrated via LangGraph.
                  </li>
                  <li>
                    Implemented parallel file processing in SAM Docs AI, reducing latency 
                    by approximately 50% while enhancing the solution's 
                    scalability and modularity.
                  </li>
                  <li>
                    Developed Simula House from end to end—an intelligent WhatsApp-integrated 
                    chatbot specialized in loan and real estate financing simulations—handling 
                    the entire lifecycle from architecture and implementation 
                    to integrations and production deployment.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>July 2023 - July 2025</span>
                </div>
                <h3 className={styles.expRole}>Software Engineer - AI & Backend</h3>
                <p className={styles.expCompany}>Senai Alagoas</p>
                <ul className={styles.expList}>
                  <li>
                    Served as Tech Lead for the SSCP project (SENAI Personnel Certification 
                    System), participating in technical decision-making, proposing architectural 
                    solutions, and leading the implementation of highly complex features.
                  </li>
                  <li>
                    Restructured and optimized the SSCP multi-tenant architecture, 
                    resolving critical issues and improving both application 
                    scalability and development efficiency.
                  </li>
                  <li>
                    Developed a solution based on queues and asynchronous processing 
                    to optimize embedding generation and processing within 
                    an RAG-based chatbot platform.
                  </li>
                  <li>
                    Developed Proofs of Concept in the Product & Innovation 
                    sector involving Artificial Intelligence, NLP, and Computer Vision.
                  </li>
                  <li>
                    Worked on optimizing computer vision algorithms for 
                    real-time image processing using WebSockets.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>June 2021 - July 2023</span>
                </div>
                <h3 className={styles.expRole}>Back-end Engineer</h3>
                <p className={styles.expCompany}>WLC Solutions</p>
                <ul className={styles.expList}>
                  <li>
                    Designed and implemented a multi-tenant architecture used 
                    in the WSaúde and O&G ADV systems, covering authentication, 
                    middleware, access control, security, and data isolation.
                  </li>
                  <li>
                    Developed a ticket-based authentication mechanism and a 
                    multi-tenant tunnel for WebSocket communication within 
                    WSaúde, ensuring secure communication between 
                    clients and services.
                  </li>
                  <li>
                    Developed a microservice responsible for validating and 
                    generating TISS forms—a standard established by the ANS 
                    for health information exchange—thereby enabling the 
                    technical requirements needed for a strategic contract.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>February 2021 - June 2021</span>
                </div>
                <h3 className={styles.expRole}>Front-end Developer Intern</h3>
                <p className={styles.expCompany}>Communicatti Group</p>
                <p className={styles.expDesc}>
                </p>
                <ul className={styles.expList}>
                  <li>
                    I developed interfaces for approximately 20 projects, 
                    focusing on visual fidelity, responsiveness, and meeting deadlines.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>September 2020 - February 2021</span>
                </div>
                <h3 className={styles.expRole}>Full Stack Developer Intern</h3>
                <p className={styles.expCompany}>City Hall of Maceió</p>
                <ul className={styles.expList}>
                  <li>
                    Worked on the development and maintenance of internal 
                    systems used to manage Maceió City Hall operations, 
                    including systems for tender management and access control.
                  </li>
                  <li>
                    Investigated and remediated a critical security vulnerability 
                    in the tender management system related to reCAPTCHA 
                    integration, strengthening protection against 
                    brute-force attacks and unauthorized access.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Angular</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>FastAPI</span>
                    <span className={styles.skillTag}>Django REST Framework</span>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>NestJS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>AI</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>LLMs</span>
                    <span className={styles.skillTag}>RAG</span>
                    <span className={styles.skillTag}>Multi-Agent Systems</span>
                    <span className={styles.skillTag}>Computer Vision</span>
                    <span className={styles.skillTag}>OCR</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Database</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Redis</span>
                    <span className={styles.skillTag}>SQLite</span>
                    <span className={styles.skillTag}>DynamoDB</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>Linux</span>
                    <span className={styles.skillTag}>OpenCode</span>
                    <span className={styles.skillTag}>Insomnia</span>
                    <span className={styles.skillTag}>DBeaver</span>
                    <span className={styles.skillTag}>Obsidian</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Beyond programming, I'm passionate about martial arts, astronomy, 
                reading, and games. I'm a black belt Taekwondo instructor and 
                former competitor, and I've also practiced Kendo and Jiu-Jitsu. 
                Martial arts have taught me discipline, focus, and resilience — 
                values I also bring into my work.
              </p>

              <p className={styles.paragraph}>
                I'm also an amateur astronomer, and I spend part of my free time 
                exploring the night sky with my telescope. Besides that, I enjoy reading 
                books, manga, and manhwas, as well as playing video games.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
