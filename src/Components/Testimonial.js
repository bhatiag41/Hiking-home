import React from "react";
import AboutBackgroundImage from "../Assets/img16.jpg";
import "../App.css"

const Testimonial = () => {
  return (
    <div className="about-section-container-2">
    
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Mountaineering and Ice Climbing
        </h1>
        <p className="primary-subheading">2. Activities</p>
        <p className="primary-text" >
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <hr/>
        <p className="primary-text">
          17 Modules divided into 5 weekends
        </p>
        <div className="about-buttons-container">
          <div className="about-buttons">
          <h2>Start</h2>
          <h2>April15</h2>
          <h2>20:00hr</h2>
          </div>
          
        <div className="about-buttons">
          <h2>Price</h2>
          <h2>$900</h2>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
