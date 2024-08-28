import React from 'react';
import '../Styles/Bebidas.css';

function Bebidas() {
  return (
    <section id="bebidas">
      <h2>Bebidas</h2>
      <ul>
        <li>
          <h3>Cerveza Artesanal</h3>
          <p>Cerveza hecha en la región, suave y refrescante.</p>
          <p className="price">$4.99</p>
        </li>
        <li>
          <h3>Vino de la Casa</h3>
          <p>Vino tinto, perfecto para acompañar nuestras pizzas.</p>
          <p className="price">$6.99</p>
        </li>
      </ul>
    </section>
  );
}

export default Bebidas;
