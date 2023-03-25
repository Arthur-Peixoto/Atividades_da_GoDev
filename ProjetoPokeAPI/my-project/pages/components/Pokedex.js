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
      <div className="flex flex-row justify-between items-center p-2.5">
        <h1>Pokedex</h1>
        <div>{/*favoritePokemons.length*/}❤️</div>
        <Pagination page={page+1} total={totalPages} onLeftClick={onLeftClick} onRightClick={onRightClick}></Pagination>
      </div>
      {loading ? (
        <div> Carregando, segura fera...</div>
      ) : (
        <div className="grid gap-2.5 grid-cols-3 ">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <div className="bg-btn">
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
