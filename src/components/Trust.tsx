import React from 'react';
import './Trust.css';

interface TrustProps {
  onOpenForm: () => void;
}

const Trust: React.FC<TrustProps> = ({ onOpenForm }) => {
  return (
    <section className="trust-section">
      <div className="container trust-page-container">
        <h2 className="trust-title">
          Кате доверяют миллионы.<br />
          <span className="trust-accent">Её методы работают</span> — и об этом говорят все
        </h2>
        
        <div className="trust-box">
          <p className="trust-subtitle">
            580 000+ учениц. Подкасты. Статьи<br />
            в СМИ. Коллаборации с звёздами.
          </p>
          
          <div className="trust-grid">
          <div 
            className="trust-card" 
            style={{ backgroundImage: "url('https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/388/h/dce4cd87e1adbe9bb964e4f421a812b8.png')" }}
          ></div>
          <div 
            className="trust-card" 
            style={{ backgroundImage: "url('https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/243/h/ab7526618678a10df39f0b43b18beedf.png')" }}
          ></div>
          <div 
            className="trust-card" 
            style={{ backgroundImage: "url('https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/38/h/1945477762597b2c2c8e4cf8619c9d69.png')" }}
          ></div>
          <div 
            className="trust-card" 
            style={{ backgroundImage: "url('https://fs.getcourse.ru/fileservice/file/download/a/934144/sc/193/h/e9ae4aeeb45b346179a1450139c3d8d5.png')" }}
          ></div>
        </div>
        </div>

        <div className="trust-action">
          <button onClick={onOpenForm} className="btn trust-btn">ВЕРНУТЬ ФОРМУ</button>
        </div>
      </div>
    </section>
  );
};

export default Trust;
