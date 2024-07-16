require("@nomicfoundation/hardhat-toolbox");
requiere("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  network: {
    solana: {
      url: prosses.env.solana_url,
      account: [prosses.env.PRIVATE_KEY],
    },
  },
};
