module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",  // Локальная сеть
        port: 8545,         // Порт по умолчанию для Ganache
        network_id: "*"     // Любая сеть
      },
      rinkeby: {
        provider: () =>
          new HDWalletProvider(
            process.env.MNEMONIC,
            `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
          ),
        network_id: 4,       // Rinkeby network ID
        gas: 5500000,        // Максимальный газ
        confirmations: 2,    // Подтверждения перед майнингом
        timeoutBlocks: 200,  // Тайм-аут для блоков
        skipDryRun: true
      }
    },
    compilers: {
      solc: {
        version: "0.8.0",    // Убедитесь, что версия соответствует версии ваших контрактов
      }
    }
  };
  