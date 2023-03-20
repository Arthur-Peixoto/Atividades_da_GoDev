import React, { useState, useEffect } from "react";
import { SearchPokemon } from "../api";

const Pokecard = (props) => {
  const { pokemon } = props;
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await SearchPokemon(pokemon.name);
      setResult(data);
    };
    fetchPokemon();
  }, [pokemon.name]);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div  className="card">
        <div>
          <img
            className="pokemon-card-img"
            src={result.sprites.front_default}
            alt={result.name}
          />
          <h3 className="pokecard-id">N° {result.id}</h3>
          <h2 className="pokecard-name">{result.name}</h2>
          {result.types.map((type, index) => {
            return (
              <div className="pokemon-type-text" key={index}>
                {type.type.name}
              </div>
            );
          })}
          <div className="detalhes">
            <h2>Detalhes</h2>
            <h3>
              It’s said that no foe can remain invisible to Lucario, since it
              can detect auras—even those of foes it could not otherwise see
            </h3>
          </div>
          <div className="habilities">
            <h2>Habilidades</h2>
            <h3>{result.abilities[0].ability.name}</h3>
            <div className="info-menores">
              <div className="fraquezas"></div>
              <div className="base-xp">
                <h2>base xp</h2>
                {result.base_experience}
              </div>
            </div>
            <div className="stats">
              <h3>status</h3>
              <h4 className="status">
                <h4 className="hp">hp {result.stats[0].base_stat}</h4>
                <h4 className="atk"> atk {result.stats[1].base_stat}</h4>
                <h4 className="def"> def {result.stats[2].base_stat}</h4>
                <h4 className="Spa"> Spa {result.stats[3].base_stat}</h4>
                <h4 className="Spd">Spd {result.stats[4].base_stat}</h4>
                <h4 className="tot">Tot {result.stats[5].base_stat}</h4>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
