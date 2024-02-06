'use client'
import { useState, useEffect } from 'react';
import './HomePage.css';

export default function Home() {

  const [showBrackets, setShowBrackets] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBrackets(true);
    }, 9000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <img src="/logo.png" className="logo" alt="Logo" />
      <span className="blvckPixel">BLVCK PIXEL</span>
      <span className="foresightCompany">The Foresight Company</span>
      <div className="text-container">
        <span className={`foresight ${showBrackets ? 'slide-up' : ''}`}></span>
      </div>
    </div>
  );
};
