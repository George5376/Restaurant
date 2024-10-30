import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
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

      if (data) { // Verificamos que data no sea null o undefined
        for (let id in data) {
          loadedBebidas.push({ id, ...data[id] });
        }
      }

      setBebidas(loadedBebidas);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="bebidas">
      <h2 className='bebida-title'>Bebidas</h2>
      <ul>
        {bebidas.length > 0 ? (
          bebidas.map((bebida) => (
            <li key={bebida.id} className="bebida-item">
              <div className="bebida-info">
                <h3 className="bebida-name">{bebida.nombre}</h3>
                <div 
                  className={`descripcion-bebidas ${expandedId === bebida.id ? 'expanded' : ''}`} 
                  onClick={() => toggleDescription(bebida.id)}
                >
                  {bebida.descripcion}
                </div>
                {bebida.descripcion && bebida.descripcion.length > 100 && expandedId === null && (
                  <span className="more-info">...</span>
                )}
                {bebida.descripcion && bebida.descripcion.length > 100 && (
                  <button className="toggle-button" onClick={() => toggleDescription(bebida.id)}>
                    {expandedId === bebida.id ? 'Leer menos ' : 'Leer más '}
                  </button>
                )}
                <span className="price">${bebida.precio}</span>
              </div>
            </li>
          ))
        ) : (
          <li>No hay bebidas disponibles en este momento intente mas tarde.</li>
        )}
      </ul>
    </section>
  );
}

export default Bebidas;
