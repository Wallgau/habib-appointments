import React, {useState, useEffect} from "react";
import * as data from '../../data/data.json';
import DropDown from '../../components/dropDown/DropDown';

interface Rdv {
  nom: string,
  horaire: string,
  Dr: string,
  adresse: string,
  durée: string,
  moment: string,
  accompagnant: string,
  date: string,
  id: number
}

const Home = () => {
  const listRdvParMatin: Rdv[] = data.listRdv.filter((rdv: Rdv) => rdv.moment === "aprem");
  console.log(listRdvParMatin)
  return (
    <>
      <h1>Bienvenue!</h1>
      <DropDown />
      {listRdvParMatin.map((rdv) => (
        <button key={rdv.id}>
          {rdv.nom}
        </button>
      ))}
      {/* <DropDown />
      <h2>Matin</h2>
      {listRdvParMatin.map((rdv) => (
        <button key={rdv.id}>
          {rdv.name}
        </button>
      ))}
      {listRdvParAprem.map((rdv) => (
        <button key={rdv.id}>
          {rdv.name}
        </button>
      ))} */}
    </>
  );
};

export default Home;