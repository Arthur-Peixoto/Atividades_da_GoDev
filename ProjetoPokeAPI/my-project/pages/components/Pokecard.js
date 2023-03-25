import React, { useState, useEffect } from "react";
import { SearchPokemon } from "../api";

const Pokecard = (props) => {
  const { pokemon } = props;
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await SearchPokemon(pokemon);
      setResult(data);
    };
    fetchPokemon();
  }, [pokemon]);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="text-center ml-1 bg-btn shadow-2xl slate-400 rounded-md">
      <div className="p-2">
        <img
          className="m-auto -mt-20 w-48 h-52"
          src={result.sprites.front_default}
          alt={result.name}
        />
        <h3 className="text-sm text-gray-400">N° {result.id}</h3>
        <h2 className="text-slate-800 capitalize text-4xl font-bold mb-2.5">
          {result.name}
        </h2>
        {result.types.map((type, index) => {
          return (
            <div
              className={
                "uppercase font-semibold inline rounded p-0.5 text-white m-1 mt-2 bg-type-" +
                type.type.name
              }
              key={index}
            >
              {type.type.name}
            </div>
          );
        })}
        <div>
          <h2 className="mt-2.5 uppercase text-black font-semibold">
            Detalhes
          </h2>
          <h3 className="p-2.5 text-base text-gray-500">
            It’s said that no foe can remain invisible to Lucario, since it can
            detect auras—even those of foes it could not otherwise see
          </h3>
        </div>
        <div>
          <div>
            <h2 className="uppercase text-black font-semibold">Habilidades</h2>
            <h3 className="rounded-xl font-medium p-1.5 w-32 ring grayscale capitalize m-2.5 border-slate-400 inline-block">
              {result.abilities[0].ability.name}
            </h3>
          </div>
          <div>
            <div className="my-2">
              <h2 className="uppercase text-sm">base xp</h2>
              <h2 className="my-2">{result.base_experience}</h2>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-sm my-2.5">status</h3>
            <div className="flex justify-center">
              <div className="mx-1">
                <h4 className="bg-red-600 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">
                  {" "}
                  hp
                </h4>
                <h4 className="text-black mt-1.25">
                  {" "}
                  {result.stats[0].base_stat}
                </h4>
              </div>
              <div className="mx-1">
                <h4 className="bg-orange-500 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">
                  atk
                </h4>
                <h4 className="text-black mt-1.25">
                  {result.stats[1].base_stat}
                </h4>
              </div>

              <div className="mx-1">
                <h4 className="bg-yellow-300 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">
                  def
                </h4>
                <h4 className="text-black mt-1.25">
                  {" "}
                  {result.stats[2].base_stat}
                </h4>
              </div>

              <div className="mx-1">
                <h4 className="bg-cyan-200 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">Spa</h4>
                <h4 className="text-black mt-1.25">
                  {" "}
                  {result.stats[3].base_stat}
                </h4>
              </div>

              <div className="mx-1">
                <h4 className="bg-lime-200 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">Spd</h4>
                <h4 className=" text-black mt-1.25">
                  {" "}
                  {result.stats[4].base_stat}
                </h4>
              </div>

              <div className="mx-1">
                <h4 className="bg-rose-300 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">Spd</h4>
                <h4 className=" text-black mt-1.25">
                  {" "}
                  {result.stats[4].base_stat}
                </h4>
              </div>

              <div className="mx-1 bg-indigo-300 rounded">
                <h4 className="bg-indigo-400 text-xs items-center w-7 h-7 rounded-2xl uppercase text-white grid">Tot</h4>
                <h4 className=" text-black mt-1.25">
                  {" "}
                  {result.stats[5].base_stat}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
