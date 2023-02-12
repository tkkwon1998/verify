/** @type import('hardhat/config').HardhatUserConfig */
require("hardhat-deploy")
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
    }
  },
  networks: {
  },
  paths: {
    sources: "./src"
  }
};
