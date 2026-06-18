import React from 'react';
import heroImg from '../assets/hero.png';
import './Hero.css';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ПРИВЕДИТЕ ТЕЛО В ФОРМУ<br />
            С ЧЕМПИОНКОЙ КАТЕЙ<br />
            УСМАНОВОЙ
          </h1>
          <p className="hero-subtitle">
            без диет, голода и запретов<br />
            с пользой для здоровья
          </p>
          <p className="hero-description">
            Похудеть, подтянуть попу и живот, набрать форму<br />
            в зале, восстановиться после родов — тренировки<br />
            и питание под вашу цель
          </p>
          <button onClick={onOpenForm} className="btn hero-btn">ВЫБРАТЬ ПРОГРАММУ</button>
          <p className="hero-note">Для корректной работы сайта отключите VPN</p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Катя Усманова" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
