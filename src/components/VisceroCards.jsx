import { useEffect, useState } from 'react';
import contentV from './assets/js/Viscerocraneo';
import CardIndex from './CardIndex';

const VisceroCards = ({ information }) => {
  return (
    <div>
      <div className="container">
        <div className="row animate__animated animate__fadeInUp">
          <h1 className='title-h1'><b>{information.title}</b></h1>
          {
             contentV.map(info => (
              <div className='col col-md-4' key={info.bone}>          
                <CardIndex title={info.title} image={info.boneImg} url={info.url}/>    
              </div>       
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default VisceroCards;