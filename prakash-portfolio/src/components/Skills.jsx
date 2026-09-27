import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
  FiCheckCircle,
  FiZap
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FiCode />,
    colorClass: "cat-purple",
    skills: ["JavaScript (ES6+)", "Python", "SQL"]
  },
  {
    title: "Frontend Engineering",
    icon: <FiLayout />,
    colorClass: "cat-cyan",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI", "State Management"]
  },
  {
    title: "Backend & APIs",
    icon: <FiServer />,
    colorClass: "cat-green",
    skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "JSON Architecture"]
  },
  {
    title: "Databases & Storage",
    icon: <FiDatabase />,
    colorClass: "cat-amber",
    skills: ["MongoDB", "MySQL", "Mongoose", "Data Modeling"]
  },
  {
    title: "AI & Automation",
    icon: <FiCpu />,
    colorClass: "cat-pink",
    skills: [
      "Prompt Engineering",
      "AI Coding Assistants",
      "LLM Applications",
      "Workflow Automation",
      "Google Sheets API",
      "WhatsApp Automation"
    ]
  },
  {
    title: "Tools & Development",
    icon: <FiTool />,
    colorClass: "cat-blue",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vite", "Chrome DevTools"]
  },
  {
    title: "Core Computer Science",
    icon: <FiZap />,
    colorClass: "cat-purple",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "HTTP Protocol & Web Architecture",
      "Debugging & Code Profiling",
      "Problem Solving"
    ]
  }
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FiZap />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical Skills &amp; <span>Tooling Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, frameworks, databases, and automation tools I leverage to build robust digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="skill-category-header">
                <div className={`skill-cat-icon ${category.colorClass}`}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags-flex">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-item-pill">
                    <span className="skill-level-dot"></span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
