import React, { useContext } from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './RecentProducts.module.css';
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function RecentProducts() {

  let {addToCart,setCart} = useContext(CartContext);

  async function addProduct(productId)
  {
   let response = await addToCart(productId);
   if(response.data.status === 'success'){
    setCart(response.data)
    toast.success("Product added successfully to your cart");
    console.log('added');
    
   }
   else{
    toast.error("Error adding product to your cart");
   } 
   console.log(response);
   
  }

  const [recentProducts,setRecentProducts] = useState([])

  function getRecentProducts()
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
      setRecentProducts(data.data);
      
    })
    .catch((error)=>{

    })
  }
  
  useEffect(()=>{
    getRecentProducts();
  },[]);
  return (
    <>
      <div className="row">
        {recentProducts.map((product) => <div key={product.id} className="w-1/6 px-4 py-4">
        <div className="product py-4">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
            <img className="w-full" src={product.imageCover} alt={product.title} />
            <span className="block font-light text-green-600">{product.category.name}</span>
            <h3 className="text-lg font-normal text-gray-800 mb-4">{product.title.split(' ').slice(0,2).join(' ')}</h3>

            <div className="flex justify-between items-center">
              <span>{product.price} EGP</span>
              <span>{product.ratingsAverage} <i className="fas fa-star text-yellow-400"></i> </span>
            </div>            
            </Link>
            <button onClick={()=>addProduct(product.id)} className="btn">add to cart</button>
        </div>
        </div>)}
        
      </div>
    </>
  );
};


