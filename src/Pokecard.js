import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`Pic of ${name}`} />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
