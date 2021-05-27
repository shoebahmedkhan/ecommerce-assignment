import React from 'react'
import { Card, Container ,Button,Row} from 'react-bootstrap'
import "./productlist.css"

export const ProductList=({currentitem}) =>{
    return (
     <div className="card-data">
          <Row>
          <Card className="main-content">
  <Card.Img className="product-image" src={currentitem.image}/>
  <Card.Body className="content">
    <Card.Title>{currentitem.name}</Card.Title>
    <p>{currentitem.price}</p>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Button variant="primary">View Details</Button>
  </Card.Body>
</Card>
</Row>
 {/* <Card bg="primary" text="white" style={{ width: '30rem',height:'40rem'}}>
          <div className="Cards">
            <div className="Card">
                <div className="card_info">
                    <p>{currentitem.name}</p>
                    <p className="card_price">
                        <small>&#8377;</small>
                        <strong>{currentitem.price}</strong>
                    </p>
                   

                </div>
                <img src={currentitem.image} alt=""/>
                <button>Add To Cart</button>
            </div>
        </div>
  
  </Card> */}
      </div>
    )
}
