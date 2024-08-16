import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { LoanTaken } from "../generated/schema"
import { LoanTaken as LoanTakenEvent } from "../generated/ConConfianza/ConConfianza"
import { handleLoanTaken } from "../src/con-confianza"
import { createLoanTakenEvent } from "./con-confianza-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let interestRate = BigInt.fromI32(234)
    let totalRepayment = BigInt.fromI32(234)
    let monthlyInstallment = BigInt.fromI32(234)
    let duration = BigInt.fromI32(234)
    let startTime = BigInt.fromI32(234)
    let nextPaymentDue = BigInt.fromI32(234)
    let paidAmount = BigInt.fromI32(234)
    let newLoanTakenEvent = createLoanTakenEvent(
      borrower,
      amount,
      interestRate,
      totalRepayment,
      monthlyInstallment,
      duration,
      startTime,
      nextPaymentDue,
      paidAmount
    )
    handleLoanTaken(newLoanTakenEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LoanTaken created and stored", () => {
    assert.entityCount("LoanTaken", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrower",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestRate",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalRepayment",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "monthlyInstallment",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "duration",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nextPaymentDue",
      "234"
    )
    assert.fieldEquals(
      "LoanTaken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "paidAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
