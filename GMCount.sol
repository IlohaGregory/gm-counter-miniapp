// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GMCount {
    uint256 public count = 0;

    event GMed(address indexed user);

    function gm() external {
        count += 1;
        emit GMed(msg.sender);
    }
}
