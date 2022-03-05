import React from 'react';
import perros from "../components/assets/img/perros.jpg";
import Card from "react-bootstrap/Card";
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const CardIndex = () => {
  return (
    <div>
        <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={perros} />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>   
      <Link
              to={"/page1"}
              variant="primary"
              className="btn btn-dark"
            >
              Ingresar
            </Link>   
    </Card.Body>
    
  </Card>
    </div>
  )
}

export default CardIndex;