'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import'./test.css';

const Content = () => {
  
  const sections = [
    {
      id: 'who-we-are',
      title: 'BLVCK PIXEL',
      subtitle: 'The foresight Company',
      description: [
        'the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.',
        'The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.'
      ],
      vision: 'Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: artificial intelligence, extended reality, blockchain, robotics, ...',
      strategy: 'By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.',
      beyondNext: 'We look beyond [ what\'s next ]. to what\'s [ after next ].'
    },
    {
      id: 'why-we-exist',
      anthropology: '[anthropology + technology]',
      explanation: 'This best defines what we do at BLVCKPIXEL. It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.',
      impact: 'The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intelligence.',
      preparation: 'We attempt to foresee these developments at all levels. The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organization, every business and operational model will have to adapt, and evolve.'
    },
    {
      id: 'what-we-do',
      services: '[ services ]',
      transition: 'Through advisory, consulting, strategic planning, prototyping, and realization, we prepare and transition our clients into the age of artificial general intelligence.',
      futureProofing: 'Our future proofing services is a 3 stages cycle of foresight, preparation, and implementation.',
      foresight: '[ Foresight | 3-5 years ahead ]',
      preparation1: '[ Preparation | 1-2 years ahead ]',
      preparation2: '[ Implementation | Now! ]'
    }
  ];
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const childDivHeight = 100;

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    if (deltaY > 0 && currentDivIndex < sections.length - 1) {
      // Scroll down
      setCurrentDivIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && currentDivIndex > 0) {
      // Scroll up
      setCurrentDivIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentDivIndex]);

  return (
    <div>
      {sections.map((section, index) => (
        <div className='childDivContainer'>
        <div key={index} className=''>
          {section.id === 'who-we-are' && (
            <div className='who-we-are'>
              <Image src="/blvckpixel2.svg" className="logo" alt="Logo" width={400} height={100} />
              <span className="blvckPixel text-3xl">BLVCK PIXEL</span>
              <span className="foresightCompany text-3xl">The foresight Company</span>
              <div className="text-container">
                <span className="foresight text-3xl"></span>
                {section.description.map((desc, index) => (
                  <p key={index} className='paragraph text-2xl italic xl:w-2/5'>{desc}</p>
                ))}
              </div>
              <span className="blvckPixell text-3xl">BLVCK PIXEL</span>
              <span className="v text-3xl mr-8"></span>
              <p className='paragraph1 text-2xl italic xl:w-2/5'>{section.description[1]}</p>
              <div className="paragraphs-container w-1/2">
                <div className="para1 text-black text-2xl">{section.vision}</div>
                <div className="para2 text-black text-2xl">{section.strategy}</div>
                <div className="para3 text-black text-2xl">{section.beyondNext}</div>
              </div>
            </div>
          )}
          </div>
          
          <div
        className='childDivContainer'
        style={{ transform: `translateY(-${currentDivIndex * 100}vh)` }}
      >
          {section.id === 'why-we-exist' && (
            <div className='why-we-exist'>
              <div className='prep text-black text-3xl mb-8'>{section.anthropology}</div>
              <div className='prep-head w-1/2'>
                <div className="prep1 text-black xl:text-2xl sm:text-xl">{section.explanation}</div>
                <div className="prep2 text-black xl:text-2xl sm:text-xl">{section.impact}</div>
              </div>
              <div className="para-exist w-1/2">
                <div className="para-exist1 text-black xl:text-2xl sm:text-xl">{section.preparation}</div>
                <div className="para-exist2 text-black xl:text-2xl sm:text-xl">{section.preparation}</div>
                <div className="para-exist3 text-black xl:text-2xl sm:text-xl">{section.preparation}</div>
              </div>
            </div>
          )}
          </div>
          <div
        className='childDivContainer'
        style={{ transform: `translateY(-${currentDivIndex * 100}vh)` }}
      >

          {section.id === 'what-we-do' && (
            <div className='what-we-do'>
              <div className='prep xl:text-3xl sm:text-xl'>{section.services}</div>
              <div className='prep-head text-black w-1/2 sm:text-xl'>
                <div className='prep1'>{section.transition}</div>
                <div className='prep2'>{section.futureProofing}</div>
              </div>
              <div className='prep text-3xl'>{section.foresight}</div>
              <div className='prep-head'>
                <div className='text-2xl text-black ml-3 prep1'>{section.preparation1}</div>
                <div className='text-2xl text-black prep2'>{section.preparation1}</div>
              </div>
              <div className='prep text-3xl'>{section.preparation2}</div>
              <div className='prep-head'>
                <div className='text-2xl text-black ml-3 prep1'>{section.preparation2}</div>
                <div className='text-2xl text-black prep2'>{section.preparation2}</div>
              </div>
            </div>
          )}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Content;
