import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from '../Firebase/Config'; 
import '../Styles/Especialidades.css';
import '../Styles/General.css';

function Especialidades() {
  const [especialidades, setEspecialidades] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // Estado para manejar la expansión

  useEffect(() => {
    const especialidadesRef = ref(database, 'Especialidades/');
    
    onValue(especialidadesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedEspecialidades = [];
      
      for (let id in data) {
        loadedEspecialidades.push({ id, ...data[id] });
      }
      setEspecialidades(loadedEspecialidades);
    });
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id); // Alternar la expansión
  };

  return (
    <section id="especialidades">
      <h2>Especialidades</h2>
      <ul>
        {especialidades.map((especialidad) => (
          <li key={especialidad.id} className="especialidad-item">
            <img src={especialidad.imagen} alt={especialidad.nombre} className="especialidad-imagen" />
            <div className="especialidad-info">
              <h3 className='especialidad-name'>{especialidad.nombre}</h3>
              <div 
                className={`descripcion ${expandedId === especialidad.id ? 'expanded' : ''}`} 
                onClick={() => toggleDescription(especialidad.id)} // Añadir función de toggle
              >
                {especialidad.descripcion}
              </div>
              {/* Mostrar puntos suspensivos solo cuando la descripción está truncada */}
              {especialidad.descripcion.length > 100 && expandedId === null && (
                <span className="more-info">...</span>
              )}
              {especialidad.descripcion.length > 100 && (
                <button className="toggle-button" onClick={() => toggleDescription(especialidad.id)}>
                  {expandedId === especialidad.id ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <span className="price">${especialidad.precio}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Especialidades;
