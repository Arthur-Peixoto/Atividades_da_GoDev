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
    <div className="flex shadow-md rounded-md">
      <div className="py-0 px-1.25">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="flex flex-col justify-evenly py-2.5 pr-2.5 pl-0 flex-1">
        <div className="flex flex-row justify-between items-center">
          <h3 className="capitalize">{pokemon.name}</h3>
          <div className="poke-id">#{pokemon.id}</div>
        </div>
        <div className="flex flex-row items-center justify-between neutral-50">
            <div className="flex text-white">
                {pokemon.types.map((type, index) => {
                    return(
                      <div className={"mr-2.5 capitalize inline rounded-md p-0.5 bg-type-"+ type.type.name} key={index}>
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
