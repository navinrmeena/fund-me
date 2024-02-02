// improts
const { ethers, run, network } = require("hardhat");
const { error } = require("console");


// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying .......");
  const simpleStorage = await SimpleStorageFactory.deploy();
  // here is new update we just console.log();

  console.log("deployed contract =" + simpleStorage.target);
  // what happens when we deploy to our hardhat
  console.log(network.config);
  //  print current fev value;
  const CurrentVal = await simpleStorage.retrieve();
  console.log(`current fev number=${CurrentVal}`);

  // update the current fev value
  const transectionResponce = await simpleStorage.store(7);
  await transectionResponce.wait(1);//this is to wait unlit one more block validated in the block
  const updatedval= await simpleStorage.retrieve();
  console.log(`current fev number=${updatedval}`);

}

async function verify(contractAddress, args) {
  console.log("verifying conract .......");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (e - message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(error);
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
