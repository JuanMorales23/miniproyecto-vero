import React from 'react';
import CardIndex from './CardIndex';
import '../components/assets/css/Cards.css'
import { Col, Row } from 'react-bootstrap';

const Cards = ({ information }) => {
  return (
    <div className='container'>
      <div className='row cards-index animate__animated animate__fadeInUp'>
        <h1 className='title-h1'><b>Modelo anatómico</b></h1>
        <h2 className=''>Huesos del neurocráneo y el viscerocráneo</h2>
        <p className='text'>Los cartílagos y los huesos cumplen funciones comunes para el sostén del cuerpo, asegurar la locomoción corporal y tienen a su cargo una función protectora de los órganos blandos en las regiones del tórax y de la pelvis, así como del sistema nervioso central.</p>
        <p className='text'>Los huesos se diferencian notablemente entre sí, en cuanto a forma, tamaño y grosor, tanto dentro del individuo, como cuando se comparar entre las especies. en el cráneo se encuentran huesos planos y anchos, y algunos de estos están neumatizados.  los huesos del cráneo están unidos entre sí por medio de suturas que pueden ser del tipo dentada, plana, escamosa o foliada. König, H  y Liebich, H. (2005). </p>
        <p className='text'>A continuación, se encuentra el modelo anatómico sobre los huesos del cráneo bovino de modo ilustrativo, cada hueso esta señalado con un color distintivo, a su vez se encontrará la información respectiva. Este modelo fue realizado por Verónica Angel, Johana Múnera, Andrea García y Manuela Pineda.</p>
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