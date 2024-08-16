import "./App.scss";
import MyTitle from "../MyTitle";
import PokemonCard from "../PokemonCard";

function App() {
  return (
    <div>
      <MyTitle />
      {/* <div 
         style={{
           display: "flex",
           flexDirection: "row",
           flexWrap: "wrap",
           justifyContent: "center",
           alignContent: "flex-start",
         }}
       >*/}
      <PokemonCard />
      {/* <PokemonCard /> */}
      {/* <PokemonCard /> */}
      {/* <PokemonCard /> */}
      {/* <PokemonCard /> */}
      {/* <PokemonCard /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
