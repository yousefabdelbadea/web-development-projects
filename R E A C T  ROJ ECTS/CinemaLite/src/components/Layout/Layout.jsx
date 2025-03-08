import React from "react"
import Style from './Layout.module.css';
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


export default function Layout() {

  return (
    <>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
};

