import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();


export function CartContextProvider(props){
    
    let headers ={
        token:localStorage.getItem('userToken')
    }

    let [cart,setCart] = useState(null);

    function getCartItems()
    {
       return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:headers
        })
        .then((response)=>response)
        .catch((error)=>error)
    }

    function removeCartItem(productId){
       return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:headers
       })
       .then((response)=>response)
       .catch((error)=>error)
    }

     function updateCartItem(productId,count) {
       return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        count:count
       } ,{
           headers: headers,
         })
         .then((response) => response)
         .catch((error) => error);
     }


     function addToCart(productId)
    {
        return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers:headers
        })
        .then((response)=>response)
        .catch((error)=>error)
    }

    async function getCart(){
       let response= await getCartItems();
       setCart(response.data);
    }

    useEffect(()=>{
        getCart();
    },[])
    return <CartContext.Provider value={{cart,setCart,addToCart,getCartItems,removeCartItem,updateCartItem}}>
            {props.children}
    </CartContext.Provider>

}