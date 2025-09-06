import React from "react";
import "../styles/WhyHire.css";
// Import the React Icons you need
import { FaBolt, FaChartLine, FaAward } from "react-icons/fa";

const WhyHire = () => {
  return (
    <section className="why-hire">
      <h2 className="features-title">Why Hire Me?</h2>
      <p className="features-subtitle">
        Trusted by businesses to deliver consistent growth, visibility, and results.
      </p>

      <div className="why-stats">
        <div className="stat">
          <FaBolt className="stat-icon" />
          <h3><b className="highlight">No. 1</b> Higher Conversions</h3>
          <p>Turn clicks into paying customers with proven SEO strategies.</p>
        </div>
        <div className="stat">
          <FaChartLine className="stat-icon" />
          <h3><b className="highlight">+200%</b> More Traffic</h3>
          <p>Boost organic visitors through data-driven optimization.</p>
        </div>
        <div className="stat">
          <FaAward className="stat-icon" />
          <h3><b className="highlight">Top 5</b> Search Rankings</h3>
          <p>Outrank competitors and secure the top spots on Google.</p>
        </div>
      </div>

      <button className="hire-btn">Hire Me</button>
    </section>
  );
};

export default WhyHire;