import React from 'react';
import '../Styles/Pizzas.css';

function Pizzas() {
  return (
    <section id="pizzas">
      <h2>Pizzas</h2>
      <ul>
        <li>
          <h3>Pizza Margarita</h3>
          <p>Tomate, albahaca fresca, y mozzarella.</p>
          <p className="price">$10.99</p>
        </li>
        <li>
          <h3>Pizza Cuatro Quesos</h3>
          <p>Mozzarella, gorgonzola, parmesano, y ricotta.</p>
          <p className="price">$13.99</p>
        </li>
      </ul>
    </section>
  );
}

export default Pizzas;
