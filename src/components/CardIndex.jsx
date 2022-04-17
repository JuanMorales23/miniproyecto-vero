import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../components/assets/css/Single-card.css'

const CardIndex = ({id, title, description, image, url}) => {
  return (
    <div>
      {
       id === 1 ? 
       <Card className="single-card1 img-resposive">
      <Card.Title className="title"><b>{title}</b></Card.Title>
        <Card.Img variant="top" className="img-responsive" />
        <Card.Body>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={url} variant="primary" className="btn btn-dark">
            Ingresar
          </Link>
        </Card.Body>
      </Card> 
      :
      <Card className="single-card2 img-resposive">
      <Card.Title className="title"><b>{title}</b></Card.Title>
        <Card.Img variant="top" className="img-responsive" />
        <Card.Body>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={url} variant="primary" className="btn btn-dark">
            Ingresar
          </Link>
        </Card.Body>
      </Card> 
      }
    </div>
  );
};

export default CardIndex;
