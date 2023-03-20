import React from "react";

const favoriteContext = React.createContext({
    favoritePokemons:[],
    updateFavoritePokemons:(id) => null
})

export const FavoriteProvider = favoriteContext.Provider;

export default favoriteContext;

