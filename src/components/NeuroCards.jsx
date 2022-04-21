import React from 'react';
import '../components/assets/css/Cards.css';
import contentN from './assets/js/Neurocraneo';
import { Col, Row } from 'react-bootstrap';
import PagesCards from './PagesCards';

const NeuroCards = ({ information }) => {
  return (
    <div className=''>
      <div className="container">
        <div className="row cards-index animate__animated animate__fadeInUp">
          <h1 className='title-h1'><b>{information.title}</b></h1>
          {
            <Row xs={1} sm={2} md={3} className="g-3">
            {
            contentN.map(info => (
              <Col>
                <div key={info.bone}>
                  <PagesCards title={info.title} url={info.url} bone={info.bone} />
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

export default NeuroCards