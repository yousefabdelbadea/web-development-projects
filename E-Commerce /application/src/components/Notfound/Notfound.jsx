import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './Notfound.module.css';


export default function Notfound() {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{

  },[]);
  return (
    <>
      <h1>Notfound</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem, distinctio esse optio velit vel!</p>
    </>
  );
};

