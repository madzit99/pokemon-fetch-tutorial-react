import React from "react";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";
import useFetchPokemons from "../hooks/useFetchPokemons";

const PokemonList = () => {
  const {
    data: pokemons,
    loading,
    error,
  } = useFetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=100");

  if (loading && !pokemons.length) return <Loader />;

  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
        />
      ))}
    </div>
  );
};

export default PokemonList;
