// ScrollingDivs.js
'use client'

import { useEffect, useState } from 'react';
import './test.css'; // Import the CSS module

const ScrollingDivs = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const childDivHeight = 100; // Height of each child div in vh
  const sensitivity = 1;

  const handleScroll = (e: { deltaY: any; }) => {
    const deltaY = e.deltaY;
    if (deltaY > 0 && currentDivIndex < divContents.length - 1) {
      // Scroll down
      setCurrentDivIndex((prevIndex) => prevIndex + sensitivity);
    } else if (deltaY < 0 && currentDivIndex > 0) {
      // Scroll up
      setCurrentDivIndex((prevIndex) => prevIndex - sensitivity);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentDivIndex]);

  const divContents = [
    // Section 1
    'BLVCK PIXEL',
    'The foresight Company',
    'the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.',
    'The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.',
    'Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: artificial intelligence, extended reality, blockchain, robotics, ...',
    'By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.',
    'We look beyond [ what\'s next ]. to what\'s [ after next ].',

    // Section 2
    '[anthropology + technology]',
    'This best defines what we do at BLVCKPIXEL. It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.',
    'The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intelligence.',
    'We attempt to foresee these developments at all levels. The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organization, every business and operational model will have to adapt, and evolve.',

    // Section 3
    '[ services ]',
    'Through advisory, consulting, strategic planning, prototyping, and realization, we prepare and transition our clients into the age of artificial general intelligence.',
    'Our future proofing services is a 3 stages cycle of foresight, preparation, and implementation.',
    '[ Foresight | 3-5 years ahead ]',
    '[ Preparation | 1-2 years ahead ]',
    '[ Implementation | Now! ]',
    'Conception off real-world business cases and use cases',
    'Innovation workshops for management, product development, and marketing teams',
    'Prototyping of innovative business models and workplace systems',
    'Project management for implementation of emerging technologies'
  ];

  return (
    <>
    <div className='parentContainer'>
      <div
        className='childDivContainer'
        style={{ transform: `translateY(-${currentDivIndex * 100}vh)` }}
      >
        {divContents.map((content, index) => (
          <div key={index} className='childDiv'>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ScrollingDivs;
