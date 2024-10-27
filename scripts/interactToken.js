// scripts/interactToken.js
const hre = require("hardhat");

async function main() {
  const contractAddress = "0xAbC12345eF6789abCDEF0123456789aBCdEF0123"; // Replace with actual address

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.attach(contractAddress);

  const [deployer, recipient] = await hre.ethers.getSigners();

  // Check initial balance of deployer
  let balance = await token.balanceOf(deployer.address);
  console.log(`Initial Balance of Deployer: ${hre.ethers.utils.formatUnits(balance, 18)} MTK`);

  // Transfer tokens to another account
  const transferAmount = hre.ethers.utils.parseUnits("1000", 18); // 1,000 MTK

  const tx = await token.transfer(recipient.address, transferAmount);
  await tx.wait();

  // Check balances after transfer
  const deployerBalance = await token.balanceOf(deployer.address);
  const recipientBalance = await token.balanceOf(recipient.address);
  console.log(`Deployer Balance: ${hre.ethers.utils.formatUnits(deployerBalance, 18)} MTK`);
  console.log(`Recipient Balance: ${hre.ethers.utils.formatUnits(recipientBalance, 18)} MTK`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
