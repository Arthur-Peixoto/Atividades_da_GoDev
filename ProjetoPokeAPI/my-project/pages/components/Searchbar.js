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
    <div className="flex mx-auto my-0 items-center bg-btn shadow-md rounded-xl mb-10 p-1 flow-root">
      <div className="mr-5 flex justify-around">
        <input
          className=" border-none w-full bg-btn"
          type="text"
          placeholder="Busque seu pokemon!!"
          onChange={onChangeHandle}
        />
        <button onClick={onButtonClickHandler} className="border-none zinc-50 bg-red-500 rounded-lg h-11 py-2 px-2.5">
          <img src=".././Pokebola-Icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;