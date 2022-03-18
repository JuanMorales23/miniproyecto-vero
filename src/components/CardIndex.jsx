import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardIndex = ({title, description, image, url}) => {
  return (
    <div>
      <Card border="info" style={{ width: "20rem" }}>
      <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={url} variant="primary" className="btn btn-dark">
            Ingresar
          </Link>
        </Card.Body>
      </Card> 
    </div>
  );
};

export default CardIndex;
