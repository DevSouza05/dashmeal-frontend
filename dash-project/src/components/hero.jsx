import React from 'react';
import './Hero.css';  

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bem-vindo à nossa Hamburgueria! 🍔</h1>
        <p>O melhor sabor da cidade em cada mordida.</p>
        <a href="#cardapio" className="cta-button">Veja nosso Cardápio</a>
      </div>
    </section>
  );
};

export default Hero;
