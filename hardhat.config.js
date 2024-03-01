const { EtherSymbol } = require("ethers");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");
require("./task/block-number.js");
require("./task/accounts.js");
require("./task/balance.js");

/** @type import('hardhat/config').HardhatUserConfig */


const Sepolia_RPC_URL = process.env.Sepolia_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;


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
};
