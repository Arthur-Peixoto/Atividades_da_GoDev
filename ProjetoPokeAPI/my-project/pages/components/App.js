import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import Searchbar from "./Searchbar";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";
import { getPokemonData, getPokemons, SearchPokemon } from "../api";
import { FavoriteProvider } from "../contexts/favoriteContext";
import { ThemeProvider } from "../contexts/ThemeContext";
const favoritesKey = "f";

function Layout() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemon] = useState([]);
  const [result, setResult] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  const updateFavoritePokemons = (favs) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(favs);
    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(favs);
    }
    window.localStorage.setItem(favoriteIndex, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  };

  return (
    <div className="bg-primary">
      <FavoriteProvider
        value={{
          favoritePokemon: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <ThemeProvider >
        <Navbar />
        <div className="mb-8 flex flex-row">
          <div className="w-3/5 m-2.5">
            <Searchbar setResult={setResult} />
            <Pokedex
              pokemons={pokemons.results}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
          <div className="flex flex-row items-center w-1/3">
            {result ? <Pokecard pokemon={result.name} /> : <Pokecard pokemon={'lucario'} />}
          </div>
        </div>
        </ThemeProvider>
      </FavoriteProvider>
    </div>
  );
}

export default Layout;
