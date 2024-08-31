import React, { useEffect, useState} from 'react';
import {ref, onValue} from "firebase/database";
import { database } from '../Firebase/Config';
import '../Styles/Postres.css';
import '../Styles/General.css';

function Postres() {
  const [postres, setPostres] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const postresRef = ref(database, 'Postres/');

    onValue(postresRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPostres = [];

      for (let id in data) {
        loadedPostres.push({ id, ...data[id] });
      }
      setPostres(loadedPostres);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="postres">
      <h2>Postres</h2>
      <ul>
        {postres.map((postre) => (
          <li key={postre.id} className="postre-item">
            <img src={postre.imagen} alt={postre.nombre} className="postre-imagen"/>
            <div className="postre-info">
              <h3 className="postre-name">{postre.nombre}</h3>
              <div 
                className={`descripcion ${expandedId === postre.id ? 'expanded' : ''}`} 
                onClick={() => toggleDescription(postre.id)}
              >
                {postre.descripcion}
              </div>
              {postre.descripcion.length > 100 && expandedId === null && (
                <span className="more-info">...</span>
              )}
              {postre.descripcion.length > 100 && (
                <button className="toggle-button" onClick={() => toggleDescription(postre.id)}>
                  {expandedId === postre.id ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <span className="price">${postre.precio}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Postres;
