import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShoppingBag,
  FiCode,
  FiCheckCircle,
  FiTerminal
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-status-tag">
              <span className="pulse-dot"></span>
              <span>Based in Delhi, India • Open for Work & Client Projects</span>
            </div>

            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="gradient-name">Prakash Kumar</span>
            </h1>

            <div className="hero-role">
              <span>Full-Stack Developer</span>
              <span className="hero-role-divider">•</span>
              <span className="hero-role-secondary">MERN & Python Automation</span>
            </div>

            <p className="hero-bio">
              Computer Science graduate specializing in <strong>React.js</strong>, <strong>Node.js</strong>, 
              <strong> Express</strong>, <strong>MongoDB</strong>, and <strong>Python Automation</strong>. 
              I design modern, high-performance web applications and production-ready commercial solutions that deliver immediate value.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#ready-to-sale" className="btn-sale-highlight">
                <FiShoppingBag />
                <span>Ready-To-Sale Websites</span>
              </a>

              <a href="#projects" className="btn-primary-gradient">
                <span>View Projects</span>
                <FiArrowRight />
              </a>

              <a
                href="/Prakash-Kumar-Resume.pdf"
                download="Prakash-Kumar-Resume.pdf"
                className="btn-outline"
                title="Download Prakash Kumar's Resume"
              >
                <FiDownload />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials">
              <a
                href="https://github.com/Prakash-kr-sharma"
                target="_blank"
                rel="noreferrer"
                className="nav-social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/prakash-kumar-457140254/"
                target="_blank"
                rel="noreferrer"
                className="nav-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:prakashsharma845416@gmail.com"
                className="nav-social-btn"
                aria-label="Email Prakash"
                title="Email Me"
              >
                <FiMail />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="hero-footer-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Commercial Sites</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Full Stack Stack</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Python</span>
                <span className="stat-label">Workflow Automation</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7.4</span>
                <span className="stat-label">B.Tech CGPA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Top Floating Badge */}
            <motion.div
              className="floating-badge floating-badge-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="floating-icon purple">
                <FiCode />
              </div>
              <div>
                <div className="floating-text-primary">Clean Architecture</div>
                <div className="floating-text-secondary">React 19 & Node.js REST APIs</div>
              </div>
            </motion.div>

            {/* Main Interactive Terminal / Card */}
            <div className="hero-card-showcase">
              <div className="showcase-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <span className="showcase-badge">
                  <FiTerminal style={{ marginRight: "4px" }} /> prakash-profile.js
                </span>
              </div>

              <div className="code-terminal-body">
                <div>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  name: <span className="code-string">"Prakash Kumar"</span>,
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  degree: <span className="code-string">"B.Tech CSE (2025)"</span>,
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  coreFocus: [<span className="code-string">"FullStack"</span>, <span className="code-string">"Automation"</span>],
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  commercialLive: <span className="code-keyword">true</span>,
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  availableForHire: <span className="code-keyword">true</span>
                </div>
                <div>&#125;;</div>
                <div className="code-comment" style={{ marginTop: "10px" }}>
                  // Deploying fast, responsive web solutions
                </div>
              </div>

              <div className="showcase-mini-tags">
                <span className="mini-tag">⚡ React.js</span>
                <span className="mini-tag">🟢 Node / Express</span>
                <span className="mini-tag">🍃 MongoDB</span>
                <span className="mini-tag">🐍 Python</span>
                <span className="mini-tag">✨ Prompt Eng.</span>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <motion.div
              className="floating-badge floating-badge-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="floating-icon green">
                <FiCheckCircle />
              </div>
              <div>
                <div className="floating-text-primary">Ready To Sale Sites</div>
                <div className="floating-text-secondary">Bakery & B2B Wholesale Live</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;