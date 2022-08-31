import React, {useState, useEffect} from "react";
import * as data from '../../data/data.json';

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
  const listRdvParMatin: Rdv[] = data.listRdv.filter((rdv: Rdv) => rdv.moment === "matin");
  const listRdvParAprem: Rdv[] = data.listRdv.filter((rdv: Rdv) => rdv.moment === "aprem");
  console.log(listRdvParMatin)
  return (
    <>
      <h1>Bienvenue!</h1>
      {/* <DropDown /> */}
      <h2>Matin</h2>
      {listRdvParMatin.map((rdv) => (
        <button key={rdv.id}>
          {rdv.nom}
        </button>
      ))}
      {listRdvParAprem.map((rdv) => (
        <button key={rdv.id}>
          {rdv.nom}
        </button>
      ))}
    </>
  );
};

export default Home;