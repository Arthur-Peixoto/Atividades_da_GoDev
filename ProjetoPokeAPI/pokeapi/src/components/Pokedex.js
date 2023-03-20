import React , {useContext} from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import favoriteContext from "../contexts/favoriteContext";

const Pokedex = (props) => {
  const {favoritePokemons} = useContext(favoriteContext);
  const { pokemons, loading, page,  setPage , totalPages} = props;
  const onRightClick = () =>{
    if(page !== totalPages){
      setPage(page+ 1);
     }
  }
  const onLeftClick = () =>{
   if(page > 0){
    setPage(page-1);
   }
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>{/*favoritePokemons.length*/}❤️</div>
        <Pagination page={page+1} total={totalPages} onLeftClick={onLeftClick} onRightClick={onRightClick}></Pagination>
      </div>
      {loading ? (
        <div> Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <div>
                  <div>
                    <Pokemon key={index} pokemon={pokemon} />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
