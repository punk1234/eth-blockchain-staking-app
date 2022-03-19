// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RewardsSystem {

    uint totalSupply;
    IERC20 allowedToken;

    struct TokenInfo {
        uint value;
        uint lastRewardSentAt;
        bool exists;
    }

    mapping(address => TokenInfo) accountsStakedTokens;

    constructor(address _allowedTokenAddress) {
        allowedToken = IERC20(_allowedTokenAddress);
    }

    function stake(uint _amount) public {
        require(_amount > 0, "Amount must be greater than zero!!!");

        uint transferAmount = _amount;

        TokenInfo memory currentTokenInfo = accountsStakedTokens[msg.sender];
        allowedToken.transferFrom(msg.sender, address(this), transferAmount);

        accountsStakedTokens[msg.sender] = TokenInfo(
            currentTokenInfo.exists ? (_amount + currentTokenInfo.value) : _amount,
            block.timestamp,
            true
        );

        totalSupply += _amount;
    }

    function withdraw(uint _amount) public {
        require(_amount > 0, "Amount must be greater than zero!!!");
        require(_amount <= accountsStakedTokens[msg.sender].value, "Withdrawal amount exceeds balance!!!");

        allowedToken.transfer(msg.sender, _amount);
        TokenInfo memory currentTokenInfo = accountsStakedTokens[msg.sender];

        accountsStakedTokens[msg.sender] = TokenInfo(
            currentTokenInfo.value - _amount,
            currentTokenInfo.lastRewardSentAt,
            true
        );

        totalSupply -= _amount;
    }

    function claimReward() public returns (uint) {
        TokenInfo memory currentTokenInfo = accountsStakedTokens[msg.sender];

        require(currentTokenInfo.exists, "Account has not staked any token!!!");
        require((
            currentTokenInfo.lastRewardSentAt + 1 weeks) < block.timestamp,
            "Cannot withdraw currently!!!"
        );

        uint reward = currentTokenInfo.value / 100;
        totalSupply += reward;

        accountsStakedTokens[msg.sender] = TokenInfo(
            currentTokenInfo.value,
            block.timestamp,
            true
        );

        allowedToken.transfer(msg.sender, reward);
        return reward;
    }

    function getStakedTokens() public view returns (uint) {
        TokenInfo memory currentTokenInfo = accountsStakedTokens[msg.sender];

        require(currentTokenInfo.exists, "Account has not staked any token!!!");
        return currentTokenInfo.value;
    }

}