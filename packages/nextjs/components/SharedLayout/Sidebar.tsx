"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AndesFinanceLogo from "../Global/AndesFinanceLogo";

const links = [
  {
    href: "/dashboard",
    src: "/images/dashboard.svg",
    title: "Dashboard",
  },
  {
    href: "/loans",
    src: "/images/loans.svg",
    title: "Loans",
  },
  // {
  //   href: "/courses",
  //   src: "/images/courses.svg",
  //   title: "Courses",
  // },
];
const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <>
      <Link href="/" className="flex items-center justify-center rounded py-2.5 text-white no-underline">
        {/* <span className="text-2xl font-extrabold">Andes</span>
        <Image src="/images/logo-yellow.svg" alt="quests" width={24} height={24} className="mx-1" />
        <span className="text-2xl font-extralight text-[#19CD5F]">Finance</span> */}
        <AndesFinanceLogo />
      </Link>
      <div className="flex-grow">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`my-1 mr-8 flex flex-row items-center rounded-r-full p-4 no-underline transition duration-200 hover:bg-[#98B3FF] hover:bg-opacity-30 hover:text-white ${
              selected === link.href ? "bg-[#98B3FF] bg-opacity-30 text-white" : "text-white"
            }`}
          >
            <Image src={link.src} alt={link.title} width={24} height={24} className="ml-4" />
            <span className="px-4">{link.title}</span>
          </Link>
        ))}
      </div>
      {/* <div className="mt-auto">
        <div className="mt-4">
          <Link
            href="/help"
            className={`my-1 mr-8 flex flex-row items-center rounded-r-full p-4 no-underline transition duration-200 hover:bg-[#98B3FF] hover:bg-opacity-30 hover:text-white ${
              selected === "/help" ? "bg-[#98B3FF] bg-opacity-30 text-white" : "text-white"
            }`}
          >
            <Image src="/images/help.svg" alt="quests" width={24} height={24} className="ml-4" />
            <span className="px-4">Help</span>
          </Link>
          <Link
            href="/settings"
            className={`my-1 mr-8 flex flex-row items-center rounded-r-full p-4 no-underline transition duration-200 hover:bg-[#98B3FF] hover:bg-opacity-30 hover:text-white ${
              selected === "/settings" ? "bg-[#98B3FF] bg-opacity-30 text-white" : "text-white"
            }`}
          >
            <Image src="/images/settings.svg" alt="quests" width={24} height={24} className="ml-4" />
            <span className="px-4">Settings</span>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
