import React from 'react';
import CardIndex from './CardIndex';
import '../components/assets/css/Cards.css'

const Cards = ({ information }) => {
  return (
    <div className='container'>
      <div className='row cards-index animate__animated animate__fadeInUp'>
      <h1 className='title-h1'><b>Huesos del neurocráneo y el viscerocráneo</b></h1>
      <p className='text'>Los huesos del cráneo se encuentran organizados en dos regiones particulares, 
        el neurocráneo y el viscerocráneo (cara). Los huesos del cráneo están conformados por todas 
        aquellas estructuras óseas que forman la cavidad craneana, ocular y cavidad timpánica y que protege 
        estructuras encefálicas, órganos de la visión y la audición y los hueso del viscerocráneo son todas 
        aquellas estructuras óseas que conforman y/o protegen los órganos de la cavidad nasal y bucal.</p>
        {
          information.map(info => (
            <div className='col col-md-4' key={info.id}>          
              <CardIndex id={info.id} title={info.title} description={info.description} image={info.image} url={info.url}/>    
            </div>       
          ))
        }         
      </div>
    </div>    
  )
}

export default Cards