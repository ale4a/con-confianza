"use client";

import Image from "next/image";

// import useWindowSize from '@/hooks/useWindowSize';

type IScore = {
  title: string;
  value: number;
};

function Score({ title, value }: IScore) {
  return (
    <div className="relative flex h-1/2 w-1/2 items-end justify-center ">
      <Image src="/images/score.svg" alt="quests" className="h-full w-full" fill />
      {/* TODO: FIX VALUE */}
      {/* <div
          className="absolute h-8 w-8 rounded-full border-2 border-white bg-black"
          style={{
            transform: `translateX(${xPosition}rem) translateY(${yPosition}rem)`,
          }}
        /> */}
      <div className="absolute flex flex-col items-center">
        <span className="mb-1  text-4xl font-semibold text-black">{value}</span>
        <span className="mb-1  text-lg font-semibold text-black">{title}</span>
      </div>
    </div>
  );
}

export default Score;
