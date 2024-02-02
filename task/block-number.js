require("@nomicfoundation/hardhat-toolbox");
const { task } = require("hardhat/config");

task("block-number", "Prints blocknumber x").setAction(
  async (taskArg, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`this is current block number = ${blockNumber}`);
  }
);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
};

module.exports = {};
