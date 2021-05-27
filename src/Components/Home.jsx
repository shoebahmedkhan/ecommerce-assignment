import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../state/selectors/ProductSelector";
import { Header } from "./Header";
import "./home.css";
import { ProductList } from "./ProductList";
export const Home = ()=>{
    const [products,setProducts]=useState();
    const selector = useSelector(getAllProduct);
    useEffect(()=>{
        setProducts(selector)
    },[selector])
     return(
        <div>
         <Header/>
         {products && products.map((items)=>(
             <ProductList currentitem={items}/>
         ))}
        </div>
    );
}