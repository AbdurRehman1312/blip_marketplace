import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import images from '/public/images/index'

const WorkImages = () => {
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
        <div className='mt-4 md:flex hidden  items-baseline gap-5 justify-around' ref={sectionRef} >
            <div className='flex flex-col items-center lg:w-[28%] w-full'>
                <img src={images.orderimg} alt="" className='w-[63%]' />
                <h1 className='text-primary md:text-[16px] lg:text-[18px] xl:text-[22px] font-bold text-center mt-5'>Order via the Blip app</h1>
            </div>
            <div className='flex flex-col items-center lg:w-[28%] w-full'>
                <img src={images.packageimg} alt="" className='w-[80%]' />
                <h1 className='text-primary md:text-[16px] lg:text-[18px] xl:text-[22px] font-bold text-center mt-5'>Package prepared by partner</h1>
            </div>
            <div className='flex flex-col items-center  lg:w-[28%] w-full'>
                <img src={images.deliveredimg} alt="" className='w-[70%]' />
                <h1 className='text-primary md:text-[16px] lg:text-[18px] xl:text-[22px] font-bold text-center mt-[10px]'>Package delivered to your location in as little as 5 minutes</h1>
            </div>
        </div>
    )
}

export default WorkImages