import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="form-section" id="form">
      <div className="container form-container">
        <div className="form-box">
          <h2 className="form-title">Начать тренировки прямо сейчас</h2>
          <p className="form-subtitle">Оставьте заявку, и мы свяжемся с вами для подбора программы</p>
          
          {isSuccess ? (
            <div className="success-message">
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Ваш E-mail" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Ваш телефон" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="btn form-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
              </button>
              <p className="form-policy">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
