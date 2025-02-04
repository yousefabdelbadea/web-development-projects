import React, { useContext } from "react"
import { useEffect } from "react";
import { useState } from "react";
import Style from './Navbar.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import logo from "../../assets/freshcart-logo.svg"
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  let navigat = useNavigate()
  useEffect(()=>{},[]);

  
  let { userLogin, setuserLogin } = useContext(UserContext);
  let {cart} = useContext(CartContext);
  
  function logout()
  {
    localStorage.removeItem('userToken');
    setuserLogin(null);
    navigat('/login');
  }
  return (
    <>
      <nav className="bg-main-light text-center lg:fixed top-0 left-0 right-0 items-center z-50">
        <div className="container items-center justify-between mx-auto py-2 flex flex-col lg:flex-row">
            <div className="flex ">
              <img className="pe-6" src={logo} alt="logo" />
            <ul className="flex flex-col lg:flex-row  items-center">
              {
                userLogin !== null ? <>
                <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to={''}>Home</NavLink></li>                        
              <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to='/categories'>Categories</NavLink></li> 
              <li className="py-2"><NavLink className=" mx-2 text-lg text-slate-900 font-light" to='/brands'>Brands</NavLink></li>          
              <li className="py-2"><NavLink className=" mx-2 text-lg text-slate-900 font-light" to='/products'>Products</NavLink></li>  
              
              </>:null
              }                     
            </ul>
            </div>
            <ul className="flex flex-col lg:flex-row items-center ">
              {
                userLogin == null ? <>
                  <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to={'/login'}>Login</NavLink></li>
                  <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to={'/register'}>Register</NavLink></li>
                </>: 
                <>
                  <li  className="py-2">
                    <NavLink to={'/cart'} className="mx-2 text-lg text-slate-900 font-light cursor-pointer relative">
                      <i className="fa-solid fa-cart-shopping fa-xl">
                        <span className="bg-green-600 text-white p-1 text-sm absolute top-[-17px] right-[-1px] rounded-full">{cart?.numOfCartItems}</span>
                      </i>                     
                    </NavLink>
                  </li> 
                   <li onClick={logout} className="py-2"><span className="mx-2 text-lg text-slate-900 font-bold cursor-pointer " to={'/'}>Logout</span></li> 
                </>
                
              }                      
              <li className="py-2 flex items-center">
                <i className="fab fa-facebook mx-2 "></i>
                <i className="fab fa-twitter mx-2 "></i>
                <i className="fab fa-instagram mx-2 "></i>
                <i className="fab fa-tiktok mx-2 "></i>            
              </li>  
                       
            </ul>           
        </div>
      </nav>
    </>
  );
};


