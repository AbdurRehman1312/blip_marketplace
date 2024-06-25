import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blip Marketplace | Terms of Service",
    description: "Blip Marketplace's Terms of Service page. Learn more about our terms and conditions."
};
const TermsServices = () => {
  return (
    <>
      <section>
        <div className="bg_contact md:h-[60vh] lg:mt-10 mt-24 h-[40vh]"></div>
        <div className="md:container md:mx-auto px-4 md:px-20 pb-16">
          <div className="md:mt-[-120px] mt-[-60px] flex md:flex-row flex-col justify-start md:gap-3 gap-10">
            <div className="md:w-[45%] w-full flex flex-col md:items-start items-center gap-6">
              <h1 className="uppercase tracking-[8px] font-semibold text-lg">
                TERMS OF SERVICE
              </h1>
              <h1 className="capitalize font-bold md:text-4xl text-3xl text-center sm:text-left">
                Effective Date: June 20th 2024
              </h1>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-8">
            <p className="text-lg text-center px-2">
              These Terms of Service ("Terms") govern your use of the services
              provided by Blip Delivery Inc. ("Blip," "we," "us," or "our") via
              our mobile application ("App") and website ("Site"). By accessing
              or using our services, you agree to be bound by these Terms.
            </p>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">
                1. Use of Services
              </h1>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Eligibility:
                </h1>
                <p className="text-lg">
                  You must be at least 18 years old to use our services.
                </p>
              </div>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Account Registration:
                </h1>
                <p className="text-lg">
                  You must register for an account to use our services. You
                  agree to provide accurate and complete information during the
                  registration process.
                </p>
              </div>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Account Security:
                </h1>
                <p className="text-lg">
                  You are responsible for maintaining the confidentiality of
                  your account and password and for restricting access to your
                  device. You agree to accept responsibility for all activities
                  that occur under your account.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">2. Services</h1>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Service Description:
                </h1>
                <p className="text-lg">
                  Blip provides on-demand drone delivery services. Our services
                  are available in select locations.
                </p>
              </div>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Service Limitations:
                </h1>
                <p className="text-lg">
                  Blip does not provide services for life-threatening
                  emergencies. For such emergencies, please call 911. Blip
                  provides unlimited drone deployments only for select
                  locations.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">3. Payments</h1>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Payment Terms:
                </h1>
                <p className="text-lg">
                  You agree to pay all charges incurred by you or on your behalf
                  through our App and Site, at the prices in effect when such
                  charges are incurred.
                </p>
              </div>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  Subscription Services:
                </h1>
                <p className="text-lg">
                  We offer subscription services for instant drone deployment.
                  Subscription fees are billed on a monthly basis and are
                  non-refundable.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">
                4. User Conduct
              </h1>
              <div className="ml-8 flex flex-col gap-2">
                <h1 className="font-semibold md:text-2xl text-xl ">
                  You agree not to:
                </h1>
                <p className="text-lg">
                  Use our services for any unlawful purpose. Interfere with or
                  disrupt the integrity or performance of our services. Attempt
                  to gain unauthorized access to our services or related
                  systems.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">5. Termination</h1>
              <p className="text-lg ml-8">
                We may terminate or suspend your account and access to our
                services immediately, without prior notice or liability, for any
                reason, including if you breach these Terms.
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">
                6. Limitation of Liability
              </h1>
              <p className="text-lg ml-8">
                To the maximum extent permitted by law, Blip shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly.
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">
                7. Changes to Terms
              </h1>
              <p className="text-lg ml-8">
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on our Site
                and App.
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">
                8. Governing Law
              </h1>
              <p className="text-lg ml-8">
                These Terms shall be governed by and construed in accordance
                with the laws of the state of California, without regard to its
                conflict of law principles.
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="font-bold md:text-3xl text-2xl">9. Contact Us</h1>
              <p className="text-lg ml-8">
                If you have any questions about these Terms, please contact us
                at{" "}
                <Link href={"/"} className="font-medium hover:underline">
                  help@blip.delivery{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsServices;
