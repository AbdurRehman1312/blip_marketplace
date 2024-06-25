"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ContactForm from "@/components/ContactForm/ContactForm";
import images from "/public/images/index";

const ContactUs = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    document.title = "Blip Marketplace | Contact Us";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Get in touch with Blip Marketplace.";
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Get in touch with Blip Marketplace.";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);
  useEffect(() => {
    if (sectionRef.current) {
      const textElements = Array.from(sectionRef.current.children);
      textElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: "-100%",
          },
          {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power4.out",
            stagger: 0.8,
          }
        );
      });
    }
  }, []);
  return (
    <>
      <section className="">
        <div className="bg_contact md:h-[60vh] lg:mt-10 mt-24 h-[40vh]"></div>
        <div className="md:container md:mx-auto pb-16">
          <div className="md:mt-[-120px] mt-[-60px] flex md:flex-row flex-col justify-center md:gap-3 gap-10">
            <div
              className="md:w-[40%] w-full flex flex-col md:items-start items-center gap-6"
              ref={sectionRef}
            >
              <h1 className="uppercase tracking-[8px] font-semibold text-lg">
                Contact
              </h1>
              <h1 className="capitalize font-bold md:text-5xl text-3xl">
                Let's get in touch
              </h1>
              <div className="flex md:items-start items-center md:flex-row flex-col gap-3 mt-5">
                <img src={images.location} alt="" className="w-6" />
                <p className="font-medium text-center md:text-start">
                  4136 Del Rey Avenue. <br /> Marina Del Rey,CA 90292
                </p>
              </div>
              {/* <div className='flex md:items-start items-center md:flex-row flex-col gap-3 mt-10 md:mt-6'>
                <img src={images.mail} alt="" className="w-6" />
                <p className="font-medium">sales@blip.delivery</p>
              </div> */}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
