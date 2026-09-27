import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCopy,
  FiCheck,
  FiMessageSquare,
  FiClock,
  FiUser
} from "react-icons/fi";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Ready To Sale Website Purchase",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("prakashsharma845416@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's mail client with prefilled details
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:prakashsharma845416@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Prakash, I am reaching out from your portfolio regarding: ${formData.subject}. My name is ${formData.name || "[Client]"}.`
    );
    return `https://wa.me/919431675719?text=${text}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FiMessageSquare />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span>Exceptional Together</span>
          </h2>
          <p className="section-subtitle">
            Interested in purchasing one of the ready-to-sale websites, hiring me for a full-time role, 
            or discussing a custom web development / automation project? Reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Email Card */}
            <div className="contact-card-box">
              <div className="contact-box-icon icon-box-purple">
                <FiMail />
              </div>
              <div className="contact-box-content">
                <div className="contact-box-label">Email Address</div>
                <a
                  href="mailto:prakashsharma845416@gmail.com"
                  className="contact-box-val"
                  title="Click to email Prakash"
                >
                  prakashsharma845416@gmail.com
                </a>
              </div>
              <button
                className="contact-copy-btn"
                onClick={handleCopyEmail}
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <FiCheck style={{ color: "#10b981" }} /> : <FiCopy />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-card-box">
              <div className="contact-box-icon icon-box-green">
                <FiPhone />
              </div>
              <div className="contact-box-content">
                <div className="contact-box-label">Phone &amp; WhatsApp</div>
                <a
                  href="https://wa.me/919431675719"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-box-val"
                >
                  +91-9431675719
                </a>
              </div>
              <a
                href="https://wa.me/919431675719"
                target="_blank"
                rel="noreferrer"
                className="contact-copy-btn"
                style={{ background: "rgba(37, 211, 102, 0.15)", color: "#34d399", borderColor: "rgba(37, 211, 102, 0.3)" }}
              >
                <FiMessageSquare />
                <span>Chat</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="contact-card-box">
              <div className="contact-box-icon icon-box-cyan">
                <FiMapPin />
              </div>
              <div className="contact-box-content">
                <div className="contact-box-label">Location</div>
                <div className="contact-box-val">Delhi, India</div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="contact-card-box" style={{ background: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.25)" }}>
              <div className="contact-box-icon icon-box-green">
                <FiClock />
              </div>
              <div className="contact-box-content">
                <div className="contact-box-label" style={{ color: "#34d399" }}>Current Status</div>
                <div className="contact-box-val" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Immediately Available for Full-Time Roles, Contract Work &amp; Web Inquiries.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-desc">
              Fill in your details below to get an instant reply on project inquiries or job opportunities.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Your Name</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe or Company Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Your Email</label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-subject">Inquiry Purpose</label>
                <select
                  id="form-subject"
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="Ready To Sale Website Purchase">Buy / Inquire About Ready-to-Sale Website</option>
                  <option value="Chefose Bakery Site Inquiries">Chefose Bakery Website Customization</option>
                  <option value="THREADHUB Wholesale Inquiries">THREADHUB Wholesale Clothes Platform</option>
                  <option value="Custom Web Development Project">Custom Web Development Project</option>
                  <option value="Python & Workflow Automation">Python Automation / WhatsApp Integration</option>
                  <option value="Full-Time Job Opportunity">Full-Time Software Engineer Job Opportunity</option>
                  <option value="Other Inquiries">General Inquiries / Say Hello</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-message">Message Details</label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your requirements, project scope, or timeline..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-send-message">
                  <FiSend />
                  <span>Send via Email</span>
                </button>

                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-chat-whatsapp"
                  title="Send pre-filled message on WhatsApp"
                >
                  <FiMessageSquare />
                  <span>WhatsApp Instead</span>
                </a>
              </div>

              {submitted && (
                <div style={{ marginTop: "16px", padding: "10px 14px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px", color: "#34d399", fontSize: "13px" }}>
                  ✓ Your email client has been prepared. You can also chat immediately with Prakash on WhatsApp (+91-9431675719)!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
