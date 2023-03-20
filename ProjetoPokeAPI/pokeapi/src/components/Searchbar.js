import React, { useState } from "react";
import { SearchPokemon } from "../api";

const Searchbar = ({ setResult }) => {
  const [search, setSearch] = useState("");

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await SearchPokemon(pokemon);
    setResult(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Busque seu pokemon!!"
          onChange={onChangeHandle}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>
          <img src="../Pokebola-Icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;