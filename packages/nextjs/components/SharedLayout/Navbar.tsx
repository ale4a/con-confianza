"use client";

import React from "react";

// import LanguageSwitcher from '../Global/LanguageSwitcher';
// import AccountConnect from "../layout/header/AccountConnect";
// import { BlackCreateWalletButton } from "../layout/header/BlackCreateWalletButton";
// import { useAccount } from "wagmi";

function Navbar() {
  // const { address } = useAccount();
  return (
    <div className="flex h-full items-center justify-between text-black">
      <div className="w-1/6 px-10 text-3xl text-urbanist">Welcome!</div>
      <div className="flex items-center justify-center gap-2 px-10">
        {/* <LanguageSwitcher /> */}
        {/* {!address && <BlackCreateWalletButton />} */}
        {/* <AccountConnect /> */}
      </div>
    </div>
  );
}

export default Navbar;
