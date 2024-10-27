// scripts/deployToken.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18); // 1,000,000 tokens with 18 decimals

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(initialSupply);

  await token.deployed();

  console.log("MyToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
