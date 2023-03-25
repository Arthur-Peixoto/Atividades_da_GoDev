export const SearchPokemon = async (pokemon) => {
  {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log("erro:", e);
    }
  }
};

export const getPokemons = async (limit = 30, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log("erro:", e);
  }
};

export const getPokemonData = async (url) => {
try {
    const response = await fetch(url)
    return await response.json();
  } catch (e) {
    console.log("erro:", e);
  }
};