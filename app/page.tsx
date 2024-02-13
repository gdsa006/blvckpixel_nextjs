'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Link as ScrollLink } from 'react-scroll';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import './HomePage.css';

export default function Home() {

  
  // const [intersectionEntries, setIntersectionEntries] = useState<IntersectionObserverEntry[] | null>(null);
  // const cardsRef = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     setIntersectionEntries(entries);
  //   }, {
  //     threshold: 1,
  //   });

  //   cardsRef.current.forEach(card => {
  //     observer.observe(card);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []); 
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('it is intersecting', entry)
          if (ref.current?.classList.contains("animate")) {
            ref.current.classList.remove("animate");
          }
          setTimeout(() => {
            ref.current?.classList.add("animate");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(ref.current!);
  
    return () => observer.disconnect();
  }, []);

  const ref1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('it is intersecting', entry)
          if (ref1.current?.classList.contains("animateone")) {
            ref1.current.classList.remove("animateone");
          }
          setTimeout(() => {
            ref1.current?.classList.add("animateone");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(ref1.current!);
  
    return () => observer.disconnect();
  }, []);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('it is intersecting', entry)
          if (ref2.current?.classList.contains("animate")) {
            ref2.current.classList.remove("animate");
          }
          setTimeout(() => {
            ref2.current?.classList.add("animate");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(ref2.current!);
  
    return () => observer.disconnect();
  }, []);

  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('it is intersecting', entry)
          if (ref3.current?.classList.contains("animatetwo")) {
            ref3.current.classList.remove("animatetwo");
          }
          setTimeout(() => {
            ref3.current?.classList.add("animatetwo");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(ref3.current!);
  
    return () => observer.disconnect();
  }, []);

  const ref4 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref4.current?.classList.contains("animatetwo")) {
            ref4.current.classList.remove("animatetwo");
          }
          setTimeout(() => {
            ref4.current?.classList.add("animatetwo");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref4.current!);

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for ref5
  const ref5 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref5.current?.classList.contains("animate")) {
            ref5.current.classList.remove("animate");
          }
          setTimeout(() => {
            ref5.current?.classList.add("animate");
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref5.current!);

    return () => observer.disconnect();
  }, []);

  const ref6 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref6.current?.classList.contains("animate")) {
          ref6.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref6.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref6.current!);

  return () => observer.disconnect();
}, []);

// Intersection Observer for ref7
const ref7 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref7.current?.classList.contains("animate")) {
          ref7.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref7.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref7.current!);

  return () => observer.disconnect();
}, []);
const ref8 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref8.current?.classList.contains("animate")) {
          ref8.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref8.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref8.current!);

  return () => observer.disconnect();
}, []);

// Intersection Observer for ref7
const ref9 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref9.current?.classList.contains("animatetwo")) {
          ref9.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref9.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref9.current!);

  return () => observer.disconnect();
}, []);
const ref10 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref10.current?.classList.contains("animate")) {
          ref10.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref10.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref10.current!);

  return () => observer.disconnect();
}, []);

// Intersection Observer for ref7
const ref11 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref11.current?.classList.contains("animate")) {
          ref11.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref11.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref11.current!);

  return () => observer.disconnect();
}, []);
const ref12 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref12.current?.classList.contains("animatetwo")) {
          ref12.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref12.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref12.current!);

  return () => observer.disconnect();
}, []);

// Intersection Observer for ref7
const ref13 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref13.current?.classList.contains("animate")) {
          ref13.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref13.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref13.current!);

  return () => observer.disconnect();
}, []);
const ref14 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref14.current?.classList.contains("animate")) {
          ref14.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref14.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref14.current!);

  return () => observer.disconnect();
}, []);

// Intersection Observer for ref7
const ref15 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref15.current?.classList.contains("animatetwo")) {
          ref15.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref15.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref15.current!);

  return () => observer.disconnect();
}, []);
const ref16 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref16.current?.classList.contains("animate")) {
          ref16.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref16.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref16.current!);

  return () => observer.disconnect();
}, []);
const ref17 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref17.current?.classList.contains("animate")) {
          ref17.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref17.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref17.current!);

  return () => observer.disconnect();
}, []);
const ref18 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref18.current?.classList.contains("animatetwo")) {
          ref18.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref18.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref18.current!);

  return () => observer.disconnect();
}, []);
const ref19 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref19.current?.classList.contains("animate")) {
          ref19.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref19.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref19.current!);

  return () => observer.disconnect();
}, []);

const ref20 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref20.current?.classList.contains("animate")) {
          ref20.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref20.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref20.current!);

  return () => observer.disconnect();
}, []);
const ref21 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref21.current?.classList.contains("animatetwo")) {
          ref21.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref21.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref21.current!);

  return () => observer.disconnect();
}, []);
const ref22 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref22.current?.classList.contains("animate")) {
          ref22.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref22.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref22.current!);

  return () => observer.disconnect();
}, []);
const ref23 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref23.current?.classList.contains("animatetwo")) {
          ref23.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref23.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref23.current!);

  return () => observer.disconnect();
}, []);
const ref24 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref24.current?.classList.contains("animate")) {
          ref24.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref24.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref24.current!);

  return () => observer.disconnect();
}, []);
const ref25 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref25.current?.classList.contains("animate")) {
          ref25.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref25.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref25.current!);

  return () => observer.disconnect();
}, []);
const ref26 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref26.current?.classList.contains("animate")) {
          ref26.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref26.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref26.current!);

  return () => observer.disconnect();
}, []);
const ref27 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref27.current?.classList.contains("animatetwo")) {
          ref27.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref27.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref27.current!);

  return () => observer.disconnect();
}, []);
const ref28 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref28.current?.classList.contains("animate")) {
          ref28.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref28.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref28.current!);

  return () => observer.disconnect();
}, []);
const ref29 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref29.current?.classList.contains("animate")) {
          ref29.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref29.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref29.current!);

  return () => observer.disconnect();
}, []);
const ref30 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref30.current?.classList.contains("animatetwo")) {
          ref30.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref30.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref30.current!);

  return () => observer.disconnect();
}, []);
const ref31 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref31.current?.classList.contains("animate")) {
          ref31.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref31.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref31.current!);

  return () => observer.disconnect();
}, []);
const ref32 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref32.current?.classList.contains("animate")) {
          ref32.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref32.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref32.current!);

  return () => observer.disconnect();
}, []);
const ref33 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref33.current?.classList.contains("animatetwo")) {
          ref33.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref33.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref33.current!);

  return () => observer.disconnect();
}, []);
const ref34 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref34.current?.classList.contains("animate")) {
          ref34.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref34.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref34.current!);

  return () => observer.disconnect();
}, []);
const ref35 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref35.current?.classList.contains("animatetwo")) {
          ref35.current.classList.remove("animatetwo");
        }
        setTimeout(() => {
          ref35.current?.classList.add("animatetwo");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref35.current!);

  return () => observer.disconnect();
}, []);
const ref36 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref36.current?.classList.contains("animate")) {
          ref36.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref36.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref36.current!);

  return () => observer.disconnect();
}, []);
const ref37 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref37.current?.classList.contains("animate")) {
          ref37.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref37.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref37.current!);

  return () => observer.disconnect();
}, []);
const ref38 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref38.current?.classList.contains("animate")) {
          ref38.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref38.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref38.current!);

  return () => observer.disconnect();
}, []);

const ref39 = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (ref39.current?.classList.contains("animate")) {
          ref39.current.classList.remove("animate");
        }
        setTimeout(() => {
          ref38.current?.classList.add("animate");
        }, 100);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(ref39.current!);

  return () => observer.disconnect();
}, []);


const [activeSection, setActiveSection] = useState('');

const handleSetActive = (to: React.SetStateAction<string>) => {
  setActiveSection(to);
};

const scrollToActiveSection = () => {
  const menuBar = document.querySelector('.menu-items');
  const activeItem = document.getElementById(activeSection);
  if (menuBar && activeItem) {
    const menuBarRect = menuBar.getBoundingClientRect();
    const activeItemRect = activeItem.getBoundingClientRect();
    const scrollTop = activeItemRect.top - (menuBarRect.height - activeItemRect.height) / 2;
    menuBar.scrollTop = scrollTop;
  }
};

useEffect(() => {
  scrollToActiveSection();
}, [activeSection]);
useEffect(() => {
  const menuBar = document.querySelector('.menu-items');
  if (menuBar) {
    if (activeSection === 'how-we-work' || activeSection === 'journal' || activeSection === 'contact') {
      menuBar.classList.add('shifted-up');
    } else {
      menuBar.classList.remove('shifted-up');
    }
  }
}, [activeSection]);



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
      {/* <SwiperSlide className="slide">
        <div className="bg-[url('/pixel3.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className='text-5xl font-bold md:text-7xl'>The Rise of AI</h1>
          <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="bg-[url('/pixel2.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className='text-5xl font-bold md:text-7xl'>Quantum Leap</h1>
          <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="bg-[url('/pixel1.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className='text-5xl font-bold md:text-7xl'>Cognitive Cities</h1>
          <h3 className='text-2xl font-medium md:text-3xl'>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className='text-base md:text-lg'><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
    </Swiper> */}


    <SwiperSlide className="slide">
        <div className="bg-[url('/pixel3.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className=''>The Rise of AI</h1>
          <h3 className=''>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className=''><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="bg-[url('/pixel2.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className=''>Quantum Leap</h1>
          <h3 className=''>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className=''><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="bg-[url('/pixel1.png')] flex flex-col justify-center p-10 bg-cover object-contain h-screen w-screen">
          <h1 className=''>Cognitive Cities</h1>
          <h3 className=''>Creating and accelerating critical advantages through cutting-edge strategy and operations</h3>
          <h5 className=''><Link href='/'>→ Click [here] </Link> to read the journal</h5>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>


    <div className="container">

      <div className="scrollable-menu" style={{ display: 'none' }}>
        <div className="menu-items">
          <ScrollLink to = 'who-we-are' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item ${activeSection === 'who-we-are' ? 'active' : ''}`}>&#91; who we are &#93;</div>
          </ScrollLink>
          <ScrollLink to = 'why-we-exist' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item1 ${activeSection === 'why-we-exist' ? 'active' : ''}`}> &#91; why we exist &#93;</div>
          </ScrollLink>
          <ScrollLink to = 'what-we-do' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item2 ${activeSection === 'what-we-do' ? 'active' : ''}`}> &#91; what we do &#93;</div>
          </ScrollLink>
          <ScrollLink to = 'whom-we-work-for' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item3 ${activeSection === 'whom-we-work-for' ? 'active' : ''}`}> &#91; whom we work for &#93;</div>
          </ScrollLink>
          <ScrollLink to = 'how-we-work' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item4 ${activeSection === 'how-we-work' ? 'active' : ''}`}> &#91; how we work &#93;</div>
          </ScrollLink>
          {/* <ScrollLink to = 'who-we-are' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item5 ${activeSection === 'who-we-are' ? 'active' : ''}`}> &#91; journal &#93;</div>
          </ScrollLink> */}
          <ScrollLink to = 'contact' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item6 ${activeSection === 'contact' ? 'active' : ''}`}> &#91; contact | jobs &#93;</div>
          </ScrollLink>
        </div>
      </div>
<div className="scrollable-menu">
        <div className="menu-items">
          <ScrollLink to = 'who-we-are' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item ${activeSection === 'who-we-are' ? 'active' : ''}`}>who we are</div>
          </ScrollLink>
          <ScrollLink to = 'why-we-exist' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item1 ${activeSection === 'why-we-exist' ? 'active' : ''}`}>why we exist</div>
          </ScrollLink>
          <ScrollLink to = 'what-we-do' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item2 ${activeSection === 'what-we-do' ? 'active' : ''}`}>what we do</div>
          </ScrollLink>
          <ScrollLink to = 'whom-we-work-for' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item3 ${activeSection === 'whom-we-work-for' ? 'active' : ''}`}>whom we work for</div>
          </ScrollLink>
          <ScrollLink to = 'how-we-work' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item4 ${activeSection === 'how-we-work' ? 'active' : ''}`}>how we work</div>
          </ScrollLink>
          {/* <ScrollLink to = 'who-we-are' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item5 ${activeSection === 'who-we-are' ? 'active' : ''}`}>journal</div>
          </ScrollLink> */}
          <ScrollLink to = 'contact' spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <div className={`menu-item6 ${activeSection === 'contact' ? 'active' : ''}`}>contact | jobs</div>
          </ScrollLink>
        </div>
      </div>


      <div id="who-we-are" className="parent text-black">
        <div>
          <Image src="/blvckpixel2.svg" className="logo" alt="Logo" width={400} height={100} />
        </div>
        <div>
          <span className="blvckPixel text-3xl animate mb-12">BLVCK PIXEL</span>
        </div>
        <div className="foresight text-black">
          <span className=" text-3xl">The foresight Company</span>
        </div>
        <div className='slide-up text-3xl ml-16'>
          &#91; foresight &#93;
        </div>
        <div className="">
          <div className="text-container">
            <span className="foresight text-3xl"></span>
            <p className='paragraph text-2xl italic xl:w-2/5'>the ability to judge correctly what is going to happen in future and plan your actions based on this knowledge.</p>
          </div>
        </div>
      </div>
      <div className="parent1 text-black text-2xl" >
        <div>
          <span className=" text-3xl" ref={ref}> .</span>
        </div>
        <div>
          <span className="v text-3xl mr-8" ref={ref1}>V = &#91; vision &#93;</span>
        </div>
        <div>
          <p className=' text-2xl italic xl:w-2/5 mb-12' ref={ref2}>The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.</p>
        </div>
      </div>
      <div className="parent text-black">
        <div className="prep1 text-black text-2xl" ref={ref3}>
          Our Vision is focused on the convergence of the technologies that will affect the way we live and work in the coming years: <br />
          artificial intelligence, extended reality, blockchain, robotics, ... <br />
          <br />
          By staying ahead of current trends we future-proof our clients so that they anticipate, leap forward, and develop new operation models that align with what is to come.
          <br /> 
          <br/>
          We look beyond &#91; what&apos;s next &#93;. to what&apos;s &#91; after next &#93;.
        </div>
      </div>
      <div id="why-we-exist" className="parent text-black">
        why we exist
        <div className="parent">
            <div className='prep text-3xl' ref={ref4}>
            &#91; anthropology + technology &#93;
            </div>
          <div className='prep-head w-1/2'>
            <div className="prep1 text-black xl:text-2xl sm:text-xl"ref={ref5}>
              This best defines what we do at BLVCKPIXEL
            </div>
            <div className="prep2 text-black xl:text-2xl sm:text-xl" ref={ref39}>
              It means we envision and prepare for a world in which human ingenuity converges with the machine intelligence to design a better future.
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="para-exist w-1/2">
            <div className="prep1 text-black xl:text-2xl sm:text-xl" ref={ref6}>
              The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial intelligence.
            </div>
            <div className="prep2 text-black xl:text-2xl sm:text-xl" ref={ref7}>
              We attempt to foresee these developments at all levels.
            </div>
            <div className="prep3 text-black xl:text-2xl sm:text-xl" ref={ref8}>
              The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organization, every business and operational model will have to adapt, and evolve.
            </div>
          </div>
        </div>
      </div>
      <div id="what-we-do" className="parent text-black">
        what we do
        <div className="parent">
          <div>
            <div className='prep xl:text-3xl sm:text-xl' ref={ref9}>
              &#91; services &#93;
            </div>
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref10}>
              Through advisory, consulting, strategic planning, prototyping, and realization, we prepare and transition our clients into the age of artificial general intelligence
            </div>
            <div className='prep2' ref={ref11}>
              Our future proofing services is a 3 stages cycle of foresight, preparation, and implementation.
            </div>
          </div>
        </div>
        <div className="parent">
          <div>
            <div className='prep xl:text-3xl sm:text-xl' ref={ref12}>
              [ what&apos;s after next ]
            </div>
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1'  ref={ref13}>
              Foresight | 3-5 years ahead
            </div>
            <div className='prep2' ref={ref14}>
              -Foresight Forum Conferences: expertise on future tech <br /> -Strategic Foresight Reports: bespoke research and presentations
            </div>
          </div>
        </div>
        <div className="parent">
          <div>
            <div className='prep xl:text-3xl sm:text-xl' ref={ref15}>
              [ what&apos;s next ]
            </div>
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref16}>
              Preparation | 1-2 years ahead
            </div>
            <div className='prep2' ref={ref17}>
              -Development of strategies to respond to rapidly evolving markets<br /> 
              -Research and conception of innovative workplace systems <br />
              -Research and ideation of innovative business models based on emerging technologies <br />
              -Predictive market research to identify business opportunities and changing consumer behavior <br />
              -Organization of seminars for directors and C Suite Executives
            </div>
          </div>
        </div>
        <div className="parent">
          <div className='prep xl:text-3xl sm:text-xl' ref={ref18}>
            [ what&apos;s today ]
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref19}>
              Implementation | Now!
            </div>
            <div className='prep1' ref={ref20}>
              -Conception off real-world business cases and use cases<br />
              -Innovation workshops for management, product development, and marketing teams <br />
              -Prototyping of innovative business models and workplace systems <br />
              -Project management for implementation of emerging technologies
            </div>
          </div>
        </div>
      </div>
      <div id="whom-we-work-for" className="parent text-black">
        whom we work for
        <div className="parent">
          <div  className='prep xl:text-3xl sm:text-xl' ref={ref21}>
            &#91; clients &#93;
          </div>
          <div className='prep-head text-2xl mb-12'  ref={ref22}>
            They inspire us. <br />
            We advise them. <br />
            We innovate as one.
            {/* slider here */}
          </div>
        </div>
        <div className="parent">
          <div className='prep xl:text-3xl sm:text-xl mb-32' ref={ref23}>
            &#91; you &#93;   
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref24}>
              We are priviliged to work with some of the most legendary clients and well-loved global brands.
            </div>
            <div className='prep2' ref={ref25}>
              They trust us to deliver informative research, strategic planning reports, educational experiences , workplace and business innovationss, use case prototypes.
            </div>
            <div className='prep3' ref={ref26}>
              If you would like to join this illustrious circle of clients please contact us to start the conversation: <Link href='hello@blvckpixel.com'>hello@blvckpixel.com</Link>
            </div>
          </div>
        </div>
      </div>
      <div id="how-we-work" className="parent text-black">
        how we work
        <div className="parent">
          <div className="prep text-3xl"  ref={ref27}>
            &#91; our team + partners &#93;
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref28}>
              What makes our team so different?
            </div>
            <div className='prep2' ref={ref29}>
              It&apos;s all about our unique set up and perspective on the future. Beyond being &#91; thought-leaders &#93; and &#91; visionaries &#93;, we are &#91; builders &#93;.
            </div>
          </div>
        </div>
        <div className="parent">
          <div className='prep xl:text-3xl sm:text-xl mb-16' ref={ref30}>
            &#91; ideation &#93;
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref31}>
              Strategists, technologists, futurists and creatives, <i>BLVCKPIXEL</i> is driven by our desire to prepare humanity for the incredible changes to come n our societies.
            </div>
            <div className='prep2' ref={ref32}>
              Led by Teddy Pahagbia, one of the most singular voices in the emerging tech industry, the core team is backed by a global network of experts who create convergence-ready innovations for our clients.
            </div>
          </div>
        </div>
        <div className="parent">
          <div className='prep xl:text-3xl sm:text-xl'  ref={ref33}>
            &#91; production &#93;
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref34}>
              In addition, our partners bring complementary services that assure the readiness and scalability of our use cases and new business models.
            </div>
            {/* slider here */}
          </div>
        </div>
      </div>
      <div id="contact" className="parent mb-16 text-black">
        contact
        <div className="parent">
          <div className='prep xl:text-3xl sm:text-xl mb-8'  ref={ref35}>
            &#91; get in touch &#93;
          </div>
          <div className='prep-head text-black w-1/2 sm:text-xl'>
            <div className='prep1' ref={ref36}>
              let&apos;s talk + meet + collaborate
            </div>
            <div className='prep2' ref={ref37}>
              Fell free to ping us if you want to chat, we&apos;sll be happy to share a coffee in our Paris headquarters or a fresh juice in our Dubai bureau.
          </div>
          <div className='prep3' ref={ref38}>
            And yes, we&apos;re always looking for talents. ;&nbsp;
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
