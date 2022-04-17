import React, { useEffect, useState } from "react";
import NavbarIndex from "./NavbarIndex";
import "./assets/css/Pages.css";
import { useParams } from "react-router-dom";
import contentN from "./assets/js/Neurocraneo";

const Neurocraneo = () => {
  let { bone } = useParams();
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [description, setDescription] = useState();

  const filterBone = (obj) => {
    if(obj.bone === bone){
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
  }, [bone]);

  return (
    <div className="fondo">
      <NavbarIndex />
      <div className="container animate__animated animate__fadeInUp">
        <div className="row title-h1">
          <h1>{title}</h1>
          <div className="img-responsive image">
            <img src={img} alt="vacas"></img>
          </div>
          <br />
          <div className="col-md- centrar justify-content-md-center">
            <br />
            <p>{description}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurocraneo;
