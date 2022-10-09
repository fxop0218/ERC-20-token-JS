// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    // Initial supply need have exact decimals 10e18 == 1 eth
    constructor(uint256 initSupply) ERC20("SimpleToken", "ST") {
        _mint(msg.sender, initSupply);
    }
}
