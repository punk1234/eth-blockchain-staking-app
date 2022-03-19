// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakeRewardToken is ERC20, Ownable {

    struct SRTInfo {
        uint value;
        uint lastRewardSentAt;
    }

    uint ethToSrtBuyRate = 500;

    mapping(address => uint) stakedTokens;

    constructor() ERC20("Stake Reward Token", "SRT") {
        _mint(msg.sender, 1000 * (10 ** decimals()));
    }

    function modifyTokenBuyPrice(uint _newBuyPrice) public onlyOwner {
        ethToSrtBuyRate = _newBuyPrice;
    }

    function getTokenBuyPrice() public view returns(uint) {
        return ethToSrtBuyRate;
    }

    function buyToken() public payable returns (uint) {
        require(msg.value > 0, "Ethers needed!!!");

        uint srtValue = msg.value * ethToSrtBuyRate;
        _mint(msg.sender, srtValue);

        return srtValue;
    }

}