require("@nomicfoundation/hardhat-toolbox");
const { task } = require("hardhat/config");

task("balance", "Prints an account's balance").setAction(async () => {});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};
