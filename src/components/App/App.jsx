import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import {
  PokemonCard,
  PokemonCard1,
  PokemonCard2,
  PokemonCard3,
} from "../PokemonCard/PokemonCard.jsx";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
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
        <PokemonCard1 />
        <PokemonCard2 />
        <PokemonCard3 />
        <PokemonCard pokemon={pokemonList[3]} />
      </div>
    </>
  );
}

export default App;
