import React from 'react';
import featureImg from '../assets/feature.png';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container features-container">
        <div className="features-image">
          <img src={featureImg} alt="Тренировки" />
        </div>
        <div className="features-content">
          <h2 className="features-title">Как проходят тренировки?</h2>
          <ul className="features-list">
            <li>
              <strong>Онлайн в любом месте</strong>
              <p>Тренируйтесь дома, в зале или на улице. Нужен только телефон и интернет.</p>
            </li>
            <li>
              <strong>Подходят для любого уровня</strong>
              <p>Программы адаптированы как для новичков, так и для опытных спортсменов.</p>
            </li>
            <li>
              <strong>Без жестких диет</strong>
              <p>Питайтесь вкусно и полезно. Мы научим вас сбалансированному рациону.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
