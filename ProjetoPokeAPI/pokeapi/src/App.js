import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import Pokecard from "./components/Pokecard";
import { getPokemonData, getPokemons, SearchPokemon } from "./api";
import { FavoriteProvider } from "./contexts/favoriteContext";
const favoritesKey = "f"  

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemon] = useState([]);
  const [result, setResult] = useState(null);
  const [favorites,setFavorites] = useState([])

  const ItemsPerPage = 30;
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(ItemsPerPage, ItemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon({ results });
      setLoading(false);
      setTotalPages(Math.ceil(data.count / ItemsPerPage));
    } catch (e) {
      console.log("fetch pokemons error:", e);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  useEffect(() => {
    loadFavoritesPokemons();
  }, []);

  const loadFavoritesPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }

  const updateFavoritePokemons = (favs) => {
      const updateFavorites = [...favorites]
      const favoriteIndex = favorites.indexOf(favs)
      if(favoriteIndex >= 0 ){
        updateFavorites.slice(favoriteIndex, 1)
      }
      else{
        updateFavorites.push(favs)
      }
      window.localStorage.setItem(favoriteIndex, JSON.stringify(updateFavorites ))
      setFavorites(updateFavorites)
  }

  return (
    <div>
      <div className="body-page">
      <FavoriteProvider
          value={{favoritePokemon: favorites,
          updateFavoritePokemons: updateFavoritePokemons}}
          >
        <div className="container">
          <Navbar />
          <Searchbar setResult={setResult} />
          <Pokedex
            pokemons={pokemons.results}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
           
          </div>
          <div className="pokecard">
            {result ? <Pokecard pokemon={result} /> : null} 
          </div>
          </FavoriteProvider>
          </div>
    </div>
  );
}

export default App;