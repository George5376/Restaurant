import Header from './Components/Header';
import Carrusel from './Components/Carrusel';
import Especialidades from './Components/Especialidades';
import Pizzas from './Components/Pizzas';
import Ofertas from './Components/Ofertas';
import Bebidas from './Components/Bebidas';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Especialidades />
        <Pizzas />
        <Ofertas />
        <Bebidas />
      </main>
    </div>
  );
}

export default App;
