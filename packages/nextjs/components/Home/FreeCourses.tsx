import React from "react";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

function FreeCourses() {
  const cards = [
    {
      title: `Defi`,
      description: `Choose from a variety of courses those that are relevant to your profile.`,
    },
    {
      title: `Base`,
      description: `Learn about the blockchain that is revolutionizing the crypto world`,
    },
    {
      title: `Web`,
      description: `learn the basic concepts of web3 and blockchain`,
    },
  ];

  return (
    <div className="flex bg-[#EEF2FF] px-10 py-24 text-black">
      <div className="text-bold flex w-1/2 flex-col gap-10  px-4 py-10">
        <span className="font-urbanist text-xl">Do you need to learn more?</span>
        <h1 className="w-full font-urbanist text-6xl">Let´s start with free courses</h1>
        <span className="mt-4 w-full font-urbanist text-xl text-gray-400">
          Choose from a variety of courses those that are relevant to your profile.
        </span>
      </div>

      <div className="flex w-1/2 space-x-8 overflow-x-auto px-4 py-8">
        {cards.map((card, index) => (
          <Card key={index} className="w-2/3 flex-shrink-0 gap-4 px-10 py-10">
            <CardHeader className="z-0 flex flex-col items-start gap-2">
              <Image src="/images/home/briefcase-alt.svg" width={50} height={50} alt="icon" className="block" />
              <h4 className="text-3xl font-bold">{card.title}</h4>
            </CardHeader>
            <CardBody className="mb-4">
              <p>{card.description}</p>
            </CardBody>
            <Button className="flex w-1 items-center justify-center rounded-full bg-primary py-6 text-center  text-white">
              <span className="mt-1 text-2xl text-black">↗</span>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FreeCourses;
