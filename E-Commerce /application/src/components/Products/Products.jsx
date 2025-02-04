import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './Products.module.css';


export default function Products() {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{

  },[]);
 
  
  return (
    <>
      <h1>Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem, distinctio esse optio velit vel!</p>
    </>
  );
};

