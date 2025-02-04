import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './Categories.module.css';


export default function Categories() {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{

  },[]);
  return (
    <>
      <h1>Categories</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem, distinctio esse optio velit vel!</p>
    </>
  );
};

