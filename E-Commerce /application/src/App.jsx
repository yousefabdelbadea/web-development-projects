import {createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import './App.css'
import Home from'./components/Home/Home'
import Layout from './components/Layout/Layout';
import { Children } from 'react';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { CartContext, CartContextProvider } from "./Context/CartContext";
import Toaster from "react-hot-toast";


let router = createBrowserRouter([
  { path: "", element: <Layout />,children:[
  { index:true, element:<ProtectedRoute><Home /></ProtectedRoute>  },
  {path:'Products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
  {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
  {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'productdetails/:id/:category' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
  {path:'categories' , element:<Categories/>},
  {path:'login' , element:<Login/>},
  {path:'register' , element:<Register/>},
  {path:'*' , element:<Notfound/>},
  ]},
 
]);


function App() {

  return (
    <CartContextProvider>
      <UserContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App
