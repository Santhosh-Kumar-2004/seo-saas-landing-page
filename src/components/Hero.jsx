import React from "react";
import "../styles/Hero.css";
import person from "../assets/person_image2.png"; // your PNG person
import { FaProjectDiagram, FaStar, FaUsers, FaChartLine } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Top small button */}
        <button className="btn tagline-btn">Grow your business</button>

        {/* Sentence behind person */}
        <h1 className="hero-title">
          Helping businesses achieve <br /><span>higher  _ visibility</span>
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
          <div className="floating-card card1">
            <FaProjectDiagram className="card-icon" /> <b className="highlight">600+</b> Projects Delivered
          </div>

          <div className="floating-card card2">
            <FaStar className="card-icon" /> <b className="highlight">500+</b> Reviews & Testimonials
          </div>

          <div className="floating-card card3">
            <FaUsers className="card-icon" /> <b className="highlight">200+</b> Active Clients Worldwide
          </div>

          <div className="floating-card card4">
            <FaChartLine className="card-icon" /> <b className="highlight">Driving 10x</b> SEO Growth
          </div>

          {/* Buttons below image */}
          <div className="hero-buttons">
            <button className="btns btn-green">Get Started</button>
            <button className="btns btn-login2">Book a Meeting</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
