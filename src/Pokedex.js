import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => {
          return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
