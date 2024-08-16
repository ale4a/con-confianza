import React from "react";
import Image from "next/image";

function AndesFinanceLogo() {
  return (
    <div className="flex items-center space-x-3">
      <Image src="/pepe.png" alt="Pepe Lending Logo" width={150} height={150} />
    </div>
  );
}

export default AndesFinanceLogo;
