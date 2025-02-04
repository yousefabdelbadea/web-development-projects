import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './CategoriesSlider.module.css';
import Slider from "react-slick";
import axios from "axios";


export default function CategoriesSlider() {
   const [categories, setcategories] = useState([]);

   var settings = {
     dots: false,
     infinite: true,
     speed: 1500,
     slidesToShow: 8,
     slidesToScroll: 3,
     autoplay:true,
   };

  function getCategories()
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then(({data})=>{
      setcategories(data.data);
      
    })
    .catch((error)=>{

    })
  }
  
  useEffect(()=>{
    getCategories();
  },[]);
  return (
    <div className="py-5">
      <h2 className="py-4 text-xl text-gray-800 font-medium">Shop Popular Categories</h2>
       <Slider {...settings}>
          {categories.map((category)=> <div>
            <img className="category-img w-full" src={category.image} alt="category.name" />
            <h3 className="font-light mt-2">{category.name}</h3>
          </div>)}
        </Slider>
    </div>
  );
};

