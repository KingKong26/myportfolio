import React from "react";
import "./hero.css";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section left">
        <div className="section-icon">👋</div>
        <div className="section-title">Hello, I am Vishnu Mohanan</div>
        <div className="section-desc">
          I am a <span>software dev</span> with 1+ years of experience, focusing on
          UI/UX development and interested in case studies of the same.
        </div>
      </div>
      <div className="hero-section right">
        <BgAnimation />
      </div>
    </div>
  );
};

export default Hero;
