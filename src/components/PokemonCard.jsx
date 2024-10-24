import React, { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return console.log("Сетевая ошибка!") 
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
       return console.log("Ошибка при получении данных:", error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="pokemon-card">
      <h4>{name}</h4>
      {pokemonData && (
        <div className="pokemon-dities">
          <img src={pokemonData.sprites.front_default} alt={name} />
          <p>Высота: {pokemonData.height}</p>
          <p>Ширина: {pokemonData.weight}</p>
          <p>Опыт: {pokemonData.base_experience}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
