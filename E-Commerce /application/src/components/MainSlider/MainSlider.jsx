import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './MainSlider.module.css';
import slide1 from "../../assets/slider-2.jpeg";
import slide2 from "../../assets/slider-1.jpeg";
import mainSlider from "../../assets/slider-image-1.jpeg";
import mainSlider1 from "../../assets/slider-image-2.jpeg";
import mainSlider2 from "../../assets/slider-image-3.jpeg";

import Slider from "react-slick";

export default function MainSlider() {

   var settings = {
     dots: false,
     infinite: true,
     speed: 1500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     arrows:false
   };

  useEffect(()=>{

  },[]);
  return (
    <>
      <div className="row">
        <div className="w-3/4">
          <Slider {...settings}>

            <img src={mainSlider} className="w-full h-[500px]" alt="" />
            <img src={mainSlider1} className="w-full h-[500px]" alt="" />
            <img src={mainSlider2} className="w-full h-[500px]" alt="" />
          </Slider>
        </div>
        <div className="w-1/4">
          <img src={slide1} className="w-full h-[250px]" alt="" />
          <img src={slide2} className="w-full h-[250px]" alt="" />
        </div>
      </div>
    </>
  );
};

