"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { Address } from "viem";
import { useAccount, useConfig } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type RequestLoanButtonProps = {
  amount: number;
  duration: number;
};

const CON_CONFIANZA_CONTRACT = "ConConfianza";

const RequestLoanButton = ({ amount, duration }: RequestLoanButtonProps) => {
  console.log({ amount, duration });
  const { address } = useAccount();
  const config = useConfig();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  const { writeContractAsync } = useScaffoldWriteContract(CON_CONFIANZA_CONTRACT, {
    config: config,
  });

  // const { data: callID, writeContracts } = useWriteContracts();
  // const contract = useInstallmentLoanContract();

  // if (contract.status !== 'ready') {
  //   console.error('Contract is not ready');
  //   return null;
  // }

  const handleRequestLoan = async () => {
    console.log("amount", amount, "duration", duration);
    // onOpen();

    await writeContractAsync(
      {
        functionName: "takeLoan",
        args: [amount, duration],
        account: address,
      } as never,
      {
        onSuccess: async (txnReceipt: Address) => {
          console.log("📦 Transaction blockHash", txnReceipt);
          onOpen();
          router.push("/dashboard/quests", { scroll: false });
        },
      },
    );
  };
  const handleClose = () => {
    onClose();
    router.push("/loans");
  };
  return (
    <div>
      <Button onClick={handleRequestLoan}>REQUEST LOAN</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className="text-black"
        classNames={{ closeButton: "text-primary font-bold text-3xl" }}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col items-center gap-5 py-12">
                <Image src="/images/check.svg" width={50} height={50} alt="check" />
                <span className="text-center text-3xl text-[#1744F9]">¡Ya desembolsamos tu préstamo!</span>
              </ModalHeader>
              <ModalBody className="px-20 ">
                <p className="text-center">Podrás ver el detalle</p>
              </ModalBody>
              <ModalFooter className="flex justify-center py-12">
                <Button color="primary" onPress={onClose} className="px-8 py-6 text-black" radius="full">
                  ACEPTAR
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RequestLoanButton;
