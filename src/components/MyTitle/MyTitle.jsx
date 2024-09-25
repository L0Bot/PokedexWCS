import { Link } from "react-router-dom";

export default function MyTitle() {
  return (
    <>
      <img src="/pokedex.png" alt="pokedex logo" id="logo" />
      <h1>Pokedex !</h1>
      <Link to="/pokemons">All pokemons</Link>
    </>
  );
}
