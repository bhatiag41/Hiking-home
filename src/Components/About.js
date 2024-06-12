import React from "react";
import AboutBackgroundImage from "../Assets/img25.jpg";


const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Rock Climbing
        </h1>
        <p className="primary-subheading">1. Classes and Events</p>
        <p className="primary-text">
        Hatha is the most classic yoga. Its origin 
is in the Raya Yoga of Patanjali and other 
classical texts such as 
 
        </p>
        <p className="primary-text">
        Bhagavad Gita and Hatha Yoga 

Pradipika.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
