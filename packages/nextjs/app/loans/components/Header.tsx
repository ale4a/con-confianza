"use client";

import React from "react";

function Header() {
  return (
    <div className="flex justify-between bg-[#E2EDF6] px-10 py-5">
      <div className="flex w-1/2 flex-col">
        <span className="text-sm">REQUEST DATE</span>
        <span className="font-urbanist text-2xl">04/08/2024</span>
      </div>
      <div className="flex w-1/2 justify-around">
        <div className="flex flex-col">
          <span>Borrow</span>
          <span className="text-xl text-primary">$50</span>
        </div>
        <div className="flex flex-col">
          <span>To Pay</span>
          <span className=" text-xl">$340</span>
        </div>
        <div className="flex flex-col">
          <span>Cuotas</span>
          <span className=" text-xl">3</span>
        </div>
        <div className="flex flex-col">
          <span>Interes</span>
          <span className=" text-xl">2%</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
