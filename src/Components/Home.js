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
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default Home;
