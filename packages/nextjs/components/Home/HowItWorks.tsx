"use client";

import React from "react";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-success px-10 py-28 text-white">
      <div className="container mx-auto">
        <h2 className="mb-20 text-6xl font-medium">How it works?</h2>
        <div className="flex flex-wrap justify-around">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/money-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="mb-4 rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Start your financial path</h3>
              <p className="text-left">Start building your credit history on blockchain and acquire loans.</p>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/money-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Learn for free</h3>
              <p className="text-left">Learn basic decentralized finance courses and acquire your first crypto loan.</p>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <Image
              src="/images/home/challenges-bg-blue.svg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Take challenges</h3>
              <p className="text-left">Unlock challenges every week as you learn and get a loan</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/4">
            <Image src="/images/home/loan-bg-blue.svg" alt="Hero Image" width={80} height={80} className="rounded-lg" />
            <div className="w-60">
              <h3 className="my-6 text-left text-2xl font-bold">Get your loan</h3>
              <p className="text-left">Get your first crypto loan and build history</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
