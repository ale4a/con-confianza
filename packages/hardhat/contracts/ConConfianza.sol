// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

/**
 * @title InstallmentLoanContract
 * @dev Este contrato permite a los usuarios tomar préstamos y establecer pagos en cuotas.
 */
contract ConConfianza {
    using SafeERC20 for IERC20;
    using Address for address;
    uint256 constant NUMBER_SLOT = 0;

    struct Loan {
        uint256 amount;
        uint256 interestRate;
        uint256 totalRepayment;
        uint256 monthlyInstallment;
        uint256 duration;
        uint256 startTime;
        uint256 nextPaymentDue;
        uint256 paidAmount;
    }

    mapping(address => Loan) public loans;
    
    function getContractBalance(address addressL) external view returns (Loan memory) {
        return loans[addressL];
    }

    address public admin;
    IERC20 public stablecoin;

    event LoanTaken(address indexed borrower, uint256 amount, uint256 interestRate, uint256 totalRepayment, uint256 monthlyInstallment, uint256 duration, uint256 startTime, uint256 nextPaymentDue, uint256 paidAmount);
    event PaymentMade(address indexed borrower, uint256 amount);
    

    modifier onlyAdmin() {
        require(msg.sender == admin, "Caller is not the admin");
        _;
    }

    constructor(address stableCoinAddress) {
        admin = msg.sender;
        stablecoin = IERC20(stableCoinAddress); // Own USDC stablecoin
    }

    function getInterestRate(uint256 amountInUSDC) public pure returns (uint256) {
		// Check if the amount is between 1 USDC (1,000,000) and 10 USDC (10,000,000)
		require(amountInUSDC >= 1000000 && amountInUSDC <= 10000000, "Loan amount must be between 1 USDC and 10 USDC");

		// Base rate of 20% for all loans in this category
		uint256 baseRate = 20;

		// Additional rate based on the loan amount
		// Smaller loans get higher rates due to higher relative risk
		uint256 additionalRate;
		if (amountInUSDC <= 3000000) { // 1 to 3 USDC
			additionalRate = 10;
		} else if (amountInUSDC <= 7000000) { // 3.000001 to 7 USDC
			additionalRate = 5;
		} else { // 7.000001 to 10 USDC
			additionalRate = 2;
		}

		// Risk factor: increases rate for each USDC below 10 USDC
		uint256 riskFactor = (10000000 - amountInUSDC) / 1000000 * 5; // 0.5% per USDC below 10 USDC

		uint256 totalRatePercentage = baseRate + additionalRate + riskFactor;

		// Return the rate as a percentage with 2 decimal places (e.g., 2750 for 27.50%)
		return totalRatePercentage * 100;
	}

    /**
     * @notice Tomar un préstamo de la plataforma
     * @param _amount La cantidad de stablecoin a pedir prestado
     * @param _duration La duración del préstamo en meses
     */
    function takeLoan(uint256 _amount, uint256 _duration) external {
        uint256 INTEREST_RATE = getInterestRate(_amount);
        require(loans[msg.sender].amount == 0, "Existing loan must be repaid first");
        require(_amount > 0, "Loan amount must be greater than zero");
        require(_duration > 0 && _duration <= 12, "Loan duration must be between 1 and 12 months");

        uint256 totalRepayment = _amount + ((_amount * INTEREST_RATE * _duration) / 100);
        uint256 monthlyInstallment = totalRepayment / _duration;

        loans[msg.sender] = Loan({
            amount: _amount,
            interestRate: INTEREST_RATE,
            totalRepayment: totalRepayment,
            monthlyInstallment: monthlyInstallment,
            duration: _duration,
            startTime: block.timestamp,
            nextPaymentDue: block.timestamp + 30 days,
            paidAmount: 0
        });

        stablecoin.transfer(msg.sender, _amount);
        emit LoanTaken(msg.sender, _amount, INTEREST_RATE, totalRepayment, monthlyInstallment, _duration, block.timestamp, block.timestamp + 30 days, 0);
    }

    function approveContract(uint256 _amount) external {
        stablecoin.approve(address(this), _amount);
    }

    /**
     * @notice Hacer un pago del préstamo
     * @param _amount La cantidad a pagar
     */
    function makePayment(uint256 _amount) external {
        Loan storage loan = loans[msg.sender];
        require(loan.amount > 0, "No active loan found");
        require(_amount > 0, "Payment amount must be greater than zero");
        require(_amount <= loan.totalRepayment - loan.paidAmount, "Payment exceeds remaining balance");

        stablecoin.safeTransferFrom(msg.sender, address(this), _amount);

        loan.paidAmount += _amount;
        loan.nextPaymentDue += 30 days;

        if (loan.paidAmount >= loan.totalRepayment) {
            delete loans[msg.sender];
        }

        emit PaymentMade(msg.sender, _amount);
    }


    /**
     * @notice Obtener los detalles del préstamo de un prestatario
     * @param _borrower La dirección del prestatario
     * @return Detalles del préstamo del prestatario
     */
    function getLoanDetails(address _borrower) external view returns (Loan memory) {
        return loans[_borrower];
    }

    /**
     * @notice Retirar los stablecoins del contrato
     * @param _amount La cantidad de stablecoin a retirar
     */
    function withdrawStablecoin(uint256 _amount) external onlyAdmin {
        stablecoin.transfer(admin, _amount);
    }

    /**
     * @notice Obtener el saldo de stablecoins del contrato
     * @return El saldo de stablecoins del contrato
     */
    function getContractBalance() external view returns (uint256) {
        return stablecoin.balanceOf(address(this));
    }
}

