import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database"; 
import { database } from '../Firebase/Config'; 
import '../Styles/Ofertas.css';
import '../Styles/General.css';

function Ofertas() {
  const [ofertas, setOfertas] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // Estado para manejar la expansión

  useEffect(() => {
    const ofertasRef = ref(database, 'Ofertas/');
    
    onValue(ofertasRef, (snapshot) => {
      const data = snapshot.val();
      const loadedOfertas = [];
      
      for (let id in data) {
        loadedOfertas.push({ id, ...data[id] });
      }
      setOfertas(loadedOfertas);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id); // Alternar la expansión
  };

  return (
    <section id="ofertas">
      <h2>Combos</h2>
      <ul>
        {ofertas.map((oferta) => (
          <li key={oferta.id} className="oferta-item">
            <img src={oferta.imagen} alt={oferta.nombre} className="oferta-imagen" />
            <div className="oferta-info">
              <h3 className='oferta-name'>{oferta.nombre}</h3>
              <div 
                className={`descripcion ${expandedId === oferta.id ? 'expanded' : ''}`} 
                onClick={() => toggleDescription(oferta.id)} // Añadir función de toggle
              >
                {oferta.descripcion}
              </div>
              {/* Mostrar puntos suspensivos solo cuando la descripción está truncada */}
              {oferta.descripcion.length > 100 && expandedId === null && (
                <span className="more-info">...</span>
              )}
              {oferta.descripcion.length > 100 && (
                <button className="toggle-button" onClick={() => toggleDescription(oferta.id)}>
                  {expandedId === oferta.id ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <span className="price">${oferta.precio}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ofertas;
