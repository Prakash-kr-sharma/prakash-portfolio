import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-text">
              PK<span>.</span>
            </div>
            <p>
              Prakash Kumar — Full-Stack Developer &amp; Automation Specialist based in Delhi, India. 
              Engineering modern web applications and ready-to-deploy digital solutions.
            </p>
          </div>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#ready-to-sale" style={{ color: "#34d399", fontWeight: "600" }}>Ready To Sale</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a
              href="https://github.com/Prakash-kr-sharma"
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              title="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/prakash-kumar-457140254/"
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:prakashsharma845416@gmail.com"
              className="nav-social-btn"
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Prakash Kumar. Built with React &amp; Modern Web Architecture.
          </div>

          <button className="btn-scroll-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
