import React from "react";

import Navbar from "./Navbar";
import "../App.css";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading-home">
           Discover your next Hike
          </h1>
          <p className="primary-text-home">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
   
      </div>
    </div>
  );
};

export default Home;
