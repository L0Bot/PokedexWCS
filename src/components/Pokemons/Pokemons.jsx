import axios from "axios";
import { useEffect, useState } from "react";
import PokemonIcon from "../PokemonIcon/PokemonIcon";
import styles from "./Pokemons.module.scss";

const url = "https://tyradex.vercel.app/api/v1/pokemon";

function Pokemons() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPokemonList(res.data.slice(1));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
        setLoading(false);
        setError("Failed to load Pokemon data.");
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : pokemonList.length === 0 ? (
        <p>No Pokémon found.</p>
      ) : (
        <div className={styles.cardContainer}>
          {pokemonList.length > 0 &&
            pokemonList.map((pokemon) => (
              <PokemonIcon key={pokemon.name.fr} pokemon={pokemon} size={110} />
            ))}
        </div>
      )}
    </>
  );
}

export default Pokemons;
