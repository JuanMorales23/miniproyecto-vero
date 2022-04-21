import React from 'react'
import NavbarIndex from './NavbarIndex'
import '../components/assets/css/Cards.css'
import bibliografia from './assets/js/Bibliografia'

const Bibliography = () => {
  return (
    <div className='index'>
        <NavbarIndex />
        <h1 className='title-h1'>Bibliografía</h1>
        <div>
            {
                bibliografia.map(b => (
                    <p key={b.id} className="text">{b.description}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Bibliography