import React from 'react';
import CardIndex from './CardIndex';
import '../components/assets/css/Cards.css';
import contentN from './assets/js/Neurocraneo';

const NeuroCards = ({ information }) => {
  return (
    <div>
      <div className="container">
        <div className="row animate__animated animate__fadeInUp">
          <h1 className='title-h1'><b>{information.title}</b></h1>
          {
             contentN.map(info => (
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

export default NeuroCards