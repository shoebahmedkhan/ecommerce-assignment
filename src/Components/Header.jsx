import React from 'react'
import { useSelector } from 'react-redux';
import "./home.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const  Header=()=> {
    const {productsQty} = useSelector(state=>state.ProductReducer);
    return (
        <div>
            <header className="heading">
            <h2>i-Connect Shopping Cart </h2>
                <div>
                    <h3>{productsQty}</h3>
                    < ShoppingCartIcon className="Cart-icon"/>
                </div>
              
             </header>
        </div>
    )
}
