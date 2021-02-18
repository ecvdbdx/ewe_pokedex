import React from "react";

//import fetchPokemons from "../utils/fetchPokemon";
function Details({ data }) {
  console.log(data);
  const {
    name,
    weight,
    sprites: { front_default: src },
    types,
  } = data;

  const typeName = types.map((e) => e.type.name);

  return (
    <div className="Details">
      {src && <img src={src} alt={name} />}
      <div className="name">name : {name}</div>
      <div className="weight">Weight : {weight}</div>
      {<div className="weight">Type : {typeName}</div>}
    </div>
  );
}

export default Details;
