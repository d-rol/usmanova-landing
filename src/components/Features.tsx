import React from 'react';
import dumbbellIcon from '../assets/dumbbell.png';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import arrowRight from '../assets/arrow-right.png';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container features-container">
        <div className="features-header-wrapper">
          <h2 className="features-title">
            Доверьте свое тело чемпионке<br/>
            фитнес-бикини и тренеру <span className="features-accent-title">Кате Усмановой</span>
          </h2>
          <p className="features-subtitle">
            С 2015 года создаёт топовые тренировки для идеальных ягодиц, плоского живота и стройности без жёстких диет.<br/>
            Уже более 580 000+ участниц тренируются с Катей, ведь она:
          </p>
        </div>
        <div className="features-box">
          <div className="features-info-list">
            <div className="features-info-item">
              <img src={dumbbellIcon} alt="dumbbell" />
              <span className="features-info-text">Вице-чемпионка мира и чемпионка России по фитнес-бикини</span>
            </div>
            <div className="features-info-item">
              <img src={dumbbellIcon} alt="dumbbell" />
              <span className="features-info-text">Профессиональный фитнес-тренер с опытом более 15 лет</span>
            </div>
            <div className="features-info-item">
              <img src={dumbbellIcon} alt="dumbbell" />
              <span className="features-info-text">Мама 2-х детей. Всего за 100 дней после первых родов похудела на 20 кг и вернулась в прежнюю форму</span>
            </div>
            <div className="features-info-item">
              <img src={dumbbellIcon} alt="dumbbell" />
              <span className="features-info-text">Автор первых в России масштабных марафонов стройности</span>
            </div>
            <div className="features-info-item">
              <img src={dumbbellIcon} alt="dumbbell" />
              <span className="features-info-text">Чемпионка России и мира по жиму лёжа</span>
            </div>
          </div>

          <div className="features-slider-wrapper">
            <div className="features-slider-item">
              <img src={slide1} alt="Фото Кати 1" />
            </div>
            <div className="features-slider-item">
              <img src={slide2} alt="Фото Кати 2" />
            </div>
            <div className="features-slider-item">
              <img src={slide3} alt="Фото Кати 3" />
            </div>
            <div className="features-slider-item">
              <img src={slide4} alt="Фото Кати 4" />
            </div>
          </div>

          <div className="features-slider-hint">
            Листайте вправо
            <img className="arrow-icon" src={arrowRight} alt="Стрелка" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
