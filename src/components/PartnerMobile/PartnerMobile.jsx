import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import Link from "next/link";
import images from '/public/images/index'

const PartnerMobile = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // setToggle(false);
    };
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
        <div className='flex flex-col items-center justify-center gap-7 h-full' ref={sectionRef}>
            <h1 className='text-[30px]  font-bold tracking-wide text-white' >Join Our Network</h1>
            <div className='flex flex-col items-center gap-4'>
                <p className='text-[18px] text-white'>For QSRs, Restaurants, and Retailers</p>
                <Link href={"/contact"} onClick={scrollToTop} className='bg-white text-black text-[15px] font-bold px-14 py-3 rounded-[10px] tracking-wider'>BECOME A PARTNER</Link>
            </div>
        </div>
    )
}

export default PartnerMobile