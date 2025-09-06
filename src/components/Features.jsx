import React from "react";
import "../styles/Features.css";
import { FaChartLine, FaSearch, FaCogs, FaGlobe, FaRocket, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    { id: 1, icon: <FaChartLine />, title: "Analytics Dashboard", desc: "Track your SEO growth with real-time analytics." },
    { id: 2, icon: <FaSearch />, title: "Keyword Research", desc: "Discover the best keywords to rank higher." },
    { id: 3, icon: <FaCogs />, title: "Automation Tools", desc: "Automate repetitive SEO tasks effortlessly." },
    { id: 4, icon: <FaGlobe />, title: "Global Reach", desc: "Expand your business visibility worldwide." },
    { id: 5, icon: <FaRocket />, title: "Faster Growth", desc: "Boost traffic & conversions with proven strategies." },
    { id: 6, icon: <FaShieldAlt />, title: "Secure SEO", desc: "Safe, reliable, and future-proof optimizations." },
  ];

  return (
    <section className="features">
      <h2 className="features-title">Our Powerful Features</h2>
      <p className="features-subtitle">
        Designed to boost your visibility, increase traffic, and grow your business exponentially.
      </p>

      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.id}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Services</button>
    </section>
  );
};

export default Features;
