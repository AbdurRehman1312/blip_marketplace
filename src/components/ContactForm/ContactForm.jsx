import React, { useRef } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser';
import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast";
const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yss0d8u', 'template_830ds5s', form.current, {
                publicKey: 'yFRonm0STdL1LPrZn',
            })
            .then(
                () => {
                    toast.success('Successfully Sent!');
                },
                () => {
                    toast.error("Error occured");
                },
            );
    };
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className='md:w-[50%] w-full bg-[#eff0f1] rounded-xl md:p-7 p-4' ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col gap-3'>
                    <div className="flex md:flex-row flex-col md:gap-10 gap-4 items-center justify-between">
                        <div className='md:w-[50%] w-full'>
                            <Label htmlFor="firstname">First Name</Label>
                            <Input type="text" id="firstname" name="firstname" required={true} />
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input type="text" id="lastname" name="lastname" />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-10 gap-4 items-center justify-between">
                        <div className='md:w-[50%] w-full'>
                            <Label htmlFor="phone">Phone</Label>
                            <Input type="number" id="phone" name="phone" required={true} />
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" required={true} />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" required={true} />
                    </div>
                    <div className='md:w-[30%] w-full mt-5'>
                        <Button>Send</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm