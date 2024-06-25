"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import images from '/public/images/index'
import Link from "next/link";
const Hero = () => {
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
            <section className='md:px-6 lg:px-10 mt-32'>
                <div className='bg-hero-large h-[70vh]  md:h-[80vh] lg:h-[90vh] rounded-2xl md:rounded-3xl flex flex-col gap-5 justify-center items-center' ref={sectionRef}>
                    <h1 className='text-white font-bold text-4xl md:text-5xl xl:text-6xl text-center tracking-wider'>Fast, Reliable Drone Deliveries</h1>
                    <p className='text-white font-semibold text-lg md:text-xl lg:text-xl xl:text-3xl tracking-wide text-center'>Get your orders delivered in minutes</p>
                    <div className='flex items-center justify-center gap-3 md:gap-5 '>
                        <Link href={"/"}>
                            <img src={images.googlewhite} alt="" className='w-40 md:w-48' />
                        </Link>
                        <Link href={"/"}>
                            <img src={images.appwhite} alt="" className='w-40 md:w-48' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero