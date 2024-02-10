'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HomePage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
// import required modules
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';


const sections = ['[ who we are ]','[ why we exist]','[ what we do ]', '[ whom we work for ]', '[ how we work ]', '[ journal ]', '[ contact | jobs ]'];

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
  const [showServices, setShowServices] = useState(false);
  const [showServicesPara, setshowServicesPara] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showForesight, setShowForesight] = useState(false);
  const [showWhat, setShowWhat] = useState(false);
  const [showPrep, setShowPrep] = useState(false);
  const [showToday, setShowToday] = useState(false);
  const [showTodayPrep, setShowTodayPrep] = useState(false);

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
    }, 34000);

    const showAnthroParaTimeout = setTimeout(() => {
      setShowAnthroPara(true);
    }, 35000);
    
    const showParaTimeout = setTimeout(() => {
      setShowPara(true);
    }, 39000 );

    const showServicesTimeout = setTimeout(() =>{
      setShowServices(true)
    }, 45000);
    const showServicesParaTimeout = setTimeout(() =>{
      setshowServicesPara(true)
    }, 46250);
    const showNextTimeout = setTimeout(() =>{
      setShowNext(true)
    }, 48500);
    const showForesightTimeout = setTimeout(() =>{
      setShowForesight(true)
    }, 50000);
    const showWhatTimeout = setTimeout(() => {
      setShowWhat(true);
    }, 53000)
    const showPrepTimeout = setTimeout(() => {
      setShowPrep(true);
    }, 56000);
    const showTodayTimeout = setTimeout(() => {
      setShowToday(true);
    },58000)
    const showTodayPrepTimeout = setTimeout(() => {
      setShowTodayPrep(true);
    }, 60000);
  

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
      clearTimeout(showServicesTimeout);
      clearTimeout(showServicesParaTimeout);
      clearTimeout(showNextTimeout);
      clearTimeout(showForesightTimeout);
      clearTimeout(showWhatTimeout);
      clearTimeout(showPrepTimeout);
      clearTimeout(showTodayTimeout);
      clearTimeout(showTodayPrepTimeout);
    };
  }, []);

  return (
  <>
    <section className='h-screen w-screen'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}        
        effect='fade'
        fadeEffect={{
          crossFade: true, // This replaces the effectFade prop in previous versions
        }}
        
        loop={true}         

        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >

         <SwiperSlide>
            <div className="bg-[url('/pexels.jpg')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>The Rise of AI</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-[url('/pexels.jpg')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>Quantum Leap</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-[url('/pexels.jpg')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>Cognitive Cities</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>            
    </Swiper>
      
    </section>
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
    </div>
    <div className='who-we-are'>
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
      <span className={`text-black v ${showVision ? 'slide-up' : ''} text-3xl mr-8`}></span>
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
    </div>

          {/* Code below is the part of the why we exist section */}

    <div className='why-we-exist'>
      {showAnthroTech && ( 
        <div className={`prep ${showAnthroTech ? 'appear-first-move-up' : ''} text-black text-3xl mb-8`}>
          &#91;anthropology + technology&#93;
        </div>
      )}
      {showAnthroPara && ( 
        <div className='prep-head w-1/2'>
          <div className={`prep1 text-black xl:text-2xl sm:text-xl ${showAnthroPara ? 'appear-from-bottom' : ''}`}>
            This best defines what we do at BLVCKPIXEL
          </div>
          <div className={`prep2 text-black xl:text-2xl sm:text-xl ${showAnthroPara ? 'appear-from-bottom' : ''}`}>
            It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.
          </div>
        </div>
      )};
      {showPara && (
        <div className='para-exist w-1/2'>
          <div className={`para-exist1 text-black xl:text-2xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
            The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intellgence.
          </div>
          <div className={`para-exist2 text-black xl:text-2xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
            We attempt to foresee these developments at all levels.
          </div>
          <div className={`para-exist3 text-black xl:text-2xl sm:text-xl ${showPara ? 'appear-from-bottom' : ''}`}>
            The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the biginning of recorded history. In the next few years, no matter the enterprise, government or organisation, every business and operational model will have to adapt, and evolve.
          </div>
        </div>
      )}
    </div>
          {/* From here starts the what we do section  */}
    <div className='what-we-do'>
      {showServices && (
        <div className='prep xl:text-3xl sm:text-xl'>
          <p>&#91; services &#93; </p>
        </div>
      )}
      {showServicesPara && (
        <div className='prep-head text-black w-1/2 sm:text-xl'>
          <div className='prep1'>
            Through advisory, consulting, strategic planning, prototyping, and realisation, we prepare and transition our clients into the age of artificial general intelligence
          </div>
          <div className='prep2'>
            Our future proofing services is a 3 stages' cycle of foresight, preparation, and implementation.
          </div>
        </div>
      )}
      {showNext && ( 
        <div className='prep text-3xl'>
          &#91; what&apos;s after next &#93;
        </div>
      )}
      {showForesight && (
        <div className='prep-head'>
          <div className='text-2xl text-black ml-3 prep1'>
            Foresight | 3-5 years ahead
          </div>
          <div className='text-2xl text-black prep2'>
            -Foresight Forum Conferences: expertise on future tech <br /> -Strategic Foresight Reports: bespoke research and presentations
          </div>
        </div>
      )}
      {showWhat && (
        <div className='prep text-3xl'>
          &#91; what&apos;s next &#93;
        </div>
      )}
      {showPrep && (
        <div className='prep-head'>
          <div className='text-2xl text-black ml-3 prep1'>
            Preparation | 1-2 years ahead
          </div>
          <div className='text-2xl text-black prep2'>
            -Development of strategies to respond to rapidly evolving markets<br /> 
            -Research and conception of innovative workplace systems <br />
            -Research and ideation of innovative business models based on emerging technologies <br />
            -Predictive market research to identify business opportunities and changing consumer behaviour <br />
            -Organisation of seminars for directors and C Suite Executives
          </div>
        </div>
      )}
      {showToday && (
        <div className='prep text-3xl'>
          &#91; what&apos;s today &#93;
        </div>
      )}
      {showTodayPrep && (
        <div className='prep-head text-3xl'>
          <div className='prep1 text-3xl'>
            Implementation | Now!
          </div>
          <div className='prep2'>
            -Conception off real-world business cases and use cases<br />
            -Innovation workshops for management, product development, and marketing teams <br />
            -Prototyping of innovative business models and workplace systems <br />
            -Project management for implementation of emerging technologies
          </div>
        </div>
      )}
    </div>
      {/* whom we work from section starts from here */}
      <div className='prep'>
        &#91; clients &#93;
      </div>
      <div className='prep-head'>
        <div className='prep1'>
          They inspire us.
        </div>
        <div className='prep2'>
          We advise them.
        </div>
        <div className='prep3'>
          We innovate as one.
        </div>
        <div>
          {/* slider comes here */}
        </div>
      </div>
      <div className='prep'>
        &#91; you &#93;
      </div>
      <div className='prep-head'>
        <div className='prep1'>
          We are previleged to work with some of the most ;egendary clients and well-loved global brands.
        </div>
        <div className='prep2'>
          The trust us to deliver informative research, strategic planning reports, educational experiences, workplace amnd business innovations, use case prototypes.
        </div>
        <div className='prep3'>
          If you would like to join this illustrious circle of clients please contact us to start the conversation: <Link href='hello@blvckpixel.com'>hello@blvckpixel.com</Link> 
        </div>
      </div>
      <div className='prep'>
        &#91; our team + partners &#93;
      </div>
      <div className='prep-head'>
        <div className='prep1'>
          What makes our team so different?
        </div>
        <div className='prep2'>
          It&apos;s all about our unique set up and perspective on the future. Beyond being &#91; thought-leaders &#93; and &#91; visionaries &#93;, we are the &#91 builders &#93;.
        </div>
      </div>
      <div className='prep'>
        &#91; ideation &#93;
      </div>
      <div className='prep-head'>
        <div className='prep1'>
          Strategists, technologists, futurists, and creatives, BLVCKPIXEL is driven by our desire to prepare humanity for the incredible changes to come in our societies.
        </div>
        <div className='prep2'>
          Led by Teddy Pahagbia, one of the most singular voices in the emerging tech industry, the core team is backed by a global network of experts who create convergence-ready innovations for our clients.
        </div>
      </div>
      <div className='prep'>
        &#91; production &#93;
      </div>
      <div className='prep-head'>
        <div className='prep1'>
          In addition, our partners bring complementary services that assure the readiness and scalability of our use cases and new business models.
        </div>
        <div>
          {/* here comes the slider */}
        </div>
      </div>
      
    </>
  );
};
