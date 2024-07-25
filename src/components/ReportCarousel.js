import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    id: 1,
    title: "Chatpata Shukriya Report",
    brand: "KURKURE",
    posts: 16,
    influencers: 16,
    date: "Mar 07 2024",
    imgSrc: "images/homePage/Image27.png",
  },
  {
    id: 2,
    title: "Chatpata Shukriya Report",
    brand: "KURKURE",
    posts: 16,
    influencers: 16,
    date: "Mar 07 2024",
    imgSrc: "images/homePage/Image27.png",
  },
  {
    id: 3,
    title: "Chatpata Report",
    brand: "KURKURE",
    posts: 16,
    influencers: 16,
    date: "Mar 07 2024",
    imgSrc: "images/homePage/Image27.png",
  },
  {
    id: 4,
    title: "Bartergram Shukriya Report",
    brand: "KURKURE",
    posts: 16,
    influencers: 16,
    date: "Mar 07 2024",
    imgSrc: "images/homePage/Image27.png",
  },
  {
    id: 5,
    title: "Bartergram 555 Report",
    brand: "KURKURE",
    posts: 16,
    influencers: 16,
    date: "Mar 07 2024",
    imgSrc: "images/homePage/Image27.png",
  },
  // Add more items as needed
];

export default function ReportCarousel () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2; // Adjust this value to the number of items per slide

  const numSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerSlide;
      return newIndex >= items.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerSlide;
      return newIndex < 0 ? items.length - (items.length % itemsPerSlide || itemsPerSlide) : newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerSlide);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <div className="custom-carousel">
      <button className="carousel-control prev" style={{ color: "#A180DB" }} onClick={prevSlide}>
        <IoIosArrowBack />
      </button>
      <div className="carousel-items">
        {visibleItems.map((item) => (
          <div className="reportCard" key={item.id}>
            <div style={{ padding: "14px 0 11px 14px" }}>
              <div className="d-flex">
                <img
                  style={{ borderRadius: "20px", width: "39px", height: "39px", marginTop: "2px" }}
                  src={item.imgSrc}
                  alt=""
                />
                <div className="reportText">
                  <h4>{item.title}</h4>
                  <h5>{item.brand}</h5>
                </div>
              </div>
              <div className="postInfluCount">
                <div>
                  <h4>{item.posts}</h4>
                  <p>Posts</p>
                </div>
                <div style={{ marginLeft: "26px" }}>
                  <h4>{item.influencers}</h4>
                  <p>Influencers</p>
                </div>
                <img src="images/homePage/instaIcon.png" alt="" />
              </div>
            </div>
            <button className="reportCardBtn">
              Created on {item.date}
              <FaArrowRight style={{ color: "#A180DB" }} />
            </button>
          </div>
        ))}
      </div>
      <button className="carousel-control next" style={{ color: "#A180DB" }} onClick={nextSlide}>
        <IoIosArrowForward />
      </button>
      <div style={{}} className="carousel-indicators">
        {Array.from({ length: numSlides }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === Math.floor(currentIndex / itemsPerSlide) ? 'active' : ''}`} // Active indicator class
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
