"use client";

import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

const GetStarted: React.FC = () => {
  // const defaultContent =
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <section className="bg-information mx-auto px-20 text-white pt-28">
      {/* <section className="container mx-auto px-10 pt-28"> */}
      <div className="container flex flex-wrap items-center justify-center">
        <div className="w-full  md:w-1/2">
          <h2 className="mb-20 text-6xl font-medium text-white">How to start?</h2>
          <p className="mb-8 w-3/4 text-lg text-white">
            To obtain a loan with us you must complete 4 challenges in 4 weeks. And if you are new, don t worry, we have
            totally free courses for you.
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute  left-52 -z-10 flex h-96 w-96 flex-col items-center justify-center rounded-full bg-[#FFD028] p-10 text-left">
              <span className="w-3/4 pl-4 text-2xl text-black">
                Sign up now and get your first credit with a $10 bonus!
              </span>
              <span className="w-3/4 pl-4  text-2xl font-bold text-black" />
            </div>
            <div className="z-20">
              <Image
                src="/images/home/pepe3.png"
                alt="Hero Image"
                width={300}
                height={300}
                className="relative -bottom-10 left-10 z-0 -ml-10"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={<span className="text-xl font-medium">Connect or open your first crypto wallet</span>}
              startContent={<span className="mx-5 text-2xl font-medium text-information">01</span>}
              indicator={<Image src="/images/icons/array.svg" alt="array" width={80} height={80} />}
            >
              <div className="mx-5 -mt-3 mb-4">
                <span className="pb-4 text-white">
                  Do you want to get a crypto loan? Don t know where to start? The first step is to create a wallet..
                </span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={<span className="text-xl font-medium">Save crypto for 3 weeks</span>}
              startContent={<span className="mx-5 text-2xl font-medium text-information">02</span>}
              indicator={<Image src="/images/icons/array.svg" alt="array" width={80} height={80} />}
            >
              <div className="mx-5 -mt-3 mb-4">
                <span className="pb-4 text-white">
                  Do you want to get a crypto loan? Don t know where to start? The first step is to create a wallet..
                </span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={<span className="text-xl font-medium">Make an easy transfer/bridge</span>}
              startContent={<span className="mx-5 text-2xl font-medium text-information">03</span>}
              indicator={<Image src="/images/icons/array.svg" alt="array" width={80} height={80} />}
            >
              <div className="mx-5 -mt-3 mb-4">
                <span className="pb-4 text-white">
                  Do you want to get a crypto loan? Don t know where to start? The first step is to create a wallet..
                </span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title={<span className="text-xl font-medium">Transfer money to your wallet</span>}
              startContent={<span className="mx-5 text-2xl font-medium text-information">04</span>}
              indicator={<Image src="/images/icons/array.svg" alt="array" width={80} height={80} />}
            >
              <div className="mx-5 -mt-3 mb-4">
                <span className="pb-4 text-white">
                  Do you want to get a crypto loan? Don t know where to start? The first step is to create a wallet..
                </span>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
