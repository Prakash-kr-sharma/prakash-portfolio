import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiShoppingBag,
  FiCheckCircle,
  FiArrowRight,
  FiTag,
  FiSend,
  FiMessageSquare,
  FiLayers,
  FiZap,
  FiStar
} from "react-icons/fi";

const readyToSaleItems = [
  {
    id: "bakery-shop",
    title: "Bakery & Pastry Shop",
    category: "Food & Artisan E-Commerce",
    image: "/images/bakery.jpg",
    liveUrl: "https://my-bakery-shops.netlify.app/",
    status: "Live Demo",
    isLive: true,
    description:
      "A complete artisan bakery e-commerce experience with rich visual showcases, dynamic bestseller menus, shopping cart functionality, and responsive mobile-first ordering.",
    features: [
      "Dynamic product catalog with artisan category filters",
      "Interactive cart with instant order summaries",
      "Warm handcrafted aesthetic tailored for bakeries & cafes",
      "Responsive design tested across desktop, tablets, and phones",
      "Ready for instant custom branding and payment integration"
    ],
    tech: ["React.js", "CSS3 Glassmorphism", "Vite", "Netlify Deployment"],
    badgeColor: "live"
  },
  {
    id: "wholesale-clothes",
    title: "THREADHUB B2B Wholesale Apparel",
    category: "B2B E-Commerce & Manufacturing",
    image: "/images/wholesale.jpg",
    liveUrl: "https://wholesaleclothes.netlify.app/",
    status: "Live Demo",
    isLive: true,
    description:
      "A high-impact B2B wholesale clothing platform engineered for garment manufacturers, bulk apparel distributors, and commercial suppliers.",
    features: [
      "Bulk apparel catalog (Wedding, Festive, Corporate, Casual)",
      "Tiered volume pricing calculator (Bronze, Silver, Gold tiers)",
      "Integrated B2B quote request system for bulk buyers",
      "Enterprise fashion lookbook with high-converting CTAs",
      "Direct WhatsApp & email commercial inquiry integration"
    ],
    tech: ["React.js", "Modern Responsive CSS", "B2B Quoting", "Netlify"],
    badgeColor: "live"
  },
  {
    id: "saas-booking-dummy",
    title: "BookingFlow SaaS & Invoicing Suite",
    category: "SaaS & Appointment Platform",
    image: "/images/saas.jpg",
    liveUrl: "#contact",
    status: "Upcoming / Pre-Order",
    isLive: false,
    description:
      "A turnkey business management portal featuring client appointment scheduling, automated invoices, customer CRM, and interactive revenue analytics.",
    features: [
      "Weekly & monthly interactive appointment booking calendar",
      "Automated invoice generator with paid/pending status tracking",
      "Client management CRM with contact histories",
      "Dark-mode analytics dashboard with revenue trajectory charts",
      "Ideal for clinics, consultancies, agencies, and salons"
    ],
    tech: ["React.js", "Node.js REST API", "Chart Engine", "In Development"],
    badgeColor: "upcoming"
  }
];

function ReadyToSale() {
  const handleInquire = (itemTitle) => {
    const contactForm = document.getElementById("contact");
    const subjectSelect = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");

    if (subjectSelect) {
      subjectSelect.value = "Ready To Sale Website Purchase";
    }
    if (messageInput) {
      messageInput.value = `Hi Prakash, I am interested in acquiring/customizing the "${itemTitle}" website. Please share the details, source code handover process, and customization pricing.`;
    }

    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppLink = (itemTitle) => {
    const text = encodeURIComponent(
      `Hello Prakash! I saw your portfolio and I am interested in buying/customizing the "${itemTitle}" ready-to-sale website. Could you please share more details?`
    );
    return `https://wa.me/919431675719?text=${text}`;
  };

  return (
    <section className="section ready-to-sale-section" id="ready-to-sale">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge commercial-badge">
            <FiShoppingBag />
            <span>Commercial Web Solutions</span>
          </div>
          <h2 className="section-title">
            Ready To Sale — <span className="green-gradient">Live Websites & Turnkey Platforms</span>
          </h2>
          <p className="section-subtitle">
            Fully functional, production-grade web applications ready for instant business acquisition,
            complete source code handover, or custom deployment for your brand. Click below to test the live websites!
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="ready-sale-banner">
          <div className="ready-sale-banner-left">
            <div className="banner-sparkle-icon">
              <FiStar />
            </div>
            <div>
              <h3>Turnkey Websites Ready for Immediate Handover</h3>
              <p>
                Each project includes clean source code, responsive layouts, fast loading speeds, and full customization support.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919431675719?text=Hi%20Prakash,%20I%20want%20to%20inquire%20about%20your%20ready%20to%20sale%20websites"
            target="_blank"
            rel="noreferrer"
            className="btn-chat-whatsapp"
          >
            <FiMessageSquare />
            <span>Instant Inquiry on WhatsApp</span>
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="sale-cards-grid">
          {readyToSaleItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`sale-card ${!item.isLive ? "dummy-card" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Card Image & Badges */}
              <div className="sale-image-container">
                <img src={item.image} alt={item.title} loading="lazy" />

                <div className={`sale-status-badge ${item.badgeColor}`}>
                  {item.isLive ? (
                    <>
                      <span className="pulse-dot" style={{ background: "#032b1a" }}></span>
                      <span>{item.status}</span>
                    </>
                  ) : (
                    <>
                      <FiZap />
                      <span>{item.status}</span>
                    </>
                  )}
                </div>

                <div className="sale-category-badge">
                  <FiTag style={{ marginRight: "4px" }} />
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="sale-card-body">
                <h3 className="sale-card-title">{item.title}</h3>
                <p className="sale-card-desc">{item.description}</p>

                {/* Features List */}
                <div className="sale-features-list">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="sale-feature-item">
                      <FiCheckCircle className="sale-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="sale-tech-stack">
                  {item.tech.map((techName, tIdx) => (
                    <span key={tIdx} className="sale-tech-pill">
                      {techName}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="sale-actions-group">
                  {item.isLive ? (
                    <>
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-visit-live"
                        title={`Visit ${item.title} Live Website`}
                      >
                        <span>Visit Website</span>
                        <FiExternalLink />
                      </a>

                      <a
                        href={getWhatsAppLink(item.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-inquire-sale"
                        title="Buy or Inquire about this website"
                      >
                        <FiShoppingBag />
                        <span>Inquire / Buy</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-reserve-dummy"
                      title="Pre-order or request this custom platform"
                    >
                      <FiZap />
                      <span>Pre-Order / Request Customization</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Box */}
        <motion.div
          className="custom-order-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="custom-order-box-left">
            <h3>Need a Custom Website or Application Built for Your Business?</h3>
            <p>
              I can build you a tailored web platform from scratch with custom branding, payment gateways,
              responsive UI, and WhatsApp/Email automation workflows in as little as 3–5 days.
            </p>
          </div>

          <div className="custom-order-actions">
            <a href="#contact" className="btn-primary-gradient">
              <span>Order Custom Build</span>
              <FiArrowRight />
            </a>
            <a
              href="https://wa.me/919431675719?text=Hi%20Prakash,%20I%20need%20a%20custom%20website%20built%20for%20my%20business"
              target="_blank"
              rel="noreferrer"
              className="btn-chat-whatsapp"
            >
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ReadyToSale;
