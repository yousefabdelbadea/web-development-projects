import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './TemplateName.module.css';


export default function TemplateName() {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{

  },[]);
  return (
    <>
      <h1>TemplateName</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem, distinctio esse optio velit vel!</p>
    </>
  );
};

