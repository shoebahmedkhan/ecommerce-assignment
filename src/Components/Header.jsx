import React from 'react'
import { useSelector } from 'react-redux';
import "./home.css"

export const  Header=()=> {
    const {productsQty} = useSelector(state=>state.ProductReducer);
    return (
        <div>
            <header className="heading">This is header: {productsQty}</header>
        </div>
    )
}
