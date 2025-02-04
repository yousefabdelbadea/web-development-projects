import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './ProductDetails.module.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

export default function ProductDetails() {
  let {id,category} = useParams();
   
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


  const [ProductDetails, setProductDetails] = useState(null);
  const [relatedProducts, setrelatedProducts] = useState([]);

  function getProductDetails(id)
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      setProductDetails(data.data);
      
    })
    .catch(()=>{

    })
  }

  function getRelatedProducts(category) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({ data }) => {
      let allProducts = data.data;
      let related =  allProducts.filter((product)=> product.category.name == category);
      setrelatedProducts(related);
          
    })
    .catch(() => {});
    }

    useEffect(() => {
      getProductDetails(id);
       getRelatedProducts(category);
    }, [id,category]);

  return (
    <>
      <div className="row">
        <div className="w-1/4">
        <Slider {...settings}>
          {ProductDetails?.images.map((src)=> <img className="w-full" src={src} alt={ProductDetails?.title} />)}
        </Slider>
            
        </div>
        <div className="w-3/4 p-6">
          <h1 className="text-lg font-bold text-gray-950">{ProductDetails?.title}</h1>
          <p className="text-gray-900 font-light mt-4">{ProductDetails?.description}</p>
          <div className="flex justify-between items-center my-4">
              <span className="font-bold">{ProductDetails?.price} EGP</span>
              <span>{ProductDetails?.ratingsAverage} <i className="fas fa-star text-yellow-400"></i> </span>
            </div>

            <button className="btn">add to cart</button>
        </div>
      </div>

      <div className="row">
        {relatedProducts.map((product) => (
          <div key={product.id} className="w-1/6">
            <div className="product py-4">
                        <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                        <img className="w-full" src={product.imageCover} alt={product.title} />
                        <span className="block font-light text-green-600">{product.category.name}</span>
                        <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(' ').slice(0,2).join(' ')}</h3>
            
                        <div className="flex justify-between items-center">
                          <span>{product.price} EGP</span>
                          <span>{product.ratingsAverage} <i className="fas fa-star text-yellow-400"></i> </span>
                        </div>        
                        <button className="btn">add to cart</button>
                        </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

