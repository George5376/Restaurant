import Header from './Components/Header';
import Especialidades from './Components/Especialidades';
import Pizzas from './Components/Pizzas';
import Ofertas from './Components/Ofertas';
import Bebidas from './Components/Bebidas';
import Postres from './Components/Postres';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Especialidades />
        <Pizzas />
        <Ofertas />
        <Bebidas />
        <Postres />
      </main>
    </div>
  );
}

export default App;
