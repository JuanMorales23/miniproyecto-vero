import React, { useEffect, useState } from "react";
import NavbarIndex from "./NavbarIndex";
import "./assets/css/Pages.css";
import { useParams } from "react-router-dom";
import contentV from "./assets/js/Viscerocraneo";

const Viscerocraneo = () => {
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
    array = contentV.filter(cont => filterBone(cont));
    setTitle(array[0].title);
    setImg(array[0].boneImg);
    setDescription(array[0].description);
  }

  useEffect(() =>{
    validate();
  }, [bone]);
  
  return (
    <div className={bone}>
      <NavbarIndex />
      <div className="container animate__animated animate__fadeInUp">
        <div className="row title-h1">
          <h1>{title}</h1>
          <div className="">
          <img src={img} alt={title} className="img-fluid"></img>
          </div>
          <div className="col-md- centrar justify-content-md-center">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viscerocraneo