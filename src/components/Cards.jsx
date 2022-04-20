import React from 'react';
import CardIndex from './CardIndex';
import '../components/assets/css/Cards.css'
import { Col, Row } from 'react-bootstrap';

const Cards = ({ information }) => {
  return (
    <div className='container'>
      <div className='row cards-index animate__animated animate__fadeInUp'>
        <h1 className='title-h1'>Modelo anatómico</h1>
        <h2 className=''><b>Huesos del neurocráneo y el viscerocráneo</b></h2>
        <p className='text'>Los huesos del cráneo se encuentran organizados en dos regiones particulares,
          el neurocráneo y el viscerocráneo (cara). Los huesos del cráneo están conformados por todas
          aquellas estructuras óseas que forman la cavidad craneana, ocular y cavidad timpánica y que protege
          estructuras encefálicas, órganos de la visión y la audición y los hueso del viscerocráneo son todas
          aquellas estructuras óseas que conforman y/o protegen los órganos de la cavidad nasal y bucal.</p>
        {
          <Row xs={1} md={2} className="g-3">
            {
              information.map(info => (
                <Col>
                  <div className='' key={info.id}>
                    <CardIndex part={info.part} title={info.title} description={info.description} image={info.image} url={info.url} />
                  </div>
                </Col>
              ))
            }
          </Row>
        }
      </div>
    </div>
  )
}

export default Cards