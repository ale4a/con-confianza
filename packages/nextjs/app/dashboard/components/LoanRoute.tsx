"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";

// import { useGame } from '@/components/Global/GameProvider';

const challenges = [
  // {
  //   number: "01",
  //   title: "OPEN OR CONNECT YOUR ACCOUNT",
  //   subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   status: "no-done",
  //   link: "/dashboard/challenge/01",
  // },
  // {
  //   number: "02",
  //   title: "ABRE UNA CUENTA FARCASTER",
  //   subtitle: "Y conecta con coinbase",
  //   status: "no-done",
  //   link: "/dashboard/challenge/02",
  //   challenges: [
  //     {
  //       title: "RETO 2: Abre o conecta tu cuenta Farcaster",
  //       description: "Conectala con Coinbase",
  //       label: "USUARIO DE farcaster",
  //       input: "Escribe aquí tu usuario Farcaster",
  //     },
  //   ],
  // },
  // {
  //   number: "03",
  //   title: "AHORRA DURANTE 3 SEMANAS",
  //   subtitle: "Y conecta con coinbase",
  //   status: "coming",
  //   link: "/dashboard/challenge/03",
  //   challenges: [
  //     {
  //       title: "RETO 3: Ahorra 2 USD por una semana",
  //       description: "Conectala con Coinbase",
  //       label: "link de TRANSACCIÓN",
  //       input: "Pega aquí el link de la transacción",
  //     },
  //   ],
  // },
  // {
  //   number: "04",
  //   title: "HAZ UNA TRANSFERENCIA SENCILLA",
  //   subtitle: "Y conecta con coinbase",
  //   status: "coming",
  //   link: "/dashboard/challenge/04",
  //   challenges: [
  //     {
  //       title: "RETO 4: Haz un swap de 1 USDC A Optimism",
  //       description: "Conectala con Coinbase",
  //       label: "link de TRANSACCIÓN",
  //       input: "Pega aquí el link de la transacción",
  //     },
  //   ],
  // },
  {
    number: "01",
    title: "GET YOUR LOAN",
    subtitle: "Choose how much you want us to lend you and in how much time.",
    status: "no-done",
    link: "/dashboard/loan",
  },
];

function LoanRoute() {
  const router = useRouter();
  const gameState = 1;
  return (
    <div className="h-full bg-white p-10">
      <h1 className="pb-2 text-3xl text-[#3268FF]">Start the route to request your loan!</h1>
      {/* <span className="text-gray-400">Completa estos 4 retos durante 4 semanas</span> */}
      <Table aria-label="Example static collection table" hideHeader removeWrapper className="mt-10">
        <TableHeader>
          <TableColumn className="text-black">
            <Image src="/images/circle.svg" width={100} height={100} alt="circle" />
          </TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody className="">
          {challenges.map((challenge, index) => {
            return (
              <TableRow key={index} className=" text-black">
                <TableCell>
                  <div className="relative inline-block h-10 w-10">
                    {gameState === index + 1 ? (
                      <Image
                        src="/images/circle.svg"
                        width={150}
                        height={150}
                        alt="circle"
                        className={gameState < index + 1 ? "opacity-25" : "opacity-100"}
                      />
                    ) : (
                      <Badge
                        content={
                          <Image
                            src={gameState > index + 1 ? "/images/check-green.svg" : "/images/lock.svg"}
                            width={15}
                            height={15}
                            alt="status"
                          />
                        }
                        className="bg-transparent"
                        shape="circle"
                        showOutline={false}
                      >
                        <Image
                          src="/images/circle.svg"
                          width={150}
                          height={150}
                          alt="circle"
                          className={gameState < index + 1 ? "opacity-25" : "opacity-100"}
                        />
                      </Badge>
                    )}

                    <span
                      className={`absolute inset-0 z-10 flex items-center justify-center  ${
                        gameState > index ? "text-white" : "text-[#8AA9FF]"
                      }`}
                    >
                      {challenge.number}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-bold">{challenge.title}</p>
                  <p className="text-xs text-gray-400">{challenge.subtitle}</p>
                </TableCell>
                <TableCell className="w-full my-12 flex  items-center justify-center ">
                  {gameState > index + 1 ? (
                    <span className="text-center text-sm text-success">Sent and approved</span>
                  ) : gameState === index + 1 ? (
                    <Button
                      radius="full"
                      color="primary"
                      onClick={() => {
                        router.push(challenge.link);
                      }}
                    >
                      Apply for loan
                    </Button>
                  ) : (
                    <></>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default LoanRoute;
