import React, { useEffect, useState } from 'react'
import "./productDetails.css"
import { useHistory, useLocation } from "react-router-dom";
import * as QueryString from "query-string"
import {Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';

export const ProductDetails=()=> {
    const [selectedProduct, setSelectedProduct]=useState();
    const [addQuantity , setAddQuantity]=useState(0)
    const adding = ()=> setAddQuantity(addQuantity+1);
    const Substracting = ()=> addQuantity >0 && setAddQuantity(addQuantity-1);
    const params = QueryString.parse(useLocation().search);
    const dispatch= useDispatch();
    const history = useHistory();

        const {products, productsQty} = useSelector(state=>state.ProductReducer);
    const handleAddToCart=()=>{
        dispatch({type:"ADD_PRODUCT", item:productsQty+1})
    }
    useEffect(()=>{
        const product = products.filter(item=>item.id==params.productId);
        setSelectedProduct(product);
        
    },[params.productId, products])
    return (
        <>
           
            {selectedProduct && selectedProduct.map(item=>(
                     <React.Fragment>
                          <Header/>
                         <div className="Details-content">
                         <img src={item.image}className="Product-image" />
                         
                         <div className="Description">
                             <h2>{item.name}</h2>
                             <p>{item.desc}</p>
                             <p><small>&#8377;</small>
                              <strong>{item.price}</strong>
                              </p>
                              <div className="quantity">
                              <p>
                                  <button onClick={Substracting}>-</button>
                                  <input type="textbox" style={{width:"20px"}} value={addQuantity}/>
                                  <button onClick={adding}>+</button>
                              </p>
                              </div>
                              <Button variant="dark" onClick={handleAddToCart}>Add to Cart</Button><p>

                              </p>
                              <Button variant="dark" onClick={e=>history.push('/')}>Back To Home</Button>
                         </div>
                      
                      </div>
                      </React.Fragment>
                 )
                 )}
         
                 
        </>
    )
}
