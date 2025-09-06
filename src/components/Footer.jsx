import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">SEO<span>Boost</span></h2>
          <p className="footer-tagline">
            Driving organic growth & measurable success for your business.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4 className="footer-title">Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <p>Email: info@seoboost.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SEOBoost. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
