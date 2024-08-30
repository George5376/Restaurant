import React, { useEffect, useState} from 'react';
import {ref, onValue} from "firebase/database";
import { database } from '../Firebase/Config';
import '../Styles/Bebidas.css';
import '../Styles/General.css';

function Bebidas() {
  const [bebidas, setBebidas] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const bebidasRef = ref(database, 'Bebidas/');

    onValue(bebidasRef, (snapshot) => {
      const data = snapshot.val();
      const loadedBebidas = [];

      for (let id in data) {
        loadedBebidas.push({ id, ...data[id] });
      }
      setBebidas(loadedBebidas);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="bebidas">
      <h2>Bebidas</h2>
      <ul>
        {bebidas.map((bebida) => (
          <li key={bebida.id} className="bebida-item">
            <img src={bebida.imagen} alt={bebida.nombre} className="bebida-imagen"/>
            <div className="bebida-info">
              <h3 className="bebida-name">{bebida.nombre}</h3>
              <div 
                className={`descripcion ${expandedId === bebida.id ? 'expanded' : ''}`} 
                onClick={() => toggleDescription(bebida.id)}
              >
                {bebida.descripcion}
              </div>
              {bebida.descripcion.length > 100 && expandedId === null && (
                <span className="more-info">...</span>
              )}
              {bebida.descripcion.length > 100 && (
                <button className="toggle-button" onClick={() => toggleDescription(bebida.id)}>
                  {expandedId === bebida.id ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <span className="price">${bebida.precio}</span>
            </div>
          </li>
        ))}
        {/* <li>
          <h3>Cerveza Artesanal</h3>
          <p>Cerveza hecha en la región, suave y refrescante.</p>
        </li>
        <li>
          <h3>Vino de la Casa</h3>
          <p>Vino tinto, perfecto para acompañar nuestras pizzas.</p>
        </li> */}
      </ul>
    </section>
  );
}

export default Bebidas;
