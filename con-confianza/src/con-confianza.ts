import { BigInt } from "@graphprotocol/graph-ts"
import {
  LoanTaken as LoanTakenEvent,
  PaymentMade as PaymentMadeEvent
} from "../generated/ConConfianza/ConConfianza"
import { LoanTaken, PaymentMade } from "../generated/schema"

export function handleLoanTaken(event: LoanTakenEvent): void {
  let entity = new LoanTaken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.amount = event.params.amount
  entity.interestRate = event.params.interestRate
  entity.totalRepayment = event.params.totalRepayment
  entity.monthlyInstallment = event.params.monthlyInstallment
  entity.duration = event.params.duration
  entity.startTime = event.params.startTime
  entity.nextPaymentDue = event.params.nextPaymentDue
  entity.paidAmount = event.params.paidAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMade(event: PaymentMadeEvent): void {
  let entity = new PaymentMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let loan = LoanTaken.load(event.params.borrower)
  if (loan) {
    loan.totalRepayment = loan.totalRepayment.minus(event.params.amount)
    loan.paidAmount = loan.paidAmount.plus(event.params.amount)
    
    // Update nextPaymentDue
    if (loan.nextPaymentDue) {
      // Add 30 days (in seconds) to the current nextPaymentDue
      loan.nextPaymentDue = (loan.nextPaymentDue.plus(BigInt.fromI32(30 * 24 * 60 * 60)))
    } else {
      // If nextPaymentDue is not set, set it to 30 days from now
      loan.nextPaymentDue = (event.block.timestamp.plus(BigInt.fromI32(30 * 24 * 60 * 60)))
    }

    loan.save()
  }

  entity.save()
}
