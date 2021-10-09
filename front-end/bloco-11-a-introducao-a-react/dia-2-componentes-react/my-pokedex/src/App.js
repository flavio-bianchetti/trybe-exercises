import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <div className="div-pokemons">
        <Pokemon pokemons={pokemons} />
      </div>
    </main>
  );
}

export default App;
