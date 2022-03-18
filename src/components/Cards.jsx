import React from 'react';
import CardIndex from './CardIndex';
import perros from "../components/assets/img/perros.jpg";
import vacas from "../components/assets/img/vacas.jpg";
import vaca1 from "../components/assets/img/vaca1.jpeg";

const cards = [
  {
    id: 1,
    title: "Cabeza 1",
    description: "Hola",
    image: perros,
    url: "/page1"
  },
  {
    id: 2,
    title: "Cabeza 2",
    description: "Hola2",
    image: vacas,
    url: "/page2"
  },
  {
    id: 3,
    title: "Cabeza 3",
    description: "Hola3",
    image: vaca1,
    url: "/page1"
  }
];

const Cards = () => {
  return (
    <div className='container'>
      <br />
      <br />
      <br />
      <div className='row'>
        {
          cards.map(card => (
            <div className='col-md-4'>          
              <CardIndex title={card.title} description={card.description} image={card.image} url={card.url}/>    
            </div>       
          ))
        }         
      </div>
    </div>    
  )
}

export default Cards