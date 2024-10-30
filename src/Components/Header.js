import React, { useEffect } from 'react';
import '../Styles/Header.css';

const Header = () => {
  useEffect(() => {
    // Cargar el script de Google Analytics solo una vez
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-F4LZYL81RN';
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      // Configuración de Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-F4LZYL81RN');
    };
  }, []);

  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Cabin Pizza</h1>
        <img src={require('../Images/Cabin.jpeg')} alt="Cabin Pizza Logo" className="logo" />
      </div>
      <nav className="menu">
        <div className="button-slider">
          <a href="#especialidades"><button>Especialidades</button></a>
          <a href="#pizzas"><button>Pizzas</button></a>
          <a href="#ofertas"><button>Combos</button></a>
          <a href="#bebidas"><button>Bebidas</button></a>
          <a href="#postres"><button>Postres</button></a>
          <a href="#contacto"><button>Contacto</button></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
