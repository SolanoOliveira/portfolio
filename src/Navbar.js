import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar o CSS do Bootstrap

const navbarStyle = {
  fontFamily: 'Roboto Mono, monospace', // Aplicando a fonte Roboto Mono
  fontWeight: 'bold', // Aplicando o peso da fonte como negrito
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light fixed-top" style={navbarStyle}>
      <div className="container">
        <div className="navbar-nav mx-auto">
          <a className="nav-link" href="#section1">
            Sobre
          </a>
          <a className="nav-link" href="#section2">
            Tecnologias
          </a>
          <a className="nav-link" href="#section3">
            Educação
          </a>
          <a className="nav-link" href="#section4">
            Projetos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
