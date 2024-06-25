import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <section>
                <div className='bg_contact md:h-[60vh] lg:mt-10 mt-24 h-[40vh]'>
                </div>
                <div className='md:container md:mx-auto px-4 md:px-20 pb-16'>
                    <div className='md:mt-[-120px] mt-[-60px] flex md:flex-row flex-col justify-start md:gap-3 gap-10'>
                        <div className='md:w-[40%] w-full flex flex-col md:items-start items-center gap-6'>
                            <h1 className='uppercase tracking-[8px] font-semibold text-lg'>PRIVACY POLICY</h1>
                            <h1 className='capitalize font-bold md:text-4xl text-3xl text-center sm:text-left'>Securing Your Trust</h1>
                        </div>
                    </div>
                    <div className='mt-16 flex flex-col gap-8'>
                        <p className='text-lg text-center px-2'>Blip Delivery Inc. ("Blip," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services via our mobile application ("App") and website ("Site").

                        </p>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>1. Information We Collect</h1>
                            <div className='ml-8 flex flex-col gap-2'>
                                <h1 className='font-semibold md:text-2xl text-xl '>Personal Information:</h1>
                                <p className='text-lg'>We may collect personally identifiable information, such as your name, email address, phone number, delivery address, and payment information.
                                </p>
                            </div>
                            <div className='ml-8 flex flex-col gap-2'>
                                <h1 className='font-semibold md:text-2xl text-xl '>Non-Personal Information:</h1>
                                <p className='text-lg'>We may collect non-personal information about you whenever you interact with our App or Site. This may include your IP address, browser type, operating system, access times, and the pages you have visited.
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>2. How We Use Your Information</h1>
                            <div className='ml-8 flex flex-col gap-2'>
                                <h1 className='font-semibold md:text-2xl text-xl '>We use the information we collect to:</h1>
                                <p className='text-lg'>Provide, operate, and maintain our services. Improve, personalize, and expand our services. Communicate with you, including customer service and support. Process transactions and send you related information, including purchase confirmations and invoices. Develop new products, services, features, and functionality.
</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>3. Sharing Your Information</h1>
                            <p className='text-lg ml-8'>We do not sell, trade, or rent your personal information to others. We may share information with:</p>
                            <div className='ml-8 flex flex-col gap-2'>
                                <h1 className='font-semibold md:text-2xl text-xl '>Service Providers:</h1>
                                <p className='text-lg'>We may share your information with third-party service providers to perform functions on our behalf, such as payment processing and order fulfillment.
                                </p>
                            </div>
                            <div className='ml-8 flex flex-col gap-2'>
                                <h1 className='font-semibold md:text-2xl text-xl '>Legal Requirements:</h1>
                                <p className='text-lg'>We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>4. Data Security
                            </h1>
                            <p className='text-lg ml-8'>We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                            </p>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>5. Your Choices
                            </h1>
                            <p className='text-lg ml-8'>You have the following rights regarding your personal information:</p>
                            <ul className='list-disc text-lg ml-14'>
                                <li>Access and update your information.</li>
                                <li>Delete your information.</li>
                                <li>Object to the processing of your information.</li>
                            </ul>
                            <p className='text-lg ml-8'>Withdraw your consent at any time where we rely on your consent to process your information.
                            </p>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <h1 className='font-bold md:text-3xl text-2xl'>6. Changes to This Privacy Policy</h1>
                            <p className='text-lg ml-8'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Site and App.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy