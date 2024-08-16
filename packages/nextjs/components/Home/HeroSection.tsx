"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/dashboard");
  };
  return (
    <section className="bg-information px-10 text-white pt-10">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
        <div className="flex flex-col  mt-10 w-2/3">
          <p className="mb-6 text-sm">100% safe & reliable</p>
          <h1 className="mb-6 text-6xl font-medium">Get a loan while you are learning and playing.</h1>
          <Button onClick={handleStart} color="primary" className="text-black w-1/2 py-4" radius="full" size="lg">
            Lets start
          </Button>
        </div>
        <div className=" w-1/2">
          <Image
            src="/images/home/thinking_pepe.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="container mx-auto flex text-center">
        <div className="w-full md:w-1/2">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/b1k8RdF5u2g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-white p-8 shadow-lg md:w-1/2">
          <p className="mb-4 text-4xl text-black">
            We know that obtaining a loan is not easy, that is why we help you achieve your goals with microcredits.
          </p>
          <Button color="primary" variant="bordered" radius="full" className="font-urbanist text-black" size="lg">
            Calculate your loan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
