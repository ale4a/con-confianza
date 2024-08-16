import React from "react";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";

function InvestorInterest() {
  return (
    <div className="flex overflow-hidden bg-white px-28 py-2 text-black">
      <div className=" flex w-1/3 flex-col justify-center gap-10">
        <h1 className="font-urbanist text-7xl">Do you want to be an investor?</h1>
        <p className="font-urbanist text-lg text-gray-500">
          Leave us your information and we will contact you to tell you all the benefits of being an investor with us.
        </p>
      </div>
      <Image
        src="/images/home/investor-logo.png"
        width={500}
        height={500}
        alt="investor"
        className="relative bottom-0 right-10 w-1/3 translate-y-1/3 transform p-10"
      />
      <div className="flex w-1/3 flex-col justify-center gap-7 text-black">
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">NAMES AND SURNAMES</label>
          <Input
            key="outside"
            size="lg"
            type="email"
            color="primary"
            variant="bordered"
            labelPlacement="outside"
            className="w-ful text-black"
            placeholder={"Could your write your phone names?"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">EMAIL</label>
          <Input
            key="outside"
            size="lg"
            color="primary"
            variant="bordered"
            type="email"
            labelPlacement="outside"
            placeholder={"Could your write your phone email?"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="ml-6 text-sm">phone number</label>
          <Input
            key="outside"
            size="lg"
            type="email"
            color="primary"
            variant="bordered"
            labelPlacement="outside"
            className="w-ful text-black"
            placeholder="Could your write your phone number?"
          />
        </div>
        <Button className="flex w-1 items-center justify-center rounded-full bg-primary px-14 py-7 text-center  text-white">
          <span className="mt-1 font-urbanist text-base font-bold text-black">Send</span>
        </Button>
      </div>
    </div>
  );
}

export default InvestorInterest;
