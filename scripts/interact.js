// scripts/interact.js
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; 
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.attach(contractAddress);

  // Read the current message
  let message = await hello.message();
  console.log("Current Message:", message);

  // Update the message
  const tx = await hello.setMessage("Hello, Blockchain!");
  await tx.wait();

  // Read the updated message
  message = await hello.message();
  console.log("Updated Message:", message);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });