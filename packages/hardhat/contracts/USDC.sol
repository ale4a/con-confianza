// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDC is ERC20, Ownable {
    uint8 private _decimals;

    constructor(uint256 initialSupply) ERC20("USD Coin", "USDC") Ownable() {
        _decimals = 6; // USDC typically uses 6 decimal places
        _mint(msg.sender, initialSupply * 10**_decimals);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}