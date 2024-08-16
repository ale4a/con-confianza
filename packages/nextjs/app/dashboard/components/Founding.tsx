import React from "react";

type ISquarePosition = {
  title: string;
  description: string;
  subtitle: string;
};
function SquarePosition({ title, description, subtitle }: ISquarePosition) {
  return (
    <div className="flex w-full flex-col justify-center px-10">
      <span className="text-2xl text-[#3268FF]">{title}</span>
      <span className="text-xl text-[#14BE77]">{description}</span>
      <span className="text-base text-gray-400">{subtitle}</span>
    </div>
  );
}
function Founding() {
  return (
    <div className="flex h-1/2 flex-col items-center justify-between bg-white text-black">
      <div className="flex h-1/2 w-full">
        <SquarePosition title="Total Funding Received" description="$0.00" subtitle="from last months" />
        <SquarePosition title="Cuotas" description="0/0" subtitle="from last week" />
      </div>
      <div className=" flex h-1/2 w-full">
        <SquarePosition title="Total Payment" description="$0" subtitle="0% of interest" />
        <SquarePosition title="Pay day" description="$-" subtitle="Next payment day" />
      </div>
    </div>
  );
}

export default Founding;
