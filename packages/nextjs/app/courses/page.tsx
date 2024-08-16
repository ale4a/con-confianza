import React from "react";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import SharedLayout from "~~/components/SharedLayout";

const cards = [
  {
    title: "Defi",
    description:
      "Un curso de DeFi (Finanzas Descentralizadas) enseña los conceptos básicos de la tecnología blockchain, contratos inteligentes, y plataformas DeFi como intercambios descentralizados y yield farming. El objetivo es que los estudiantes comprendan y usen aplicaciones DeFi de manera segura y efectiva.",
  },
  {
    title: "Base",
    description:
      "Un curso sobre Base enseña cómo usar esta red blockchain, incluyendo la creación y uso de contratos inteligentes, la implementación de dApps, y las prácticas de seguridad necesarias para interactuar con la plataforma de manera efectiva.",
  },
  {
    title: "Web3",
    description:
      "Un curso de Web3 enseña los fundamentos de la web descentralizada, cubriendo blockchain, contratos inteligentes, dApps (aplicaciones descentralizadas) y protocolos de comunicación P2P. El objetivo es capacitar a los estudiantes para desarrollar y usar tecnologías Web3 de manera segura y eficiente.",
  },
];
const page = () => {
  return (
    <SharedLayout>
      <div className="h-5/6 p-10">
        <div className="px-10 pb-12 pt-4">
          <span className="font-urbanist text-4xl text-information">Courses</span>
        </div>
        <div className="flex space-x-8 overflow-x-auto px-4 pb-10">
          {cards.map((card, index) => (
            <Card key={index} className="h-100 flex w-1/3 flex-shrink-0 justify-around px-10 py-14">
              <CardHeader className="flex flex-col items-start justify-between gap-2 ">
                <Image src="/images/home/briefcase-alt.svg" width={50} height={50} alt="icon" className="block" />
                <h4 className="text-3xl font-bold">{card.title}</h4>
              </CardHeader>
              <CardBody className="mb-4">
                <p>{card.description}</p>
              </CardBody>
              <Button className="flex w-1/3 items-center justify-center rounded-none bg-[#FFD028] py-6 text-center  text-white">
                <span className="mt-1 text-xl text-black">Coming</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </SharedLayout>
  );
};

export default page;
