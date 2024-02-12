'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './HomePage.css';
import './test/test.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const sections = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

export default function Home() {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const childDivHeight = 100;

  const handleScroll = (e: { deltaY: any; }) => {
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
            crossFade: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[url('/pixel3.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>The Rise of AI</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/pixel2.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>Quantum Leap</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/pixel1.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
              <h1 className='text-5xl font-bold md:text-7xl'>Cognitive Cities</h1>
              <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
              <h5 className='text-base md:text-lg'><a href='/'>→ Click [here] </a> to read the journal</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`childDiv ${currentDivIndex === index ? 'visible' : 'hidden'}`}
            style={{ transform: `translateY(-${currentDivIndex * childDivHeight}vh)` }}
          >
            {section === '1' && (
              <>
              <div>
                <div className="childDiv">
                  <Image src="/blvckpixel2.svg" className="logo" alt="Logo" width={400} height={100} />
                </div>
                <div className="childDiv">
                  <span className="blvckPixel text-3xl">BLVCK PIXEL</span>
                </div>
              </div>
                <div className="childDiv">
                  <span className="foresightCompany text-3xl">The foresight Company</span>
                </div>
                <div className='foresight'>
                  &#91; foresight &#93;
                </div>
                <div className="childDiv">
                  <div className="text-container">
                    <span className="foresight text-3xl"></span>
                    <p className='paragraph text-2xl italic xl:w-2/5'>the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.</p>
                  </div>
                </div>
                </>
                )}
                {section == '2' && (
                  <>
                <div className="childDiv">
                  <span className="blvckPixell text-3xl">BLVCK PIXEL</span>
                </div>
                <div className="childDiv">
                  <span className="v text-3xl mr-8">V = &#91; vision &#93;</span>
                </div>
                <div className="childDiv">
                  <p className='paragraph1 text-2xl italic xl:w-2/5'>The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.</p>
                </div>
                </>
                )}
                {section == '3' && (
                  <>
                  <div className="paragraphs-container w-1/2">
                    <div className="para1 text-black text-2xl">
                      Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: <br />
                      artificial intelligence, extended reality, blockchain, robotics, ...
                    </div>
                    <div className="para2 text-black text-2xl">
                      By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.
                    </div>
                    <div className="para3 text-black text-2xl">
                      We look beyond &#91; what's next &#93;. to what's &#91; after next &#93;.
                    </div>
                    </div>
                </>
                )}
            
            {section === '4' && (
              <>
                <div className="childDiv">
                  <div className='prep text-black text-3xl mb-8'>
                    &#91; anthropology + technology &#93;
                  </div>
                </div>
                  <div className='prep-head w-1/2'>
                    <div className="prep1 text-black xl:text-2xl sm:text-xl">
                      This best defines what we do at BLVCKPIXEL
                    </div>

                    <div className="prep2 text-black xl:text-2xl sm:text-xl">
                      It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.
                    </div>
                </div>
                </>
            )}
            {section === '5' && (
              <>
                  <div className="para-exist w-1/2">
                    <div className="para-exist1 text-black xl:text-2xl sm:text-xl">
                      The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intelligence.
                    </div>
                    <div className="para-exist2 text-black xl:text-2xl sm:text-xl">
                      We attempt to foresee these developments at all levels.
                    </div>
                    <div className="para-exist3 text-black xl:text-2xl sm:text-xl">
                      The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organization, every business and operational model will have to adapt, and evolve.
                    </div>
                  </div>
              </>
            )}

            {section === '6' && (
              <>
                <div className="childDiv">
                  <div className='prep xl:text-3xl sm:text-xl'>
                    &#91; services &#93;
                  </div>
                </div>
                  <div className='prep-head text-black w-1/2 sm:text-xl'>
                    <div className='prep1'>
                      Through advisory, consulting, strategic planning, prototyping, and realization, we prepare and transition our clients into the age of artificial general intelligence
                    </div>
                    <div className='prep2'>
                      Our future proofing services is a 3 stages cycle of foresight, preparation, and implementation.
                    </div>
                  </div>
                </>
            )}
            {section === '7' && (
              <>
                <div className="childDiv">
                  <div className='prep xl:text-3xl sm:text-xl'>
                    [ what's after next ]
                  </div>
                </div>
                  <div className='prep-head text-black w-1/2 sm:text-xl'>
                    <div className='prep1'>
                      Foresight | 3-5 years ahead
                    </div>
                    <div className='prep2'>
                      -Foresight Forum Conferences: expertise on future tech <br /> -Strategic Foresight Reports: bespoke research and presentations
                    </div>
                </div>
                </>
            )}
            {section === '8' && (
              <>
                <div className="childDiv">
                  <div className='prep xl:text-3xl sm:text-xl'>
                    [ what's next ]
                  </div>
                </div>
                  <div className='prep-head text-black w-1/2 sm:text-xl'>
                    <div className='prep1'>
                      Preparation | 1-2 years ahead
                    </div>
                    <div className='prep2'>
                      -Development of strategies to respond to rapidly evolving markets<br /> 
                      -Research and conception of innovative workplace systems <br />
                      -Research and ideation of innovative business models based on emerging technologies <br />
                      -Predictive market research to identify business opportunities and changing consumer behavior <br />
                      -Organization of seminars for directors and C Suite Executives
                    </div>
                  </div>
                </>
            )}
            {section === '9' && (
              <>
                  <div className='prep xl:text-3xl sm:text-xl'>
                    [ what's today ]
                  </div>
                  <div className='prep-head text-black w-1/2 sm:text-xl'>
                    <div className='prep1'>
                      Implementation | Now!
                    </div>
                    <div className='prep2'>
                      -Conception off real-world business cases and use cases<br />
                      -Innovation workshops for management, product development, and marketing teams <br />
                      -Prototyping of innovative business models and workplace systems <br />
                      -Project management for implementation of emerging technologies
                    </div>
                  </div>
              </>
            )}
            {section === '10' && (
              <>
            <div  className='prep xl:text-3xl sm:text-xl'>
              &#91; clients &#93;
            </div>
            <div className='prep-head text-xl'>
              They inspire us. <br />
              We advise them. <br />
              We innovate as one.
              {/* slider here */}
            </div>
            </>
            )}
            {section === '11' && (
              <>
            <div className='prep xl:text-3xl sm:text-xl mb-32'>
              &#91; you &#93;   
            </div>
            <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'>
              We are priviliged to work with some of the most legendary clients and well-loved global brands.
            </div>
            <div className='prep2'>
              They trust us to deliver informative research, strategic planning reports, educational experiences , workplace and business innovationss, use case prototypes.
            </div>
            <div className='prep3'>
              If you would like to join this illustrious circle of clients please contact us to start the conversation: <Link href='hello@blvckpixel.com'>hello@blvckpixel.com</Link>
            </div>
            </div>
            </>
            )}
            {section === '12' && (
              <>
            <div className='prep xl:text-3xl sm:text-xl'>
              &#91; our team + partners &#93;
            </div>
            <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'>
              What makes our team so different?
            </div>
            <div className='prep2'>
              It's all about our unique set up and perspective on the future. Beyond being &#91; thought-leaders &#93; and &#91; visionaries &#93;, we are &#91; builders &#93;.
            </div>
            </div>
            </>
            )}
            {section === '13' && (
              <>
            <div className='prep xl:text-3xl sm:text-xl mb-16'>
              &#91; ideation &#93;
            </div>
            <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'>
              Strategists, technologists, futurists and creatives, <i>BLVCKPIXEL</i> is driven by our desire to prepare humanity for the incredible changes to come n our societies.
            </div>
            <div className='prep2'>
              Led by Teddy Pahagbia, one of the most singular voices in the emerging tech industry, the core team is backed by a global network of experts who create convergence-ready innovations for our clients.
            </div>
            </div>
            </>
            )}
            {section === '14' && (
            <>
            <div className='prep xl:text-3xl sm:text-xl'>
              &#91; production &#93;
            </div>
            <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'>
              In addition, our partners bring complementary services that assure the readiness and scalability of our use cases and new business models.
            </div>
              {/* slider here */}
            </div>
            </>
            )}
            {/* BLVCKBOOK */}
            {section === '15' && (
            <>
            <div className='prep xl:text-3xl sm:text-xl mb-8'>
              &#91; get in touch &#93;
            </div>
            <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'>
              let&apos;s talk + meet + collaborate
            </div>
            <div className='prep2'>
              Fell free to ping us if you want to chat, we&apos;sll be happy to share a coffee in our Paris headquarters or a fresh juice in our Dubai bureau.
          </div>
          <div className='prep3'>
            And yes, we&apos;re always looking for talents. ;&nbsp;
          </div>
          </div>
          </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
