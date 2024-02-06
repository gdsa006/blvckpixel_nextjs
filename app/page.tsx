'use client'
import { useState, useEffect } from 'react';
import './HomePage.css';

export default function Home() {

  const [showBrackets, setShowBrackets] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBrackets(true);
    }, 9000); 

    const paragraphTimeout = setTimeout(() => {
      setShowParagraph(true);
    },15000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(paragraphTimeout)
    };
  }, []);

  return (
    <div className="container">
      <img src="/logo.png" className="logo" alt="Logo" />
      <span className="blvckPixel">BLVCK PIXEL</span>
      <span className="foresightCompany">The Foresight Company</span>
      <div className="text-container">
        <span className={`foresight ${showBrackets ? 'slide-up' : ''} text-3xl`}></span>
        {showParagraph && (
        <p className='paragraph ml-16 text-2xl italic xl:w-2/5'>the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.</p>
        )}
      </div>
    </div>
  );
};
