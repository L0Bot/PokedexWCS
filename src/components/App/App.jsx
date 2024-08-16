import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import Test from "../test.jsx";

const pokemonList = [
  {
    name: "salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <>
      <MyTitle />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "flex-start",
        }}
      >
        <PokemonCard pokemon={pokemonList[0]} />
        <PokemonCard pokemon={pokemonList[1]} />
        <PokemonCard pokemon={pokemonList[2]} />
        <PokemonCard pokemon={pokemonList[3]} />
      </div>
      <Test />
    </>
  );
}

export default App;
