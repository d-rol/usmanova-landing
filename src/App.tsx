import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trust from './components/Trust';
import LeadForm from './components/LeadForm';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Hero onOpenForm={() => setIsModalOpen(true)} />
      <Features />
      <Trust onOpenForm={() => setIsModalOpen(true)} />
      <LeadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
