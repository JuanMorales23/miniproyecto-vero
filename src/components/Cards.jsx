import React from 'react';
import CardIndex from './CardIndex';
import information from './assets/js/Info'
import '../components/assets/css/Cards.css'

const Cards = () => {
  return (
    <div className='container'>
      <div className='row cards'>
        {
          information.map(info => (
            <div className='col col-md-4'>          
              <CardIndex title={info.title} description={info.description} image={info.image} url={info.url}/>    
            </div>       
          ))
        }         
      </div>
    </div>    
  )
}

export default Cards