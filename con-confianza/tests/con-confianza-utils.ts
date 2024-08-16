import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { LoanTaken, PaymentMade } from "../generated/ConConfianza/ConConfianza"

export function createLoanTakenEvent(
  borrower: Address,
  amount: BigInt,
  interestRate: BigInt,
  totalRepayment: BigInt,
  monthlyInstallment: BigInt,
  duration: BigInt,
  startTime: BigInt,
  nextPaymentDue: BigInt,
  paidAmount: BigInt
): LoanTaken {
  let loanTakenEvent = changetype<LoanTaken>(newMockEvent())

  loanTakenEvent.parameters = new Array()

  loanTakenEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "totalRepayment",
      ethereum.Value.fromUnsignedBigInt(totalRepayment)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "monthlyInstallment",
      ethereum.Value.fromUnsignedBigInt(monthlyInstallment)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "nextPaymentDue",
      ethereum.Value.fromUnsignedBigInt(nextPaymentDue)
    )
  )
  loanTakenEvent.parameters.push(
    new ethereum.EventParam(
      "paidAmount",
      ethereum.Value.fromUnsignedBigInt(paidAmount)
    )
  )

  return loanTakenEvent
}

export function createPaymentMadeEvent(
  borrower: Address,
  amount: BigInt
): PaymentMade {
  let paymentMadeEvent = changetype<PaymentMade>(newMockEvent())

  paymentMadeEvent.parameters = new Array()

  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paymentMadeEvent
}
