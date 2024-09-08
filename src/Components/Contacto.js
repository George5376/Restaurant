import React, { useState } from 'react';
import { database } from '../Firebase/Config';
import { ref, push } from 'firebase/database';
import '../Styles/Contacto.css';
import '../Styles/General.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactoRef = ref(database, 'Contacto');
    push(contactoRef, {
      nombre,
      email,
      mensaje,
      fecha: new Date().toISOString()
    });

    // Limpiar los campos después de enviar
    setNombre('');
    setEmail('');
    setMensaje('');

    // Mostrar un mensaje de éxito al usuario
    alert('¡Mensaje enviado correctamente!');
  };

  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;