import React from "react";
import "../styles/Hero.css";
import person from "../assets/person_image2.png"; // your PNG person

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Top small button */}
        <button className="btn btn-login tagline">Grow your business</button>

        {/* Sentence behind person */}
        <h1 className="hero-title">
          Helping businesses achieve <br /><span>higher visibility</span>
        </h1>

        {/* Paragraph */}
        {/* <p className="hero-subtext">
          We empower brands to rank better, grow faster, and reach more customers online.
        </p> */}

        {/* Person image */}
        <div className="hero-image-container">
          <div className="hero-glow"></div>
          <img src={person} alt="Person" className="hero-image" />

          {/* Floating info cards */}
          <div className="floating-card card1">600+ Projects</div>
          <div className="floating-card card2">⭐⭐⭐⭐⭐ (500+ Reviews)</div>
          <div className="floating-card card3">120+ Testimonials</div>
          <div className="floating-card card4">Global Clients 🌍</div>

          {/* Buttons below image */}
          <div className="hero-buttons">
            <button className="btns btn-green">Get Started</button>
            <button className="btns btn-login">Book a Meeting</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
