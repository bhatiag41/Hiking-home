import React from "react";
import PickMeals from "../Assets/img10.jpg";
import ChooseMeals from "../Assets/img12.jpg";
import DeliveryMeals from "../Assets/img11.jpg";

const Contact = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Canyon Trail",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      location: " 0.3 Miles"
    },
    {
      image: ChooseMeals,
      title: "Mountain Loop",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      location: " 0.9 Miles"
    },
    {
      image: DeliveryMeals,
      title: "Naitional Park",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum .",
      location: " 0.6 Miles"
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Hiking and Camping</p> */}
        <h1 className="primary-heading">Places to visit in Autumn</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <hr className="prop-hr"/>
            <div><b>Location: </b>{data.location}</div>
          </div>
        ))}
      </div>
      <button className="secondary-button">See More</button>
    </div>
  );
};

export default Contact;
