import React from "react";
import Cards from "./Cards";
import NavbarIndex from "./NavbarIndex";
import information from './assets/js/Index';

const Index = () => {
  return (
    <>
      <NavbarIndex information={information} />
      <Cards information={information} />
    </>
  );
};

export default Index;
