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
                <h3 className={styles.expRole}>AI Backend Engineer</h3>
                <p className={styles.expCompany}>Teddy Open Finance</p>
                <p className={styles.expDesc}>
                  I worked in the Artificial Intelligence squad, developing AI-powered 
                  products integrated into the company's ecosystem.
                </p>
                <br />
                <p className={styles.expDesc}>
                  Main contributions:
                </p>
                <ul className={styles.expList}>
                  <li>
                    I developed the Simula House product from start to finish, an intelligent 
                    chatbot integrated with WhatsApp, specializing in financial simulations 
                    (loans and financing) for the real estate sector, from architectural design 
                    to implementation, integrations, and deployment in production.
                  </li>
                  <li>
                    I developed, from start to finish, a chat application based on 
                    RAG architecture, trained with data from previous FEBRABAN audits, 
                    to support the compliance team. I structured the dataset, implemented 
                    the API, authentication, and security layers, delivering a robust 
                    and scalable solution.
                  </li>
                  <li>
                    I restructured the SAM Docs AI microservice by applying best 
                    architectural practices and evolved the solution from a monolithic 
                    agent to a pipeline with multiple specialized agents orchestrated 
                    via LangGraph. I implemented parallel file processing, reducing 
                    latency by approximately 50% and increasing the scalability, 
                    modularity, and accuracy of extractions.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>July 2023 - July 2025</span>
                </div>
                <h3 className={styles.expRole}>AI Backend Engineer</h3>
                <p className={styles.expCompany}>Senai Alagoas</p>
                <p className={styles.expDesc}>
                  I worked on the SSCP (Senai System for People Certification) project, 
                  a software specialized in professional management and certification, 
                  as well as on Senai Play, an online course platform. In addition, I 
                  contributed to the Product & Innovation (P&I) sector, 
                  developing Proofs of Concept (POCs) and MVPs using 
                  artificial intelligence.
                </p>
                <br />
                <p className={styles.expDesc}>
                  Main contributions:
                </p>
                <ul className={styles.expList}>
                  <li>
                    I served as a technical reference on the SSCP project, assisting 
                    in development, proposing scalable solutions, and leading the 
                    implementation of the most complex functionalities.
                  </li>
                  <li>
                    I developed a queuing-based solution to optimize the processing of 
                    embeddings in chatbot-as-a-service, improving the scalability and 
                    efficiency of RAG usage.
                  </li>
                  <li>
                    I designed and implemented a microservice for generating questions 
                    from transcripts for Senai Play, leveraging generative AI with Gemini, 
                    integrating educational innovation with scalable solutions.
                  </li>
                  <li>
                    I significantly improved the performance of computer vision algorithms 
                    by optimizing real-time image processing via WebSockets.
                  </li>
                  <li>
                    I restructured and optimized the multi-tenant architecture of the SSCP 
                    project, resolving critical issues and improving the scalability and 
                    efficiency of the team's deliverables.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>June 2021 - July 2023</span>
                </div>
                <h3 className={styles.expRole}>Backend Engineer</h3>
                <p className={styles.expCompany}>WLC Solutions</p>
                <p className={styles.expDesc}>
                  I actively participated in the following projects:
                </p>
                <ul className={styles.expList}>
                  <li>
                    WSaúde, management software for the healthcare sector.
                  </li>
                  <li>
                    Fiscal Cripto, platform for declaring cryptocurrency assets.
                  </li>
                  <li>
                    O&G ADV, legal system for law firms.
                  </li>
                </ul>
                <br />
                <p className={styles.expDesc}>
                  Main contributions:
                </p>
                <ul className={styles.expList}>
                  <li>
                    I designed and implemented a robust multi-tenant architecture 
                    framework for the WSaúde and O&G ADV projects, 
                    including authentication, security, middleware, and access 
                    control, ensuring scalability and proper data isolation.
                  </li>
                  <li>
                    I developed a ticket-based authentication system and a 
                    multi-tenant tunnel for WebSocket at WSaúde, ensuring secure 
                    communication and enabling essential functionalities for closing 
                    a strategic contract.
                  </li>
                  <li>
                    I developed a microservice for WSaúde responsible for validating 
                    and generating TISS forms, the ANS standard for exchanging health 
                    information. The speed and quality of delivery were key to securing a 
                    highly profitable contract.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>February 2021 - June 2021</span>
                </div>
                <h3 className={styles.expRole}>Frontend Developer Intern</h3>
                <p className={styles.expCompany}>Communicatti Group</p>
                <p className={styles.expDesc}>
                  I developed interfaces for 20 projects, always prioritizing pixel-perfect 
                  quality and ensuring fast deliveries. I was widely praised for my ability 
                  to deliver within established deadlines while maintaining excellence in 
                  execution. My speed in delivery and high quality standards were constantly 
                  highlighted, resulting in continuous recognition within the team.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>September 2020 - February 2021</span>
                </div>
                <h3 className={styles.expRole}>Full Stack Developer Intern</h3>
                <p className={styles.expCompany}>City Hall of Maceió</p>
                <p className={styles.expDesc}>
                  I worked on the development and maintenance of essential internal 
                  systems for the management of the City Hall of Maceió, including:
                </p>
                <ul className={styles.expList}>
                  <li>
                    Bidding management software, ensuring greater control and 
                    security in internal processes.
                  </li>
                  <li>
                    Access control system, optimizing the flow and security 
                    of the agency.
                  </li>
                </ul>
                <p className={styles.expDesc}>
                  One of the main challenges was investigating and correcting a 
                  critical vulnerability exploited by an attack on the bidding 
                  system, caused by a flaw in the reCAPTCHA integration. This 
                  correction was essential to prevent brute-force attacks, reinforcing 
                  the system's protection against unauthorized access. In addition, 
                  I implemented structural improvements to the code, enhancing the 
                  robustness and efficiency of the systems.
                </p>
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
