import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";


import "../slider/slider.css";

const ASlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Best service, I recomended it"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mohamed</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I can now order my brakfast with best service and prices"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Khadija</h6>
        </div>
      </div>
      
      <div>
        <p className="review__text">
          "I think you need to some iprovement to get more clients"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Ali</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Worst service"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />
          <h6>Olivia</h6>
        </div>
      </div>
     </Slider>
  );
};

export default ASlider;
