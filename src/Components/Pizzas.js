import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database"; 
import { database } from '../Firebase/Config'; 
import '../Styles/Pizzas.css';
import '../Styles/General.css';

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // Estado para manejar la expansión

  useEffect(() => {
    const pizzasRef = ref(database, 'Pizzas/');
    
    onValue(pizzasRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPizzas = [];
      
      for (let id in data) {
        loadedPizzas.push({ id, ...data[id] });
      }
      setPizzas(loadedPizzas);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id); // Alternar la expansión
  };

  return (
    <section id="pizzas">
      <h2 className='pizza-title'>Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="pizza-item">
            <img src={pizza.imagen} alt={pizza.nombre} className="pizza-imagen" />
            <div className="pizza-info">
              <h3>{pizza.nombre}</h3>
              <div 
                className={`descripcion ${expandedId === pizza.id ? 'expanded' : ''}`} 
                onClick={() => toggleDescription(pizza.id)} // Añadir función de toggle
              >
                {pizza.descripcion || 'Descripción no disponible.'} {/* Manejar caso donde descripción no esté definida */}
              </div>
              {/* Mostrar puntos suspensivos solo cuando la descripción está truncada y está definida */}
              {pizza.descripcion && pizza.descripcion.length > 100 && expandedId === null && (
                <span className="more-info">...</span>
              )}
              {pizza.descripcion && pizza.descripcion.length > 100 && (
                <button className="toggle-button" onClick={() => toggleDescription(pizza.id)}>
                  {expandedId === pizza.id ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <span className="price">${pizza.precio}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Pizzas;
