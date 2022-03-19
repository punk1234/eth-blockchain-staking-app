async function main() {

    /***********************************************************************
     ********************* DEPLOY STAKE-REWARD-TOKEN ***********************
     ***********************************************************************/
    // const StakeRewardToken = await ethers.getContractFactory("StakeRewardToken");
    // const srtContract = await StakeRewardToken.deploy();

    // console.log(`Contract address => ${srtContract.address}`);

    /***********************************************************************
     ****************** DEPLOY REWARDS-SYSTEM CONTRACT *********************
     ***********************************************************************/
    const RewardsSystem = await ethers.getContractFactory("RewardsSystem");
    const rewardsSystemContract = await RewardsSystem.deploy("0xF81d4486514F8c205898c3CA0B858832833C7a09");
 
    console.log(`Contract address => ${rewardsSystemContract.address}`);
    
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1)
    });