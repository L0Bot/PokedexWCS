import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import {
  PokemonCard,
  PokemonCard1,
  PokemonCard2,
  PokemonCard3,
} from "../PokemonCard/PokemonCard.jsx";

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
        <PokemonCard />
      </div>
    </>
  );
}

export default App;
