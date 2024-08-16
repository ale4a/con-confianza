"use client";

import { Button } from "@nextui-org/react";

type RequestLoanButtonProps = {
  amount: string;
  duration: number;
};

const RequestLoanButton = ({ amount, duration }: RequestLoanButtonProps) => {
  console.log(amount, duration);
  return (
    <div>
      <Button
        onClick={() => {
          console.log("res");
        }}
      >
        REQUEST LOAN
      </Button>
    </div>
  );
};

export default RequestLoanButton;
