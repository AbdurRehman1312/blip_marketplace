"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import images from '/public/images/index'
import PartnerMobile from "../PartnerMobile/PartnerMobile";
import DownloadAppMobile from "../DownloadAppMobile/DownloadAppMobile";
import Link from "next/link";
const Delivery = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);

    const intersection1 = useIntersection(sectionRef1, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });
    const intersection2 = useIntersection(sectionRef2, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });
    const intersection3 = useIntersection(sectionRef3, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });

    // Animation function
    const animate = (elements, shouldFadeIn) => {
        gsap.to(elements, {
            duration: 1,
            opacity: shouldFadeIn ? 1 : 0,
            y: shouldFadeIn ? 0 : "100%",
            scale: shouldFadeIn ? 1 : 0.1,
            ease: "power4.out",
            stagger: {
                amount: 0.3,
            },
        });
    };

    useEffect(() => {
        if (sectionRef1.current) {
            const textElements = Array.from(sectionRef1.current.children);
            if (intersection1 && intersection1.intersectionRatio >= 0.5) {
                animate(textElements, true);
            } else {
                animate(textElements, false);
            }
        }
    }, [intersection1]);

    useEffect(() => {
        if (sectionRef2.current) {
            const textElements = Array.from(sectionRef2.current.children);
            if (intersection2 && intersection2.intersectionRatio >= 0.5) {
                animate(textElements, true);
            } else {
                animate(textElements, false);
            }
        }
    }, [intersection2]);

    useEffect(() => {
        if (sectionRef3.current) {
            const textElements = Array.from(sectionRef3.current.children);
            if (intersection3 && intersection3.intersectionRatio >= 0.5) {
                animate(textElements, true);
            } else {
                animate(textElements, false);
            }
        }
    }, [intersection3]);
    return (
        <>
            <section className='pt-10' id='delivery-zone'>
                <div className='flex flex-col items-center gap-1' ref={sectionRef1}>
                    <h1 className='font-medium text-[13px] md:text-base tracking-[7px]'>COVERAGE AREA</h1>
                    <h1 className='text-[30px] lg:text-[36px] xl:text-[40px] font-bold'>Delivery Zones</h1>
                    <p className='w-[60%] sm:w-full text-center text-[16px] lg:text-[18px] xl:text-[22px] '>Currently serving select areas. More coming soon!</p>
                </div>
                <div className='bg-map md:h-[70vh] lg:h-[90vh] xl:h-[90vh] mt-20 rounded-t-[60px] relative hidden md:block'>
                    <div className='absolute md:bottom-[-17%] lg:bottom-[-13%] xl:bottom-[-35%] 2xl:bottom-[-13%] 2xl:right-[18%]'>
                        <img src={images.drone} alt="" />
                    </div>
                    <div className='absolute md:bottom-[5%] lg:bottom-[4%] xl:bottom-[-10%] md:right-[36%] lg:right-[37%] 2xl:right-[42.5%] 2xl:bottom-[1%] '>
                        <div className='flex flex-col items-center justify-center md:gap-3 lg:gap-6 xl:gap-8' ref={sectionRef2}>
                            <div className='flex flex-col items-center '>
                                <h1 className='md:text-[24px] lg:text-[29px] xl:text-[40px] font-bold tracking-wide text-white' >Join Our Network</h1>
                                <p className='md:text-[12px] lg:text-[15px] xl:text-[22px] text-white'>For QSRs, Restaurants, and Retailers</p>
                            </div>
                            <Link href={"/contact"} onClick={scrollToTop} className='bg-white text-black md:text-[10px] lg:text-[13px] xl:text-[15px] font-bold px-5 lg:px-7 py-2 lg:py-3 rounded-[10px] tracking-wider'>BECOME A PARTNER</Link>
                        </div>
                    </div>
                </div>
                <div className='bg-bottom  rounded-b-[60px]  md:h-[80vh]  lg:h-[90vh] xl:h-[90vh] md:flex flex-col items-center justify-center gap-4 md:gap-8 hidden ' ref={sectionRef3}>
                    <h1 className='text-[30px] lg:text-[36px] xl:text-[40px] font-bold tracking-wide '>Download the App Now</h1>
                    <img src={images.qrcode} alt="" className='md:w-28 lg:w-32 xl:w-36' />
                    <div className='flex items-center gap-5'>
                        <Link href={"/"}>
                            <img src={images.googleblack} alt="" className='md:w-28 lg:w-32 xl:w-40' />
                        </Link>
                        <Link href={"/"}>
                            <img src={images.appblack} alt="" className='md:w-28 lg:w-32 xl:w-40' />
                        </Link>
                    </div>
                </div>
                <div className='block md:hidden mt-12 bg-map-mobile h-[40vh] rounded-t-[30px]'>
                    {/* <img src={images.mapmobile} alt="" /> */}
                </div>
                <div className='block md:hidden bg-brown h-[70vh]'>
                    <PartnerMobile />
                </div>
                <div className='block md:hidden bg-bottom-mobile h-[70vh] rounded-b-[40px]'>
                    <DownloadAppMobile />
                </div>
            </section>
        </>
    )
}

export default Delivery