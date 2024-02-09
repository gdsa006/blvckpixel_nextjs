'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './HomePage.css';

const sections = ['[ What We Are ]','[ What We Do ]', '[ Other Section ]'];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showBrackets, setShowBrackets] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showBlvck, setShowBlvck] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showLastParagraphs, setShowLastParagraphs] = useState(false);
  const [showAnthroTech, setShowAnthroTech] = useState(false);
  const [showAnthroPara, setShowAnthroPara] = useState(false);
  const [showPara, setShowPara] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sectionIndex = Math.floor(window.scrollY / window.innerHeight);
      setCurrentSection(sectionIndex);
    }

    const timeout = setTimeout(() => {
      setShowBrackets(true);
    }, 9000);

    const paragraphTimeout = setTimeout(() => {
      setShowParagraph(true);
    }, 15000);

    const hideParagraphTimeout = setTimeout(() => {
      setShowParagraph(false);
      setShowBlvck(true);
    }, 18000);

    const paragraphTimeout1 = setTimeout(() => {
      setShowParagraph1(true);
    }, 24000);

    const visionTimeout = setTimeout(() => {
      setShowVision(true);
    }, 22000);

    const showLastParagraphsTimeout = setTimeout(() => {
      setShowLastParagraphs(true);
    }, 26000);

    const showAnthroTechTimeout = setTimeout(() => {
      setShowAnthroTech(true);
    }, 33000);

    const showAnthroParaTimeout = setTimeout(() => {
      setShowAnthroPara(true);
    }, 34500);
    
    const showParaTimeout = setTimeout(() => {
      setShowPara(true);
    }, 39000 );

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      clearTimeout(paragraphTimeout);
      clearTimeout(hideParagraphTimeout);
      clearTimeout(paragraphTimeout1);
      clearTimeout(visionTimeout);
      clearTimeout(showLastParagraphsTimeout);
      clearTimeout(showAnthroTechTimeout);
      clearTimeout(showAnthroParaTimeout);
      clearTimeout(showParaTimeout);
    };
  }, []);

  return (
    <div className="container">
      <div className="scrollable-section text-black">
        {sections.map((section, index) => (
          <div
            key={index}
            className="section"
            style={{ opacity: currentSection === index ? 1 : 1 - Math.abs(currentSection - index) * 0.25 }}
          >
            {section}
          </div>
        ))}
      </div>
      <Image src="/blvckpixel2.svg" className="logo" alt="Logo" width={400} height={100} />
      <span className="blvckPixel text-3xl">BLVCK PIXEL</span>
      <span className="foresightCompany text-3xl">The foresight Company</span>
      <div className="text-container">
        <span className={`foresight ${showBrackets ? 'slide-up' : ''} text-3xl`}></span>
        {showParagraph && (
          <p className='paragraph text-2xl italic xl:w-2/5'>the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.</p>
        )}
      </div>
      {showBlvck && (
        <span className="blvckPixell text-3xl">BLVCK PIXEL</span>
      )}
      <span className={`text-black v ${showVision ? 'slide-up' : ''} text-3xl mr-8`}>V</span>
      {showParagraph1 && (
        <p className='paragraph1 text-2xl italic xl:w-2/5'>The act of using imagination and wisdom to set meaninful and inspirig goals grounded with purpose.</p>
      )}
      {showLastParagraphs && (
        <div className="paragraphs-container w-1/2">
          <div className={`para1 text-black text-2xl ${showLastParagraphs ? 'appear-from-bottom' : ''}`}>
            Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: <br />
            artificial intelligence, extended reality, blockchain, robotics, ...
          </div>
          <div className={`para2 text-black text-2xl ${showLastParagraphs ? 'appear-from-bottom' : ''}`}>
            By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.
          </div>
          <div className={`para3 text-black text-2xl ${showLastParagraphs ? 'appear-from-bottom' : ''}`}>
            We look beyond &#91; what&apos;s next &#93; . to what&apos;s &#91; after next &#93;.
          </div>
        </div>
      )}

          {/* Code below this is the part of the why we exist section */}


        {showAnthroTech && ( 
          <div className={`anthro-tech ${showAnthroTech ? 'appear-first-move-up' : ''} text-black text-3xl mb-8`}>
            &#91;anthropology + technology&#93;
          </div>
          )}
          {showAnthroPara && ( 
          <div className='anthro-para'>
            <div className={`anthro-para1 text-black xl:text-3xl sm:text-xl ${showAnthroPara ? 'appear-from-bottom' : ''}`}>
              This best defines what we do at BLVCKPIXEL
            </div>
            <div className={`anthro-para2 text-black xl:text-3xl sm:text-xl ${showAnthroPara ? 'appear-from-bottom' : ''}`}>
              It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.
            </div>
          </div>
          )};
          {showPara && (
            <div className='para-exist'>
              <div className={`para-exist1 text-black xl:text-3xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
                The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been drivem by our ability to innovate. No other technology will have been as impactful on our world as artificial intellgence.
              </div>
              <div className={`para-exist2 text-black xl:text-3xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
                We attempt to foresee these developments at all levels.
              </div>
              <div className={`para-exist3 text-black xl:text-3xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
                The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the biginning of recorded history. In the next few years, no matter the enterprise, government or organisation, every business and operational model will have to adapt, and evolve.
              </div>
            </div>
          )}
          
          {/* From here starts the what we do section  */}
    </div>
  );
};
