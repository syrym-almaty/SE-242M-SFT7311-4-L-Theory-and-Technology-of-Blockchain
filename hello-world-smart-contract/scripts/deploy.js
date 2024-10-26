async function main() {
  const [deployer] = await ethers.getSigners(); // Получаем Signer

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance(); // Проверяем баланс
  console.log("Account balance:", balance.toString());

  const MyContract = await ethers.getContractFactory("MyContract"); // Укажите имя вашего контракта
  const myContract = await MyContract.deploy(); // Развертывание контракта
  console.log("Contract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
