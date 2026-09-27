import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <a href="#home" className="logo-text" onClick={closeMenu}>
          PK<span>.</span>
        </a>
        <div className="nav-status-pill">
          <span className="pulse-dot"></span>
          <span>Available for Work</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#ready-to-sale" className="nav-link highlight-link">
          Ready To Sale
          <span className="nav-badge-pill">Live</span>
        </a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      <div className="nav-actions">
        <a
          href="https://github.com/Prakash-kr-sharma"
          target="_blank"
          rel="noreferrer"
          className="nav-social-btn"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <FiGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/prakash-kumar-457140254/"
          target="_blank"
          rel="noreferrer"
          className="nav-social-btn"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <FiLinkedin />
        </a>

        <a href="#ready-to-sale" className="nav-cta-btn">
          Explore Ready Sites
          <FiArrowUpRight />
        </a>
      </div>

      <button
        className="mobile-toggle-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#home" className="mobile-nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="#ready-to-sale" className="mobile-nav-link highlight" onClick={closeMenu}>
            🔥 Ready To Sale (Live Sites)
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Technical Skills</a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience & Education</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact & Inquiry</a>

          <div className="mobile-cta-group">
            <a href="#contact" className="btn-primary-gradient" onClick={closeMenu}>
              Get In Touch
            </a>
            <a
              href="https://wa.me/919431675719"
              target="_blank"
              rel="noreferrer"
              className="btn-chat-whatsapp"
              onClick={closeMenu}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;