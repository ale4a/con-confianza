import React from "react";
import Score from "./Score";

function CreditScore() {
  return (
    <div className="flex h-1/2 flex-col items-center justify-around gap-2 bg-white px-10 py-2">
      <div className="w-full pt-2">
        <span className=" text-left text-3xl text-information">Credit Score |</span>
        <span className="text-3xl text-gray-500"> month</span>
      </div>
      <Score title="Normal" value={20} />
      {/* <span className=" text-center text-gray-500">
        The score goes from 1 to 1000, the closer to 1000, the better financing opportunities you will have.
      </span> */}
    </div>
  );
}

export default CreditScore;
