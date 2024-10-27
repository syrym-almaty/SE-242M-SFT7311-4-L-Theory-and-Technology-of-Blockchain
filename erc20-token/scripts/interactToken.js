const hre = require("hardhat");

async function main() {
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const token = await MyToken.attach(contractAddress);

    const [deployer] = await hre.ethers.getSigners();
    const balance = await token.balanceOf(deployer.address);
    console.log(`Initial Balance: ${hre.ethers.utils.formatUnits(balance, 18)} MTK`);

    const recipient = "RECIPIENT_ADDRESS";
    const transferAmount = hre.ethers.utils.parseUnits("1000", 18);

    const tx = await token.transfer(recipient, transferAmount);
    await tx.wait();

    const deployerBalance = await token.balanceOf(deployer.address);
    const recipientBalance = await token.balanceOf(recipient);
    console.log(`Deployer Balance: ${hre.ethers.utils.formatUnits(deployerBalance, 18)} MTK`);
    console.log(`Recipient Balance: ${hre.ethers.utils.formatUnits(recipientBalance, 18)} MTK`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
