import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchPokemonList = async () => {
      const offset = (page - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      setPokemonList(data.results);
    };

    fetchPokemonList();
  }, [page]);

  return (
    <div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          className="last-button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Назад
        </button>
        <span>Страница {page}</span>
        <button
          className="next-button"
          onClick={() => setPage(page + 1)}
          disabled={page === 66}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
