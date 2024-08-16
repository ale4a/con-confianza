"use client";

import React from "react";
// import SharedLayout from '@/components/SharedLayout';
import Header from "./components/Header";
import LoansTable from "./components/LoansTable";
// import { Button } from "@nextui-org/react";
import SharedLayout from "~~/components/SharedLayout";

const loansData = [
  {
    payment: "1st payment",
    mount: "17.00",
    date: "04/09/2024",
    status: "pay",
  },
  {
    payment: "2st payment",
    mount: "17.00",
    date: "04/10/2024",
    status: "pending",
  },
  {
    payment: "3st payment",
    mount: "17.00",
    date: "04/11/2024",
    status: "pending",
  },
];

const page = () => {
  return (
    <SharedLayout>
      <div className="h-5/6 p-10 text-black">
        <div className="px-10 pb-12 pt-4">
          <span className="text-4xl text-information">My loans</span>
        </div>
        {loansData.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center bg-white py-16 ">
            <div className="border-rad flex w-2/5 flex-col gap-4 rounded-lg border-1 border-[#5A88EE] bg-white p-10">
              <p className="text-center">AT THE MOMENT YOU DO NOT HAVE ANY LOAN, APPLY FOR ONE NOW.</p>
              {/* <Button color="primary" className="py-7 text-black" radius="full">
                SOLICITAR UN PRESTAMO
              </Button> */}
            </div>
          </div>
        ) : (
          <>
            <Header />
            <LoansTable data={loansData} />
          </>
        )}
      </div>
    </SharedLayout>
  );
};

export default page;
