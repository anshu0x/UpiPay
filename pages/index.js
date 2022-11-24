import Image from "next/image";
import React from "react";
import banner from "../assets/banner.webp";
import zerocharge from "../assets/zero.svg";
import collectPayments from "../assets/collectPayments.webp";
import Head from "next/head";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <Head>
        <title>UpiPay</title>
        <meta name="description" content="Collect Online Payments from anywhere in India. Create Payment Link Via Upi Pay Payment Links" />
        <meta property="og:title" content="Upi Pay Payment Links" />
        <meta property="og:description" content="Collect Online Payments from anywhere in India. Create Payment Link Via Upi Pay Payment Links" />
        <meta property="og:url" content="https://upipayy.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-10 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="inline-block title-font clear-both mt-0 mb-8 py-1 px-4 text-center bg-[#e6f7ff] rounded-xl">
              Upi Pay Payment Links
            </h1>
            <h1 className=" font-extrabold title-font sm:text-5xl text-3xl mb-4  text-gray-900">
              Collect Online Payments from anywhere in India.
            </h1>
            <h1 className=" font-extrabold leading-10 sm:text-5xl text-3xl mb-4 text-[#00b9f5]">
              No Coding Required.
            </h1>
            <Link
              className=" bg-[#002970] text-white cursor-pointer font-bold rounded-3xl	 inline-flex py-5 pl-12 pr-16 no-underline whitespace-no-wrap"
              href={'/genlink'}
            >
              Get Payment Link
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <Image
              alt="hero"
              src={banner}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font text-center">
        <h1 className="font-bold text-4xl text-black leading-10 my-4">
          Collect Payments in 3 Easy Steps
        </h1>
        <div className="container mx-auto gap-16 sm:gap-32 flex px-10 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              alt="hero"
              src={collectPayments}
            />
          </div>
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0295fc] inline-flex items-center justify-center text-white relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  Create Payment Link Via Upi Pay Dashboard
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0295fc] inline-flex items-center justify-center text-white relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                  Share Payment Link Through SMS, Email or WhatsApp
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0295fc] inline-flex items-center justify-center text-white relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                  Customer Makes Payment Using Preferred Payment Method
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font text-center">
        <div className="flex justify-center items-center w-full sm:max-w-6xl gap-16 flex-col rounded-3xl mx-auto mt-0 py-20 text-center bg-[#f2fbff]">
          <div className="font-bold flex flex-col text-2xl sm:text-4xl text-center text-black ">
            No Setup Fees, No Maintenance Charges
            <span className="font-bold text-2xl sm:text-4xl text-center text-black ">
              Grow Your Profits
            </span>
          </div>
          <div>
            <Image src={zerocharge} alt="zero charges" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
