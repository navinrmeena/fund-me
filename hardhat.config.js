const { EtherSymbol } = require("ethers");
const { gasReporter } = require("./task/block-number.js");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");
require("./task/block-number.js");
require("./task/accounts.js");
require("./task/balance.js");
require("hardhat-gas-reporter");
require("solidity-coverage");


/** @type import('hardhat/config').HardhatUserConfig */


const Sepolia_RPC_URL = process.env.Sepolia_RPC_URL || "https://eth-rinkeby";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "Oxkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Oxkey";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY  || "key";

module.exports = {
  defultNetwork: "hardhat",
  networks: {
    Sepolia: {
      url: Sepolia_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      }

  },

  solidity: "0.8.19",
  etherscan: {
    apikey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
  gasReporter:{
    enabled:true,
    outputFile: "gas-reporte.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap: COINMARKETCAP_API_KEY,

  }
  
};

