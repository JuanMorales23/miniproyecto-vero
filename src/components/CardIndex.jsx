import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../components/assets/css/Single-card.css'

const CardIndex = ({ part, title, description, image, url }) => {
  return (
    <div>
      <Card>
        <div className={url}>
          <Card.Title className="title"><b>{part}</b></Card.Title>
          <Card.Body>
            <Card.Text className="text">
              {description}
            </Card.Text>
            <Link to={url} variant="primary" className="btn btn-dark">
              Ingresar
            </Link>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CardIndex;
