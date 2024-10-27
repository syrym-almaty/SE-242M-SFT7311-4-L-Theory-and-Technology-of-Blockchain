async function main() {
  const [signer] = await ethers.getSigners(); // Получаем Signer

  const contractAddress = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266; // Укажите адрес вашего развернутого контракта
  const MyContract = await ethers.getContractFactory("MyContract"); // Убедитесь, что имя совпадает
  const myContract = await MyContract.attach(contractAddress); // Присоединяемся к контракту

  // Ваш код для взаимодействия с контрактом
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
