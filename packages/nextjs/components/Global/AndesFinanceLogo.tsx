import React from "react";

// [#3268FF] blue
// [#40E891] green
function AndesFinanceLogo({ theme = "dark" }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return (
      <div className="flex items-center space-x-3 ">
        <span className=" text-white -mr-3 text-3xl font-bold font-sans bg-[#3268FF] px-2 py-1.5 ">CON</span>
        <span className="font-bold text-[#3268FF] text-2xl font-sans border-2 border-solid border-[#3268FF] px-2 py-1.5">
          CONFIANZA
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center space-x-3 ">
        <span className=" text-[#3268FF] -mr-3 text-3xl font-bold font-sans bg-white px-2 py-1.5 ">CON</span>
        <span className="font-bold text-white text-2xl font-sans  px-2 py-1.5 border-2 border-solid border-white">
          CONFIANZA
        </span>
      </div>
    );
  }
}

export default AndesFinanceLogo;
