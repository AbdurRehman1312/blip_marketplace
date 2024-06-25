"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import images from '/public/images/index'
import WorkImages from "../WorkImages/WorkImages";
const Work = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold value as needed
  });

  useEffect(() => {
    const textElements = Array.from(sectionRef.current.children);

    const fadeIn = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 0,
        y: "100%",
        scale: 0.1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    if (intersection && intersection.intersectionRatio >= 0.5) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [intersection]);
  return (
    <>
      <section className='py-16 container mx-auto' id="howitworks" >
        <div className='flex flex-col items-center gap-2'>
          <h1 className='font-medium text-base tracking-[7px]'>STEP BY STEP</h1>
          <h1 className='text-[30px] lg:text-[36px] xl:text-[40px] font-bold'>How It Works</h1>
        </div>
        <div className='flex items-center md:flex-row flex-col justify-center gap-4 md:gap-10 mt-5 md:mt-14' ref={sectionRef}>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-wider font-semibold'>01</span>
          </div>
          <div className='md:hidden flex flex-col items-center lg:w-[28%] w-full'>
            <img src={images.orderimg} alt="" className='w-[70%]' />
            <h1 className='text-primary text-[22px] font-bold text-center mt-5'>Order via the Blip app</h1>
          </div>
          <div>
            <img src={images.arrow} alt="" className=' md:w-36 lg:w-60 xl:w-96 md:block hidden' />
          </div>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-wider font-semibold'>02</span>
          </div>
          <div className='md:hidden flex flex-col items-center lg:w-[28%] w-full'>
            <img src={images.packageimg} alt="" className='w-[80%]' />
            <h1 className='text-primary text-[22px] font-bold text-center mt-5'>Package prepared by partner</h1>
          </div>
          <div>
            <img src={images.arrow} alt="" className=' md:w-36 lg:w-60 xl:w-96 md:block hidden' />
          </div>
          <div className='bg-black text-white py-3 px-4 rounded-[50%]'>
            <span className='text-[22px] md:text-[16px] lg:text-[18px] xl:text-[22px] tracking-wider font-semibold'>03</span>
          </div>
          <div className='md:hidden flex flex-col items-center lg:w-[28%] w-full'>
            <img src={images.deliveredimg} alt="" className='w-[75%]' />
            <h1 className='text-primary text-[22px] font-bold text-center mt-[10px]'>Package delivered to your location in as little as 5 minutes</h1>
          </div>
        </div>
        <WorkImages />
      </section>
    </>
  )
}

export default Work