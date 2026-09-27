import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiAward,
  FiZap,
  FiTarget
} from "react-icons/fi";

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiZap />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About <span>Full-Stack & Intelligent Automation</span>
          </h2>
          <p className="section-subtitle">
            A developer focused on writing clean, scalable code and delivering production-ready web solutions that solve real business bottlenecks.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <motion.div
            className="about-card-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="about-lead-text">
                Computer Science Graduate with hands-on experience building full-stack web products and automated systems.
              </h3>

              <p className="about-paragraph">
                Graduated with a <strong>B.Tech in Computer Science & Engineering</strong> (CGPA 7.4/10) from Dr. APJ Abdul Kalam Technical University. 
                My development background spans modern frontend frameworks like <strong>React.js</strong> and <strong>Tailwind CSS</strong>, 
                coupled with robust backend development using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
              </p>

              <p className="about-paragraph">
                Beyond traditional web stacks, I specialize in <strong>workflow automation and AI-assisted development</strong>. 
                From building Google Sheets–to–WhatsApp messaging pipelines to crafting turnkey commercial e-commerce websites ready for deployment, 
                I strive to combine speed, aesthetic excellence, and architectural reliability.
              </p>
            </div>

            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <div className="highlight-bullet-icon">
                  <FiCheckCircle />
                </div>
                <div>
                  <strong style={{ color: "white" }}>Full-Stack Capabilities:</strong> React.js, Node.js, Express, MongoDB RESTful APIs.
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-bullet-icon">
                  <FiCheckCircle />
                </div>
                <div>
                  <strong style={{ color: "white" }}>Workflow Automation:</strong> Python data extraction, Google Sheets integration, and WhatsApp messaging.
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-bullet-icon">
                  <FiCheckCircle />
                </div>
                <div>
                  <strong style={{ color: "white" }}>Commercial-Grade Quality:</strong> Responsive, fast-loading, SEO-ready web applications.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Grid */}
          <div className="about-bento-grid">
            <motion.div
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bento-icon-wrapper bento-icon-purple">
                <FiCode />
              </div>
              <div>
                <h4>Frontend Precision</h4>
                <p>Component-driven UI development in React.js, clean CSS systems, responsive layouts, and interactive state management.</p>
              </div>
            </motion.div>

            <motion.div
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bento-icon-wrapper bento-icon-cyan">
                <FiDatabase />
              </div>
              <div>
                <h4>Scalable Backends</h4>
                <p>REST API creation with Node.js and Express, integrated with MongoDB databases for reliable data modeling and authentication.</p>
              </div>
            </motion.div>

            <motion.div
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bento-icon-wrapper bento-icon-green">
                <FiZap />
              </div>
              <div>
                <h4>Python Automation</h4>
                <p>Eliminating repetitive manual effort with custom scripts connecting spreadsheets, CRM records, and communication APIs.</p>
              </div>
            </motion.div>

            <motion.div
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bento-icon-wrapper bento-icon-amber">
                <FiAward />
              </div>
              <div>
                <h4>Continuous Learning</h4>
                <p>Deepening prompt engineering, LLM-based tool design, and modern DevOps for lightning-fast feature delivery.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
