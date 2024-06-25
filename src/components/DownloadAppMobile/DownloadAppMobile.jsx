import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import Link from "next/link";
import images from '/public/images/index'
const DownloadAppMobile = () => {
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
        <div className='flex flex-col items-center justify-center gap-4 h-full' ref={sectionRef}>
            <h1 className='text-[30px]  font-bold tracking-wide w-[65%] text-center'>Download the App Now</h1>
            <div className='flex items-center gap-3'>
                <Link href={"/"}>
                    <img src={images.googleblack} alt="" className='w-36' />
                </Link>
                <Link href={"/"}>
                    <img src={images.appblack} alt="" className='w-36' />
                </Link>
            </div>
        </div>
    )
}

export default DownloadAppMobile