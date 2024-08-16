# Pepe Lending with L1SLOAD

![Descripción de la imagen](./pepe.png)

## Project Description

**Pepe Lending** is a decentralized finance (DeFi) platform designed to provide microloans without the need for collateral. Think of it as a decentralized version of Mercado Pago, enabling users to request and offer small loans through smart contract technology. Our proposal eliminates the collateral requirement by leveraging blockchain technology, specifically using `L1SLOAD` from Scroll, ensuring a more accessible and scalable solution.

### Key Features

1. **Decentralized Microloans**: Users can request and offer small loans without traditional intermediaries, making the process more inclusive.
2. **Elimination of Collateral Requirement**: Utilizing `L1SLOAD` and blockchain technology, we remove the need for collateral, making microloans accessible to more people.
3. **Qualification Criteria**: To qualify for a microloan without collateral, users must have repaid a $1000 loan at least one year prior. This criterion helps assess creditworthiness without traditional collateral.
4. **Variable Interest Rates**: Interest rates are dynamically adjusted based on a mapping of loans conducted on Layer 1, reflecting the user’s loan history and repayment behavior.

![Descripción de la imagen](./L1SLOAD.JPG)

### Business Model

- **How to Qualify for a Microloan Without Collateral**:
  - Users must have completed the repayment of a $1000 loan at least one year ago to qualify for a new microloan without collateral.
- **Variable Interest Rates**:
  - Rates are determined based on a comprehensive mapping of previous loans on Layer 1, ensuring that rates are aligned with the user’s financial behavior.

### System Architecture

1. **L1 Microloan Contract**:

   - **Data Storage**: Manages loan information, including requests and lender details.
   - **Functions**: Allows users to request a loan, approve a loan, and check loan statuses.

2. **L2 Interaction Contract**:
   - **Data Reading and Writing**: Uses `L1SLOAD` to interact with the L1 contract from Layer 2.
   - **Integration with Scroll**: Integrates with Scroll to perform operations efficiently on Layer 2.

### Usage

1. **Interact with the L1 Contract**

   Use the provided interface in the L2 contract to request, approve, or repay loans.

2. **Check Loan Status**

   Utilize the functions `requestLoan`, `approveLoan`, and `repayLoan` to interact with the Layer 1 contract.

### Contract Addresses

- **L1 DeFi Contract Address**: `0x2F9E82A0f7003D33A0534871b8d05FF5eB6ab2d9`
- **L2 Loan Contract Address**: `0x2C715079c01F32595A4C97e88C1e376554C71366`
- **USDC Contract Address**: `0x8590bD18FdB00F62c644c3a4288d1Dceb41eaE41`

![Descripción de la imagen](./pepeLogo.png)
