import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import contentV from './assets/js/Viscerocraneo';
import PagesCards from './PagesCards';

const VisceroCards = ({ information }) => {
  return (
    <div className=''>
      <div className="container">
        <div className="row animate__animated animate__fadeInUp">
          <h1 className='title-h1'><b>{information.title}</b></h1>
          {
            <Row xs={1} sm={2} md={3} className="g-3">
              {
                contentV.map(info => (
                  <Col>
                    <div className='' key={info.bone}>
                      <PagesCards title={info.title} image={info.boneImg} url={info.url} />
                    </div>
                  </Col>
                ))
              }
            </Row>
          }
        </div>
      </div>
    </div>
  )
}

export default VisceroCards;