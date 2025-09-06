import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2 className="features-title">Get in Touch</h2>
        <p className="features-subtitle">
          Have a project in mind? Let’s discuss how we can take your business to the next level.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left - Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>We’re always here to answer your questions.</p>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>hello@seosolutions.com</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Bengaluru, India</span>
          </div>
          <p className="sec-subtitle">Connect with us for more information.</p>
        </div>

        {/* Right - Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
