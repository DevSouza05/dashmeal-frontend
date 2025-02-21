import React, { useState } from "react";
import "./cabecalho.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="cabecalho">
      <div className="logo">
        <img src="/logo-hamburgueria.png" alt="Logo da Hamburgueria" />
      </div>
      <nav className={`nav ${menuAberto ? "aberto" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div className="menu-hamburguer" onClick={toggleMenu}>
        <div className={`linha ${menuAberto ? "aberta" : ""}`}></div>
        <div className={`linha ${menuAberto ? "aberta" : ""}`}></div>
        <div className={`linha ${menuAberto ? "aberta" : ""}`}></div>
      </div>
    </header>
  );
};

export default Cabecalho;
