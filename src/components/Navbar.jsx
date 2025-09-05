import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-buttons">
        <button className="btn btn-green">Get Started</button>
        <button className="btn btn-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
