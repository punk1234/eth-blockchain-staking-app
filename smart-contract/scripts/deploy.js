async function main() {

    /***********************************************************************
     ************************ DEPLOY PUNK-TOKEN ****************************
     ***********************************************************************/
    const StakeRewardToken = await ethers.getContractFactory("StakeRewardToken");
    const srtContract = await StakeRewardToken.deploy();

    console.log(`Contract address => ${srtContract.address}`);

    /***********************************************************************
     ************************ DEPLOY PUNK-TOKEN ****************************
     ***********************************************************************/
    const RewardsSystem = await ethers.getContractFactory("RewardsSystem");
    const rewardsSystemContract = await RewardsSystem.deploy(srtContract.address);
 
    console.log(`Contract address => ${rewardsSystemContract.address}`);
    
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1)
    });