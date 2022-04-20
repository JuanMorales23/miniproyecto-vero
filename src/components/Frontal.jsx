import React, { useEffect, useState } from 'react'
import contentN from './assets/js/Neurocraneo'
import NavbarIndex from './NavbarIndex'

const Frontal = () => {
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const [description, setDescription] = useState();

    const filterBone = (obj) => {
        if(obj.bone === "frontal"){
          return true;
        }else{
          return false;
        }
      }
    
      const validate = () => {
        let array = [];
        array = contentN.filter(cont => filterBone(cont));
        setTitle(array[0].title);
        setImg(array[0].boneImg);
        setDescription(array[0].description);
      }
    
      useEffect(() =>{
        validate();
      }, []);
    
  return (
        <div className='frontal'>
      <NavbarIndex />
      <div className="container animate__animated animate__fadeInUp">
        <div className="row title-h1">
          <h1>{title}</h1>
          <div className="img-responsive image">
            <img src={img} alt="vacas"></img>
          </div>
          <div className="col-md- centrar justify-content-md-center">
            <p>{description}</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Frontal