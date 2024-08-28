import React from 'react';
import '../Styles/Especialidades.css';

function Especialidades() {
  return (
    <section id="especialidades">
      <h2>Especialidades</h2>
      <ul>
        <li>
          <h3>Pizza del Bosque</h3>
          <p>Queso mozzarella, setas frescas, tomate, y hierbas aromáticas.</p>
          <p className="price">$12.99</p>
        </li>
        <li>
          <h3>Pizza Rústica</h3>
          <p>Salami, pimientos, aceitunas negras, y queso parmesano.</p>
          <p className="price">$14.99</p>
        </li>
      </ul>
    </section>
  );
}

export default Especialidades;
