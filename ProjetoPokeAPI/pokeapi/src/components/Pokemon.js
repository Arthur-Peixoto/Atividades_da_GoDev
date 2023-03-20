import React, {useContext} from "react";
import favoriteContext from "../contexts/favoriteContext";

const Pokemon = (props) => {
  const {favoritePokemon, updateFavoritePokemons} = useContext(favoriteContext)
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemon.includes(pokemon.name) ? "❤️" : "🤍"
  {/*
  console.log("pokemon: ", pokemon);
*/}
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div className="poke-id">#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
            <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                    return(
                        <div className="pokemon-type-text" key={index}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <button className="pokemon-btn-heart" onClick={onHeartClick}>{heart}</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
