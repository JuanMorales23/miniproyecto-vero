import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import information from './assets/js/Index';
import NavbarIndex from './NavbarIndex';
import VisceroCards from './VisceroCards';
import NeuroCards from './NeuroCards';

const Bones = () => {
  let {part} = useParams();
  const [type, setType] = useState({});

  const identifier = () => {
    if(part === "neurocraneo"){
      setType(information[0]);
    }else{
      setType(information[1]);
    }
  }

  useEffect(() => {
    identifier();
  }, []);
  
    return(
    <div>
      <NavbarIndex information={information} />
      {part === "neurocraneo" ? <NeuroCards information={type} /> : <VisceroCards information={type} /> }
    </div>
  )
}

export default Bones