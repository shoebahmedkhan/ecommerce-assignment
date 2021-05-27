import React, { useEffect, useState } from 'react'
import "./productDetails.css"
import { useLocation } from "react-router-dom";
import * as QueryString from "query-string"
import {Row,Col,Image, Container, Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetails=()=> {
    const [selectedProduct, setSelectedProduct]=useState();
    const params = QueryString.parse(useLocation().search);
    const dispatch= useDispatch();

    const {products, productsQty} = useSelector(state=>state.ProductReducer);
    const handleAddToCart=()=>{
        dispatch({type:"ADD_PRODUCT", item:productsQty+1})
    }
    useEffect(()=>{
        const product = products.filter(item=>item.id==params.productId);
        setSelectedProduct(product);
        
    },[params.productId, products])
    return (
        <Container>
            <Row><h2>Product Details</h2></Row>
             <Row>
                 {selectedProduct && selectedProduct.map(item=>(
                     <React.Fragment>
                         <Col>
                         <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                         </Col>
                        <Col >
                        <Image src={item.image} />
                      </Col>
                      <Col>
                        <p>
                            {item.name}
                        </p>
                      
                      </Col>
                      <Col>
                        <p>
                            {item.price}
                        </p>
                      
                      </Col>
                      </React.Fragment>
                 )
                 )}
                 
                 
                 </Row>
        </Container>
    )
}
