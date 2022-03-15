import React from 'react'
import CardIndex from './CardIndex'

const Cards = () => {
  return (
    <div className='container'>
      <br />
      <br />
      <br />
      <div className='row'>
        <div className='col-md-4'>          
          <CardIndex />    
        </div>
        <div className='col-md-4'>          
          <CardIndex />    
        </div>
        <div className='col-md-4'>          
          <CardIndex />    
        </div>                
      </div>
    </div>    
  )
}

export default Cards