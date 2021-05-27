import React from 'react'
import { Card, Container ,Button,Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import "./productlist.css"

export const ProductList=({currentitem}) =>{
  const {productsQty} = useSelector(state=>state.ProductReducer);
  const dispatch = useDispatch();

  const handleAddToCart=()=>{
    dispatch({type:"ADD_PRODUCT", item:productsQty+1})
}
  
       

      return (
     <div className="card-data">
          <Row>
          <Card className="main-content">
              <Link to={`productDetails?productId=${currentitem.id}`}>
  <Card.Img className="product-image" src={currentitem.image}/>
     </Link>
  <Card.Body className="content">
    <Card.Title>{currentitem.name}</Card.Title>
        <p>
            <small>&#8377;</small>
            <strong>{currentitem.price}</strong>
        </p>
        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
  </Card.Body>
</Card>
</Row>
      </div>
    )
}
