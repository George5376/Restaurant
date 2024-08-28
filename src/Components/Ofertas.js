import React from 'react';
import '../Styles/Ofertas.css';

function Ofertas() {
  return (
    <section id="ofertas">
      <h2>Ofertas</h2>
      <ul>
        <li>
          <h3>Combo Familiar</h3>
          <p>2 Pizzas grandes, 1 bebida grande, y 1 postre.</p>
          <p className="price">$29.99</p>
        </li>
      </ul>
    </section>
  );
}

export default Ofertas;
