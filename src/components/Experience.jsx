import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiAward,
  FiMapPin,
  FiCalendar,
  FiCheckCircle
} from "react-icons/fi";

const timelineItems = [
  {
    type: "experience",
    role: "Data Annotator",
    company: "RMSI Private Limited",
    period: "Dec 2025 – May 2026",
    location: "Noida, India",
    bullets: [
      "Performed structured data annotation and quality checks while following detailed guidelines and maintaining accuracy across datasets.",
      "Reviewed and validated data consistently, developing strong attention to detail, accuracy, and quality-focused problem-solving skills."
    ]
  },
  {
    type: "experience",
    role: "Frontend Developer Intern",
    company: "Lavel Tech Private Limited",
    period: "Jun 2025 – Aug 2025",
    location: "India",
    bullets: [
      "Developed responsive React.js interfaces and modular, reusable UI components for client web applications.",
      "Collaborated using Git/GitHub workflows and integrated RESTful APIs for dynamic client-side rendering and state management."
    ]
  },
  {
    type: "education",
    role: "Bachelor of Technology — Computer Science & Engineering",
    company: "Dr. APJ Abdul Kalam Technical University",
    period: "Class of 2025",
    location: "Uttar Pradesh, India",
    bullets: [
      "Graduated with a strong academic standing of 7.4 / 10 CGPA.",
      "Built rigorous foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Engineering."
    ]
  }
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FiBriefcase />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Experience &amp; <span>Education</span>
          </h2>
          <p className="section-subtitle">
            Professional roles, internships, and academic foundation that have shaped my technical problem-solving and software development capabilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-block"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="timeline-node"></div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role-title">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                  <span className="timeline-badge-date">{item.period}</span>
                </div>

                <div className="timeline-location">
                  <FiMapPin />
                  <span>{item.location}</span>
                </div>

                <div className="timeline-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="timeline-bullet-item">
                      <FiCheckCircle className="bullet-tick" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
