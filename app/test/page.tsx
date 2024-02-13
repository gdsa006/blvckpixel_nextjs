// 'use client'
// import { useEffect, useState, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import './test.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.css';
// import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// const sections = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15'];

// function isInViewport(element: { getBoundingClientRect: () => any; }) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }


// export default function Test() {
//   const [currentDivIndex, setCurrentDivIndex] = useState(0);
//   const childDivHeight = 100;

//   const animatedElementRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null, // Use the viewport as the root
//       rootMargin: '0px', // No margin
//       threshold: 0.5, // Trigger when 50% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate'); // Add animation class when the element is visible
//         } else {
//           entry.target.classList.remove('animate'); // Remove animation class when the element is not visible
//         }
//       });
//     }, options);

//     if (animatedElementRef.current) {
//       observer.observe(animatedElementRef.current); // Start observing the element
//     }

//     // Cleanup function to disconnect the observer when the component unmounts
//     return () => {
//       if (animatedElementRef.current) {
//         observer.unobserve(animatedElementRef.current);
//       }
//     };
//   }, []);
  
//   return (
//     <>
//       <section className='h-screen w-screen'>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           effect='fade'
//           fadeEffect={{
//             crossFade: true,
//           }}
//           loop={true}
//           modules={[Autoplay, Pagination, EffectFade]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="bg-[url('/pixel3.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
//               <h1 className='text-5xl font-bold md:text-7xl'>The Rise of AI</h1>
//               <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
//               <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="bg-[url('/pixel2.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
//               <h1 className='text-5xl font-bold md:text-7xl'>Quantum Leap</h1>
//               <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
//               <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="bg-[url('/pixel1.png')] flex flex-col justify-center p-10 gap-10  bg-cover object-contain h-screen w-screen">
//               <h1 className='text-5xl font-bold md:text-7xl'>Cognitive Cities</h1>
//               <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
//               <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       <div className="container">
//         <div className="scrollable-menu">
//           <div className="menu-items">
//             <div className='menu-item'><div> &#91; who we are &#93;</div></div>
//             <div className='menu-item1'><div> &#91; why we exist &#93;</div></div>
//             <div className='menu-item2'><div> &#91; what we do &#93;</div></div>
//             <div className='menu-item3'><div> &#91; whom we work for &#93;</div></div>
//             <div className='menu-item4'><div> &#91; how we work &#93;</div></div>
//             <div className='menu-item5'><div> &#91; journal &#93;</div></div>
//             <div className='menu-item6'><div> &#91; contact | jobs &#93;</div></div>
//           </div>
//         </div>
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className={`childDiv animate ${currentDivIndex === index ? 'visible' : 'hidden'}`}
//             style={{ transform: `translateY(-${currentDivIndex * childDivHeight}vh)` }}
//           >
//             <div id='who-we-are' className='section'>
//             {section === '1' && (
//               <>
//               <div>
//                 <div className="animate" ref={animatedElementRef}>
//                   <Image src="/blvckpixel2.svg" className="logo" alt="Logo" width={400} height={100} />
//                 </div>
//                 <div className="childDiv animate">
//                   <span className="blvckPixel text-3xl">BLVCK PIXEL</span>
//                 </div>
//               </div>
//                 <div className="childDiv animate">
//                   <span className="foresightCompany text-3xl">The foresight Company</span>
//                 </div>
//                 <div className='foresight'>
//                   &#91; foresight &#93;
//                 </div>
//                 <div className="childDiv animate">
//                   <div className="text-container">
//                     <span className="foresight text-3xl"></span>
//                     <p className='paragraph text-2xl italic xl:w-2/5'>the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.</p>
//                   </div>
//                 </div>
//                 </>
//                 )}
//                 {section == '2' && (
//                   <>
//                 <div className="childDiv animate">
//                   <span className="blvckPixell text-3xl">BLVCK PIXEL</span>
//                 </div>
//                 <div className="childDiv animate">
//                   <span className="v text-3xl mr-8">V = &#91; vision &#93;</span>
//                 </div>
//                 <div className="childDiv animate">
//                   <p className='paragraph1 text-2xl italic xl:w-2/5'>The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.</p>
//                 </div>
//                 </>
//                 )}
//                 {section == '3' && (
//                   <>
//                   <div className="paragraphs-container w-1/2">
//                     <div className="para1 text-black text-2xl">
//                       Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: <br />
//                       artificial intelligence, extended reality, blockchain, robotics, ...
//                     </div>
//                     <div className="para2 text-black text-2xl">
//                       By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.
//                     </div>
//                     <div className="para3 text-black text-2xl">
//                       We look beyond &#91; what&apos;s next &#93;. to what&apos;s &#91; after next &#93;.
//                     </div>
//                     </div>
//                 </>
//                 )}
//                 </div>
//             <div id='why-we-exist' className='section'>
//             {section === '4' && (
//               <>
//                 <div className="childDiv animate">
//                   <div className='prep text-black text-3xl mb-8'>
//                     &#91; anthropology + technology &#93;
//                   </div>
//                 </div>
//                   <div className='prep-head w-1/2'>
//                     <div className="prep1 text-black xl:text-2xl sm:text-xl">
//                       This best defines what we do at BLVCKPIXEL
//                     </div>

//                     <div className="prep2 text-black xl:text-2xl sm:text-xl">
//                       It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.
//                     </div>
//                 </div>
//                 </>
//             )}
//             {section === '5' && (
//               <>
//                   <div className="para-exist w-1/2">
//                     <div className="para-exist1 text-black xl:text-2xl sm:text-xl">
//                       The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intelligence.
//                     </div>
//                     <div className="para-exist2 text-black xl:text-2xl sm:text-xl">
//                       We attempt to foresee these developments at all levels.
//                     </div>
//                     <div className="para-exist3 text-black xl:text-2xl sm:text-xl">
//                       The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organization, every business and operational model will have to adapt, and evolve.
//                     </div>
//                   </div>
//               </>
//             )}
//             </div>
//             <div id='what-we-do' className='section'>
//             {section === '6' && (
//               <>
//                 <div className="childDiv animate">
//                   <div className='prep xl:text-3xl sm:text-xl'>
//                     &#91; services &#93;
//                   </div>
//                 </div>
//                   <div className='prep-head text-black w-1/2 sm:text-xl'>
//                     <div className='prep1'>
//                       Through advisory, consulting, strategic planning, prototyping, and realization, we prepare and transition our clients into the age of artificial general intelligence
//                     </div>
//                     <div className='prep2'>
//                       Our future proofing services is a 3 stages cycle of foresight, preparation, and implementation.
//                     </div>
//                   </div>
//                 </>
//             )}
//             {section === '7' && (
//               <>
//                 <div className="childDiv animate">
//                   <div className='prep xl:text-3xl sm:text-xl'>
//                     [ what&apos;s after next ]
//                   </div>
//                 </div>
//                   <div className='prep-head text-black w-1/2 sm:text-xl'>
//                     <div className='prep1'>
//                       Foresight | 3-5 years ahead
//                     </div>
//                     <div className='prep2'>
//                       -Foresight Forum Conferences: expertise on future tech <br /> -Strategic Foresight Reports: bespoke research and presentations
//                     </div>
//                 </div>
//                 </>
//             )}
//             {section === '8' && (
//               <>
//                 <div className="childDiv animate">
//                   <div className='prep xl:text-3xl sm:text-xl'>
//                     [ what&apos;s next ]
//                   </div>
//                 </div>
//                   <div className='prep-head text-black w-1/2 sm:text-xl'>
//                     <div className='prep1'>
//                       Preparation | 1-2 years ahead
//                     </div>
//                     <div className='prep2'>
//                       -Development of strategies to respond to rapidly evolving markets<br /> 
//                       -Research and conception of innovative workplace systems <br />
//                       -Research and ideation of innovative business models based on emerging technologies <br />
//                       -Predictive market research to identify business opportunities and changing consumer behavior <br />
//                       -Organization of seminars for directors and C Suite Executives
//                     </div>
//                   </div>
//                 </>
//             )}
//             {section === '9' && (
//               <>
//                   <div className='prep xl:text-3xl sm:text-xl'>
//                     [ what&apos;s today ]
//                   </div>
//                   <div className='prep-head text-black w-1/2 sm:text-xl'>
//                     <div className='prep1'>
//                       Implementation | Now!
//                     </div>
//                     <div className='prep2'>
//                       -Conception off real-world business cases and use cases<br />
//                       -Innovation workshops for management, product development, and marketing teams <br />
//                       -Prototyping of innovative business models and workplace systems <br />
//                       -Project management for implementation of emerging technologies
//                     </div>
//                   </div>
//               </>
//             )}
//              </div>
//              <div id='whom-we-work-for' className='section'>
//             {section === '10' && (
//               <>
//             <div  className='prep xl:text-3xl sm:text-xl'>
//               &#91; clients &#93;
//             </div>
//             <div className='prep-head text-2xl mb-12'>
//               They inspire us. <br />
//               We advise them. <br />
//               We innovate as one.
//               {/* slider here */}
//             </div>
//             </>
//             )}
//             {section === '11' && (
//               <>
//             <div className='prep xl:text-3xl sm:text-xl mb-32'>
//               &#91; you &#93;   
//             </div>
//             <div className='prep-head text-black w-1/2 sm:text-xl'>
//             <div className='prep1'>
//               We are priviliged to work with some of the most legendary clients and well-loved global brands.
//             </div>
//             <div className='prep2'>
//               They trust us to deliver informative research, strategic planning reports, educational experiences , workplace and business innovationss, use case prototypes.
//             </div>
//             <div className='prep3'>
//               If you would like to join this illustrious circle of clients please contact us to start the conversation: <Link href='hello@blvckpixel.com'>hello@blvckpixel.com</Link>
//             </div>
//             </div>
//             </>
//             )}
//              </div>
//              <div id='how-we-work' className='section'>
//             {section === '12' && (
//               <>
//             <div className='prep xl:text-3xl sm:text-xl'>
//               &#91; our team + partners &#93;
//             </div>
//             <div className='prep-head text-black w-1/2 sm:text-xl'>
//             <div className='prep1'>
//               What makes our team so different?
//             </div>
//             <div className='prep2'>
//               It&apos;s all about our unique set up and perspective on the future. Beyond being &#91; thought-leaders &#93; and &#91; visionaries &#93;, we are &#91; builders &#93;.
//             </div>
//             </div>
//             </>
//             )}
//             {section === '13' && (
//               <>
//             <div className='prep xl:text-3xl sm:text-xl mb-16'>
//               &#91; ideation &#93;
//             </div>
//             <div className='prep-head text-black w-1/2 sm:text-xl'>
//             <div className='prep1'>
//               Strategists, technologists, futurists and creatives, <i>BLVCKPIXEL</i> is driven by our desire to prepare humanity for the incredible changes to come n our societies.
//             </div>
//             <div className='prep2'>
//               Led by Teddy Pahagbia, one of the most singular voices in the emerging tech industry, the core team is backed by a global network of experts who create convergence-ready innovations for our clients.
//             </div>
//             </div>
//             </>
//             )}
//             {section === '14' && (
//             <>
//             <div className='prep xl:text-3xl sm:text-xl'>
//               &#91; production &#93;
//             </div>
//             <div className='prep-head text-black w-1/2 sm:text-xl'>
//             <div className='prep1'>
//               In addition, our partners bring complementary services that assure the readiness and scalability of our use cases and new business models.
//             </div>
//               {/* slider here */}
//             </div>
//             </>
//             )}
//              </div>
//             {/* BLVCKBOOK */}
//             <div id='contact-jobs' className='section'></div>
//             {section === '15' && (
//             <>
//             <div className='prep xl:text-3xl sm:text-xl mb-8'>
//               &#91; get in touch &#93;
//             </div>
//             <div className='prep-head text-black w-1/2 sm:text-xl'>
//             <div className='prep1'>
//               let&apos;s talk + meet + collaborate
//             </div>
//             <div className='prep2'>
//               Fell free to ping us if you want to chat, we&apos;sll be happy to share a coffee in our Paris headquarters or a fresh juice in our Dubai bureau.
//           </div>
//           <div className='prep3'>
//             And yes, we&apos;re always looking for talents. ;&nbsp;
//           </div>
//           </div>
//           </>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

//slider of logos

// import React from 'react'
// import { Link } from 'react-router-dom'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const PartnerSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   }

//   const partners = [
//     {
//       image: 'path/to/image1.jpg',
//       description: 'Partner 1 description',
//     },
//     {
//       image: 'path/to/image2.jpg',
//       description: 'Partner 2 description',
//     },
//     // Add more partners as needed
//   ]

//   return (
//     <Slider {...settings}>
//       {partners.map((partner, index) => (
//         <div key={index} className="partner">
//           <img src={partner.image} alt={partner.description} />
//           <p>{partner.description}</p>
//         </div>
//       ))}
//     </Slider>
//   )
// }