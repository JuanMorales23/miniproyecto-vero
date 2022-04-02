import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../components/assets/css/Single-card.css'

const CardIndex = ({title, description, image, url}) => {
  return (
    <div>
      <Card className="single-card img-resposive animate__animated animate__fadeInUp">
      <Card.Title className="title"><b>{title}</b></Card.Title>
        <Card.Img variant="top" src={image} className="img-responsive" />
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
