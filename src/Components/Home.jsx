import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../state/selectors/ProductSelector";
import "./home.css";
import { ProductList } from "./ProductList";
export const Home = ()=>{
    const [products,setProducts]=useState();
    const selector = useSelector(getAllProduct);
    console.log("checking===>",selector)

    useEffect(()=>{
        setProducts(selector)
    },[selector])
   
    return(
        <div>
         <header className="heading">this is header</header>
         {products && products.map((items)=>(
             <ProductList currentitem={items}/>
         ))}
         
        </div>
    );
}