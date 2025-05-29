// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';

import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex-container bg-orange-50  ">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default App;