// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./IEx14Solution.sol";
import "./ex14.sol";
import "../ERC20TD.sol";

contract Ex14Solution is IEx14Solution {
    ERC20TD public TDERC20;
    Ex14 public ex14;
    IEx14Solution public iex14Solution;

    constructor(ERC20TD _TDERC20, Ex14 _ex14) {
        TDERC20 = _TDERC20;
        ex14 = _ex14;
    }

    function completeWorkshop() external override {}

    function completeWorkshopInterface() external {
        // Call the completeWorkshop function on the Ex14 contract
        ex14.askForPoints();
    }
}
