import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer() {
  
  return (
    <footer>
      

<footer className="bg-white  shadow-sm  dark:bg-gray-800 flex justify-between">
  <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">CinemaLite</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="https://www.linkedin.com/in/yousef-ahmed-28889b156/" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/yousefabdelbadea" target="_blank" className="hover:underline">Github</a>
      </li>
    </ul>
  </div>
</footer>


    </footer>
  );
};

