import React from "react";
import Cards from "./Cards";
import NavbarIndex from "./NavbarIndex";
import information from './assets/js/Index';
import '../components/assets/css/Pages.css'

const Index = () => {
  return (
    <div className="index">
      <NavbarIndex information={information} />
      <Cards information={information} />
    </div>
  );
};

export default Index;
