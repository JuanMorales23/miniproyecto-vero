import React from "react";
import NavbarIndex from "./NavbarIndex";
import "./assets/css/Pages.css";
import vacas from "../components/assets/img/vacas.jpg";

const Page1 = () => {
  return (
    <div className="fondo">
      <NavbarIndex />
      <div className="container animate__animated animate__fadeInUp">
        <br />
        <br />
        <br />
        <div className="row info">
          <h1>Parte de la cabeza</h1>
          <div className="img-responsive">
            <img src={vacas} alt="vacas"></img>
          </div>
          <br />
          <div className="col-md- centrar justify-content-md-center">
            <h2>Información</h2>
            <br />
            <p>
              La vaca, en el caso de la hembra, o toro, en el caso del macho, es
              un mamífero artiodáctilo de la familia de los bóvidos. Anteriormente
              era considerado una subespecie de Bos primigenius, pero un estudio
              reciente lo considera una especie distinta
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
