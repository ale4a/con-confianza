"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import RequestLoanButton from "./RequestLoanButton";
import { Divider, Input, Slider } from "@nextui-org/react";
import SharedLayout from "~~/components/SharedLayout";

const calculateFinalAmount = (amount: number): number => amount * 1.02;

interface Payment {
  date: string;
  amount: string;
}

const USD_MULT = 1000000;

const calculateMonthlyPayments = (finalAmount: number, duration: number): Payment[] => {
  const months = duration;
  return Array.from({ length: months }, (_, i) => ({
    date: new Date(new Date().setMonth(new Date().getMonth() + i + 1)).toLocaleDateString(),
    amount: (finalAmount / months).toFixed(2),
  }));
};

const Page = () => {
  const [amount, setAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [paymentDates, setPaymentDates] = useState<Payment[]>([]);

  useEffect(() => {
    const finalAmt = calculateFinalAmount(amount);
    setFinalAmount(finalAmt);
    setPaymentDates(calculateMonthlyPayments(finalAmt, duration));
  }, [amount, duration]);

  const handleDurationChange = (value: number | number[]) => {
    if (typeof value === "number") setDuration(value);
    else setDuration(value[0]);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (value > 10) value = 10;
    setAmount(value);
  };

  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        <div className="flex h-full p-14">
          <div className="flex w-full flex-col items-center justify-center bg-white px-20 text-black pb-8">
            <div className="w-full">
              <p className="text-4xl text-information">Disburse your loan</p>
            </div>
            <div className="flex h-1/2 w-full items-center justify-center text-black">
              <div className="mr-10 flex h-full w-full flex-col justify-center gap-8">
                <p>Please confirm this data first</p>
                <div className="flex w-full bg-stroke-2 px-10 py-2">
                  <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">min. 1 USDC</div>
                  <Input
                    type="number"
                    max={10}
                    min={1}
                    placeholder="0.0"
                    labelPlacement="outside"
                    value={amount + ""}
                    onChange={handleAmountChange}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-2xl font-bold text-primary ">USDC</span>
                      </div>
                    }
                    className=" w-2/3 px-10 text-4xl "
                    classNames={{ inputWrapper: "bg-white" }}
                    style={{
                      fontSize: "30px",
                      color: "#17D071",
                      fontWeight: "bolder",
                    }}
                  />
                  <div className="flex w-1/4 items-center justify-center text-sm text-gray-400">Max. 10 USDC</div>
                </div>
                <div className="mt-4 flex flex-col gap-2 mb-10">
                  <span>In how many months do you want to pay?</span>
                  <Slider
                    value={duration}
                    step={1}
                    maxValue={3}
                    minValue={1}
                    onChange={handleDurationChange}
                    marks={[
                      { value: 1, label: "1" },
                      { value: 2, label: "2" },
                      { value: 3, label: "3" },
                    ]}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="relative right-0 flex w-2/5 flex-col items-center justify-center gap-2 bg-information-active py-4">
                <div className="flex flex-col gap-1 text-center">
                  <p className="font-urbanist text-2xl text-white">Final Payment</p>
                  <p className="text-3xl font-bold text-white">{finalAmount.toFixed(2)} USDC</p>
                  <p className="font-urbanist text-sm text-white">Interest 2%</p>
                </div>
                <Divider className="bg-white" />
                <ul className="flex flex-col items-center justify-center">
                  <li className="font-bold text-white">Payment dates:</li>
                  {paymentDates.map((payment, index) => (
                    <li key={index} className="text-white">
                      {payment.date} - USDC {payment.amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" w-full my-10 flex gap-2 items-center">
              <div className="auto">
                <p> This is the variable collateral based on the history you built with us.</p>
                <div className="flex gap-2 items-center mb-6">
                  Collateral:
                  <div className="text-4xl text-center">{finalAmount != 0 ? finalAmount + 0.5 : 0} USDC</div>
                  In base in your credit score.
                </div>
                <RequestLoanButton amount={amount * USD_MULT} duration={duration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default Page;
