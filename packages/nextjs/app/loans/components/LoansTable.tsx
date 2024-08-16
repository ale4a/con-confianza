"use client";

import React from "react";
import LoansModal from "./LoansModal";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

type ILoansTable = {
  payment: string;
  mount: string;
  date: string;
  status: string;
};

function LoansTable({ data }: { data: ILoansTable[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="bg-white px-10 py-4">
      <Table aria-label="Example static collection table" isCompact className="bg-white" removeWrapper>
        <TableHeader className="bg-transparent">
          <TableColumn className="bg-white font-urbanist text-lg text-information">PAYMENT</TableColumn>
          <TableColumn className="bg-white text-center font-urbanist text-lg text-information">
            MONTO DE CUOTA
          </TableColumn>
          <TableColumn className="bg-white text-center font-urbanist text-lg text-information">
            FECHA DE PAGO
          </TableColumn>
          <TableColumn className="bg-white text-center font-urbanist text-lg text-information">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-base">{item.payment}</TableCell>
                <TableCell className="text-center text-base">${item.mount}</TableCell>
                <TableCell className="text-center text-base">{item.date}</TableCell>
                <TableCell className="text-center text-base">
                  {item.status === "pay" && (
                    <Button radius="full" color="primary" className="text-black" onPress={onOpen}>
                      Pay
                    </Button>
                  )}
                  {item.status === "pending" && (
                    <Chip color="default" variant="dot" className="gap-1 border-none capitalize text-default-600">
                      Pending
                    </Chip>
                  )}
                  {item.status === "payed" && (
                    <Chip color="primary" variant="dot" className="gap-1 border-none capitalize text-primary">
                      Pagado
                    </Chip>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <LoansModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default LoansTable;
