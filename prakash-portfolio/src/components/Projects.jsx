import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCode,
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiSend
} from "react-icons/fi";

const technicalProjects = [
  {
    id: "whatsapp-automation",
    title: "Google Sheets – WhatsApp Automation Workflow",
    type: "Automation & Backend Pipeline",
    description:
      "An automated communication pipeline built with Python that continuously fetches client contact and lead records from Google Sheets and triggers personalized, contextual WhatsApp outreach messages.",
    image: "/images/whatsapp_automation.jpg",
    bullets: [
      "Built an automation workflow that reads names, contact data, and custom parameters from Google Sheets in real-time.",
      "Generates customized WhatsApp message templates dynamically based on user status and action triggers.",
      "Eliminates repetitive manual outreach, reducing communication time and human errors by over 90%.",
      "Designed modular error handling, rate limiting, and execution logging for uninterrupted delivery."
    ],
    tech: ["Python", "Google Sheets API", "WhatsApp Automation", "JSON", "Automation Scripting"],
    isReverse: false
  },
  {
    id: "fullstack-ecommerce",
    title: "Full-Stack MERN E-Commerce Web Application",
    type: "Full-Stack Web Engineering",
    description:
      "A complete end-to-end e-commerce platform equipped with a dynamic product catalog, user authentication, interactive cart management, and scalable RESTful API endpoints.",
    image: "/images/ecommerce.jpg",
    bullets: [
      "Developed responsive React.js UI with real-time product browsing, category filtering, and cart drawer calculations.",
      "Engineered secure REST APIs using Node.js and Express.js for product CRUD operations, cart logic, and user auth.",
      "Integrated MongoDB database with structured schemas for user profiles, inventory management, and orders.",
      "Implemented token-based authentication and secure session handling for buyer accounts."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    isReverse: true
  },
  {
    id: "portfolio-platform",
    title: "Personal Portfolio & Commercial Showcase Website",
    type: "Frontend & Performance Architecture",
    description:
      "A high-speed, modern personal branding and commercial software showcase platform featuring rich aesthetics, micro-animations, turnkey product sales routing, and instant contact workflows.",
    image: "/images/saas.jpg",
    bullets: [
      "Crafted custom design system with dark-mode glassmorphism, responsive CSS tokens, and fluid layout typography.",
      "Implemented smooth viewport entrance transitions and interactive badges powered by Framer Motion.",
      "Integrated turnkey ready-to-sale commercial portal connecting live deployed platforms directly to client inquiries.",
      "Optimized for 95+ performance, accessibility, and SEO with automated Netlify CI/CD deployment."
    ],
    tech: ["React.js", "Framer Motion", "Vanilla CSS", "Vite", "Netlify"],
    isReverse: false
  }
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FiLayers />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Technical Projects &amp; <span>Automation Workflows</span>
          </h2>
          <p className="section-subtitle">
            Core software engineering projects demonstrating full-stack architecture, API integration, database design, and intelligent process automation.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-grid">
          {technicalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.isReverse ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image Preview */}
              <div className="project-preview-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              {/* Info Column */}
              <div className="project-info">
                <div className="project-tag-bar">
                  <span className="project-type-tag">{project.type}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Architectural Bullets */}
                <div className="project-bullets-list">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="project-bullet-item">
                      <FiCheckCircle className="project-bullet-icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="project-tech-pills">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-links">
                  <a
                    href="https://github.com/Prakash-kr-sharma"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{ padding: "10px 18px", fontSize: "13px" }}
                  >
                    <FiGithub />
                    <span>View on GitHub</span>
                  </a>

                  <a
                    href="#contact"
                    className="btn-primary-gradient"
                    style={{ padding: "10px 18px", fontSize: "13px" }}
                  >
                    <FiSend />
                    <span>Discuss Architecture</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
